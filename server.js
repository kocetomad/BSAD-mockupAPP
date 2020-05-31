var express = require("express");
var app = express();

app.use(express.static("views/LoginForm"));
app.use("/EndUser/index.html", express.static("views/EndUser"));
app.use(
  "/MajorIncidentsManager/index.html",
  express.static("views/MajorIncidentsManager")
);

app.use("QueueManager/index.html", express.static("views/QueueManager"));

app.use("/Resolver/index.html", express.static("views/Resolver"));

app.use("/ServiceDesk/index.html", express.static("views/ServiceDesk"));

app.use("/Technician/index.html", express.static("views/Technician"));

app.use("/Incident /NewIncident/index.html", express.static("views/Incident /NewIncident"));

app.use("/Incident /AllIncidents/index.html", express.static("views/Incident /AllIncidents"));

app.listen(3000);
