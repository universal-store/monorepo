/** @format */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./__tests__/'],
          '&screens': './src/screens',
          '&graphql': './generated',
          '&navigation': './src/navigation',
          '&components': './src/components',
        },
      },
    ],
  ],
};
