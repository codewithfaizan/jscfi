import http from "http";

const port = 5000;

const server = http.createServer((req, res) => {
    let i = 0;
    console.log(i);
    i++
  res.end("Lollipop pucho Ahmed k wastey bhi");
});

server.listen(port, () => {
  console.log("Server Started at Port :", port);
});

