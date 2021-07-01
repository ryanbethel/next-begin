const next = require("next");
const express= require("express")
const react = require('react')
const get_dom = require('react-dom')
const arc = require('@architect/functions')

//const dev = process.env.NODE_ENV !== "production";
const app = next({ dev:false });
const handle = app.getRequestHandler();
//const port = process.env.PORT || 3000;

// exports.handler = arc.http.async(async () => {
//   try {
//     await app.prepare();
//     const server = express();
//     server.all("*", (req, res) => {
//       return handle(req, res);
//     });
//     return server
//   } catch (e) {
//     console.error(e);
//     process.exit(1);
//   }
// });

let server= express()

//server.get('/', (req, res) => res.send('Hello World!'))
//server.get('/cool', (req, res)=> res.send('very cool'))
server.get("*", (req, res) => {
       return handle(req, res);
     });

const { parse } = require('url');
const serverless = require('serverless-http');
//app.handle=handle

module.exports.handler = serverless(server)