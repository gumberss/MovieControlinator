const ks = require('node-key-sender')

module.exports = {

     playPause: async () =>  await ks.sendKey('Space')
}
