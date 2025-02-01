module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'], // Necessário para o Expo
      plugins: [
        'react-native-reanimated/plugin', // Adicione aqui o plugin
      ],
    };
};
  