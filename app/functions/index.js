/** @format */

const admin = require('firebase-admin');
const functions = require('firebase-functions');

const request = require('graphql-request');

require('dotenv').config();

admin.initializeApp(functions.config().firebase);

exports.registerUser = functions.https.onCall(async data => {
  const { email, password } = data;

  if (email === null || password === null) {
    // We are throwing an error if either the email or the password is missing
    // We should also ideally validate these on the frontend so the request is never made if those fields are missing
    throw new functions.https.HttpsError('invalid-argument', 'email and password are required fields');
  }

  try {
    // We create our user using the firebase admin sdk
    const userRecord = await admin.auth().createUser({ email, password });

    // We set our user role and the x-hasura-user-id claims
    // Remember, the x-hasura-user-id is what Hasura uses to check
    // if the user is allow to read/update a record
    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'Shopper',
        'x-hasura-allowed-roles': ['Shopper', 'StoreAdmin'],
        'x-hasura-user-id': userRecord.uid,
      },
    };

    await admin.auth().setCustomUserClaims(userRecord.uid, customClaims);
    return userRecord.toJSON();
  } catch (e) {
    let errorCode = 'unknown';
    let msg = 'Something went wrong, please try again later';
    if (e.code === 'auth/email-already-exists') {
      // If a user that already has an account tries to sign up
      // we want to show them a proper error and instruct them to log in
      errorCode = 'already-exists';
      msg = e.message;
    }
    throw new functions.https.HttpsError(errorCode, msg, JSON.stringify(e));
  }
});

const client = new request.GraphQLClient(process.env.GRAPHQL_API, {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  },
});

exports.processSignUp = functions.auth.user().onCreate(async user => {
  const { uid: id, email } = user;

  const createUserMutation = `
    mutation CreateUser($id: String!, $email: String!) {
      insert_User_one(object: { id: $id, email: $email }) {
        id
      }
    }
  `;

  try {
    const data = await client.request(createUserMutation, { id, email });
    return data;
  } catch (e) {
    throw new functions.https.HttpsError('invalid-argument', e.message);
  } finally {
  }
});
