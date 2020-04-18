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

io.on('connection', socket => routes.registerEvent)

server.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000')
})