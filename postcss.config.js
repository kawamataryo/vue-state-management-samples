module.exports = {
  plugins: [
    require("postcss-prefixer")({
      prefix: "bu-",
      ignore: [
        /is-/, // Modifiers
        /has-/,
        /are-/,
        /pt-/, // Padding helper classes
        /pr-/,
        /pb-/,
        /pl-/,
        /mt-/, // Margin helper classes
        /mr-/,
        /mb-/,
        /ml-/,
        /my/
      ]
    })
  ]
};
