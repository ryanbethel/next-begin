// const { parse } = require('url');
// const next = require('next');
// const serverless = require('serverless-http');
// const arc = require('@architect/functions')

// const app = next({
//   dev: false,quiet:false
// });

// console.log('here')
// const requestHandler = app.getRequestHandler();
//exports.handler = arc.http.express((req,res)=>requestHandler(req,res))

//exports.handler =  async (req, res) => {
// exports.handler = serverless(async (req, res) => {
//  const parsedUrl = parse(req.url, true);
//   //console.log(parsedUrl)
//   //console.log(req)
//    //requestHandler(req, res,parsedUrl);
//    console.log(res);
//  let out = await requestHandler(req, res, {url:req.url})
// });
// exports.handler = arc.http.async(async (req) => {
//   let res
//   let out = await requestHandler(req, res, {url:'/'})
//   console.log(res)
// return res})
  


const express = require("express");
const next = require("next");
const react = require('react')
const get_dom = require('react-dom')
const arc = require('@architect/functions')

//const port = parseInt(process.env.PORT, 10) || 3000;
//const dev = process.env.NODE_ENV !== "production";
const app = next({ dev:false });
const handle = app.getRequestHandler();

let server = express()
//server.get('/', (req, res) => res.send('Hello World!'))
//server.get('/alive', (req, res)=> res.send('very cool'))
//server.get('/test', (req, res) => res.send('everything'))
//server.get("/", async (req, res) => {
//  await app.prepare()
//  return app.render(req, res, "/", req.params);
//});
server.get("*", async (req, res) => {
  try {
    await app.prepare()
    return handle(req, res);
  }
  catch (e){console.log(e)}
});


exports.handler = arc.http.express(server)
//app
//  .prepare()
//  .then(() => {
//    const server = express();
//
 //   server.get("/", (req, res) => {
//      return app.render(req, res, "/", req.params);
//    });
//
//    server.get("/about", (req, res) => {
//      return app.render(req, res, "/about", req.params);
//    });

//    server.get("*", (req, res) => {
//      return handle(req, res);
//    });
//
//    server.listen(port, err => {
//      if (err) throw err;
//      console.log(`> Ready on http://localhost:${port}`);
//    });
//  })
//  .catch(ex => {
//    console.log(ex);
//    process.exit(1);
//  });
