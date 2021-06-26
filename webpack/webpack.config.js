module.exports = env => {
  return require(`./webpack.config.${env.env}.js`)
}