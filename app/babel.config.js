/** @format */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      [
        'module:react-native-dotenv',
        {
          path: '../.env',
          moduleName: '&env',
        },
      ],
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./__tests__/'],
          '&data': './src/data',
          '&icons': './src/icons',
          '&theme': './src/theme',
          '&screens': './src/screens',
          '&navigation': './src/navigation',
          '&components': './src/components',
          '&graphql': './generated/graphql',
        },
      },
    ],
  ],
};
