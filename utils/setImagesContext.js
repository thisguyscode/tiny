const setImagesContext = () => {
  return require.context('~/assets/images/', true, /\.(png|jpe?g|gif|svg|tiff|webp)$/i)
}

export default setImagesContext
