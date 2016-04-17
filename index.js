'use strict';

const express = require('express');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage({}) });

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    res.json({
      error: 'No file uploaded'
    });
  }

  res.json({
    name: req.file.originalname,
    encoding: req.file.encoding,
    mimetype: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${app.get('port')}...`);
});
