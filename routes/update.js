var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  spawn('git', ['pull']);
  child.kill();
  startApp();
  res.send('ok.');
});

function startApp()
{
    child = spawn('node', ['app.js']);
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        var str = data.toString()
        console.log(str);
    });
    child.on('close', function (code) {
        console.log('process exit code ' + code);
    });
}

module.exports = router;
