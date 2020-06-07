import express from 'express'
import cors from 'cors'
import serveStatic from 'serve-static'
import bodyParser from 'body-parser'
import path from 'path'
import routes from './routes'

const app = express();

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/uploads', serveStatic(path.resolve(__dirname, '..', 'uploads'), {
    index:false,
    dotfiles:"deny",
    cacheControl:true,
    immutable:true
}))


app.use(routes)

app.listen(3333)