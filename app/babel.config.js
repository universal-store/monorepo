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
          '&lib': './src/lib',
          '&data': './src/data',
          '&icons': './src/icons',
          '&theme': './src/theme',
          '&utils': './src/utils',
          '&stores': './src/stores',
          '&screens': './src/screens',
          '&navigation': './src/navigation',
          '&components': './src/components',
          '&graphql': './generated/graphql',
        },
      },
    ],
  ],
};
