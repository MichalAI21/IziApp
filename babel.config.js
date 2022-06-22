module.exports = function (api) {
  api.cache(true);
  return {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "chrome": "66"
            }
          }
        ],
        "@babel/preset-react",
      ],
      "plugins": [
        "@babel/plugin-proposal-class-properties",
      ]
  }
}
