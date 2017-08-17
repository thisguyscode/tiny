module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'Chrome >= 28',
        'Firefox >= 28',
        'Edge >= 12',
        'Explorer >= 9',
        'Safari >= 5.1',
        'iOS >= 7',
        'Android >= 4',
        'ExplorerMobile >= 11',
        'ChromeAndroid >= 54',
        'FirefoxAndroid >= 50',
        'UCAndroid >= 11',
        'OperaMobile >= 12.1',
        'BlackBerry >= 10',
        'Samsung >= 4'
      ]
    })
  ]
}
