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
          '&theme': './theme',
          '&graphql': './generated',
          '&screens': './src/screens',
          '&navigation': './src/navigation',
          '&components': './src/components',
        },
      },
    ],
  ],
};
