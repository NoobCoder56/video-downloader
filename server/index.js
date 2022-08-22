import http from "http"
import fs from "fs"

const server = http.createServer((req,res) => {
  let pageContent = ""
  fs.readFile("/home/red/vd/server/index.html","utf-8",(err,data) => {
   if(!err && data){
     pageContent = data
   } 
   else{
     pageContent = "404 page not found"
   }
  res.write(pageContent)
  res.end()
  })
})
server.listen(3000)
