const ks = require('node-key-sender')

module.exports = {

     playPause: () => ks.sendKey('space'),
     jumpForward: (type) => {

          const jumpTypes = {
               'three-seconds': ['shift', 'right'],
               'ten-seconds': ['alt', 'right'],
               'minute': ['control', 'right'],
               'five-minutes': ['control', 'alt', 'right'],
          }

          var commands = jumpTypes[type]

          console.log(commands)

          commands && ks.sendCombination(commands)

     },
     jumpBack: (type) => {

          const jumpTypes = {
               'three-seconds': ['shift', 'left'],
               'ten-seconds': ['alt', 'left'],
               'minute': ['control', 'left'],
               'five-minutes': ['control', 'alt', 'left'],
          }

          var commands = jumpTypes[type]

          console.log(commands)

          commands && ks.sendCombination(commands)
     },
     volumeUp: () => ks.sendCombination(['control', 'up']),
     volumeDown: () => ks.sendCombination(['control', 'down'])


}
