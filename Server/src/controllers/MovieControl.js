const ks = require('node-key-sender')

module.exports = {

     playPause: () => ks.sendKey('space')
}
