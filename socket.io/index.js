let express = require("express");
let app = express();
let http = require("http").createServer(app);
let socketio = require("socket.io")(http);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

http.listen(3000, () => {
  console.log("Application up!");
});

socketio.on("connection", (socket) => {
  socket.on("Welcome", (data) => {
    console.log("Welcome");
    console.log(data);
  });

  socket.on("word", (data) => {
    console.log(data);
    socket.emit("result", data + " - node course");
  });

  socket.on("disconnect", () => {
    console.log("x disconnected: " + socket.id);
  });
});
