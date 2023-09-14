const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") res.end("welcome to server");
  else if (req.url == "/index") {
    res.end("wlcm to index");
  } 
  else if (req.url == "/login") {
    res.end(`
    <html>
    <body>
    <form action="">
        <h1>login</h1>
        <input type="text" placeholder="user name"/>
        <br>
        <br>
        <input type="email" placeholder="email">
        <br>
        <br>
        <input type="password" placeholder="password">
        <br>
        <br>
        <input type="submit">
    </form>
    </body>
    </html>`);
  } 
  else if (req.url == "/signup") {
    res.end(`<html>
    <body>
    <form action="">
        <h1>signup</h1>
        <input type="text" placeholder="user name"/>
        <br>
        <br>
        <input type="email" placeholder="email">
        <br>
        <br>
        <input type="password" placeholder="password">
        <br>
        <br>
        <input type="submit">
    </form>
    </body>
    </html>`);
  } 
  else if (req.url == "/about") {
    res.end("wlcm to about");
  } 
  else if (req.url == "/service") {
    res.end("wlcm to service");
  } 
  else if (req.url == "/product") {
    res.end("wlcm to product");
  } 
  else if (req.url == "/blog") {
    res.end("wlcm to blog");
  }
});

server.listen(8000, () => {
  console.log(`listining port 8000`);
});
