/** @format */

interface EnvironmentVars {
  APP: {
    API_URL: string;
  };
  DATABASE: {
    DB_URL: string;
  };
}

interface ConfigType {
  LOCAL: EnvironmentVars;
  STAGING: EnvironmentVars;
}

export const config: ConfigType = {
  LOCAL: {
    APP: {
      API_URL: 'http://localhost:8080/v1/graphql',
    },
    DATABASE: {
      DB_URL: 'postgres://universalstore:universalstore@postgres:5432/universalstore',
    },
  },
  STAGING: {
    APP: {
      API_URL: 'https://picked-cougar-89.hasura.app/v1/graphql',
    },
    DATABASE: {
      DB_URL:
        'postgres://hjmvdsgdlonpwx:e84acb99418ab7acf9f8f231384eb089925e55bda73a9f99362725e0c0854cf4@ec2-3-214-4-151.compute-1.amazonaws.com:5432/dd85fer996v6i6',
    },
  },
};
