import express from "express";
import config from './config.js'
const app =express();
import cors from 'cors'
import SPACE_routes from './routes/HD_SPACE_routes.js'

//setings
app.set('port', config.port )

app.use(cors())

app.use(SPACE_routes)




export default app;