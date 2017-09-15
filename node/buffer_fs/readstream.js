const fs = require('fs');
const readerStream = fs.createReadStream('input.txt');

let data = '';

readerStream.on('data', function(chunk) {
    data += chunk;
})

readerStream.on('end', function() {
    console.log('数据接收完成');
    console.log(data);
})

readerStream.on('error', function() {
    console.log('数据接收失败');
})