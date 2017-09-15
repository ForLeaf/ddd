const fs = require('fs');
const writerStream = fs.createWriteStream('input.txt');

var data = 'hello world';

//使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

//console.log(writerStream)
writerStream.end();
//处理流事件 stream 是 eventEmitter 的实例 自定义方法包括 data end error finish
writerStream.on('finish', function() {
    console.log('写入结束')
})