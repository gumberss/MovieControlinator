var movieControl = require('./controllers/MovieControl')

module.exports = {
    async registerEvent(socket) {

        console.log(`User: ${socket.id} connected`)

        socket.on('disconnect', () => console.log(`User: ${socket.id} disconnected`))

        socket.on('play-pause', MovieControl.playPause)

        socket.on('volume-up', MovieControl.volumeUp)
        socket.on('volume-down', MovieControl.volumeDown)

        socket.on('jump-forward', MovieControl.jumpForward)
        socket.on('jump-back', MovieControl.jumpBack)

        socket.on('subtitle-delay-up', MovieControl.subtitleDelayUp)
        socket.on('subtitle-delay-down', MovieControl.subtitleDelayDown)
    }
}

