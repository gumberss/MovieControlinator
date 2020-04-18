const app = require('express')()
//var cors = require('cors')
//const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

const routes = require('./routes')
/*

app.use((req, res, next) => {
    req.io = io
    return next()
})

*/
//app.use(cors())
//app.use(express.json())
//app.use(require('./routes'))

io.on('connection', routes.registerEvent)

server.listen(5000, '192.168.100.77', () => {
    console.log('Server started on port 5000')
})