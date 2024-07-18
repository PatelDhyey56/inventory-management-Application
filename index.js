require('dotenv').config();
const express = require('express');
const path = require('path');
const portFinder = require('portfinder');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('./logs.js');
const route = require('./routes/route.js');
const passport = require('passport');
const { auth } = require('./middleware/auth.js');
const fs = require("fs");

const uploadsFolder = path.join(__dirname, `./public/uploads/`);
const csvFileFolder = path.join(__dirname, `./public/uploads/csvFiles`);
const pdfFileFolder = path.join(__dirname, `./public/uploads/pdfFiles`);

if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder);
}
if (!fs.existsSync(csvFileFolder)) {
  fs.mkdirSync(csvFileFolder);
}
if (!fs.existsSync(pdfFileFolder)) {
  fs.mkdirSync(pdfFileFolder);
}


// Socket IO
const http = require('http');
const { Server } = require('socket.io');
const {
  getAllNotifications,
  readNotifications,
} = require('./service/notification/index.js');

const { unlinkProductPdf } = require('./controller/commonFunctions/commonFunctions.js');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', async (socket) => {

  const results = await getAllNotifications();
  io.emit('notifications', results);
  socket.on('readyForNotifications', async () => {
    const results = await getAllNotifications();
    io.emit('notifications', results);
  });

  socket.on('markAsRead', async () => {
    await readNotifications();
  });
  socket.on('unlinkProductPdf', (req) => {
    unlinkProductPdf(req);
  });
});

app.use(passport.initialize());
auth(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));
app.use(
  '/charts',
  express.static(path.join(__dirname, 'node_modules/apexcharts/dist'))
);
app.use(
  '/sweetalert2',
  express.static(path.join(__dirname, '/node_modules/sweetalert2/dist'))
);

//ejs file render we need to set path of located files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());

//routes
app.use(route);

portFinder.getPort(function (err, port) {
  try {
    if (err) throw err;
    server.listen(port, (error) => {
      logger.info('Server Listen At ' + port);
    });
  } catch (err) {
    logger.logError('Error In Server Listen: ' + err);
  }
});

app.use('*', (req, res) => {
  // res.send({ message: 'Not Found' });
  return res.render('components/errorPage');
});
