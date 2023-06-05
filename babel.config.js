module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ]
  ]
}
