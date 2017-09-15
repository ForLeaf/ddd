const fs = require('fs');
const buffer = require('buffer');

fs.readFile('input.txt', function(err, data) {
    console.log('data', data.toString());
})
fs.open('input.txt', 'r+', function(err, fd) {
    console.log('fd', fd);
})
fs.stat('input.txt', function(err, stat) {
    console.log('stat', stat);
    console.log('isFile', stat.isFile());
})

fs.writeFile('output.txt', '我是要写入的对象', function(err) {
    if (err) {
        return console.error(err)
    }
})