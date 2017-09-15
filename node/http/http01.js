const http = require('http');
const url = require('url');
const queryString = require('querystring');
//const path = require('path');
//const fs = require('fs');
const mysql = require('mysql');

let obj = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mmx'
}
let connection = mysql.createConnection(obj);
connection.connect();



/*
	200（OK）：服务器成功返回了页面
	304（Not Modified）：数据与服务器相同，不需要重服务器请求（直接使用缓存的数据）
	400（Bad Request）：语法错误导致服务器不识别
	401（Unauthorized）：请求需要用户认证
	404（Not found）：请求地址不存在
	500（Internal Server Error）：服务器出错或无响应
	503（ServiceUnavailable）：由于服务器过载或维护导致无法完成请求
*/
http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    var pathname = url.parse(req.url).pathname;
    pathname = pathname.slice(1);

    function postData(callback) {
        var data = '';
        req.on('data', function(dunck) {
            data += dunck;
        })
        req.on('end', function() {
            data = queryString.parse(data);
            callback(data);
        })
    }

    switch (pathname) {
        case 'select':
            connection.query('select * from qqnews', function(error, results, fields) {
                res.end(JSON.stringify(results));
            })
            break;
        case 'insert':
            postData(function(data) {
                let sql = `insert into qqnews(newsId,uinname,title,time,source)`;
                sql += `values('${data.newsId}','${data.uinname}','${data.title}','${data.time}','${data.source}');`;
                connection.query(sql, function(error, results, fields) {
                    var obj = {
                        status: true,
                        data: results
                    }
                    res.end(JSON.stringify(obj));
                })
            })
            break;
        case 'update':
            postData(function(data) {
                let sql = `update qqnews set`;
                sql += ` newsId='${data.newsId}',`;
                sql += ` uinname='${data.uinname}',`;
                sql += ` title='${data.title}',`;
                sql += ` time='${data.time}',`;
                sql += `source='${data.source}' where`;
                sql += ` id=${data.id};`;
                connection.query(sql, function(error, results, fields) {
                    var obj = {
                        status: true,
                        data: results
                    }
                    res.end(JSON.stringify(obj));
                })
            })
            break;
        default:
            postData(function(data) {
                let sql = `delete from qqnews where`;
                sql += ` id=${data.id};`;
                connection.query(sql, function(error, results, fields) {
                    var obj = {
                        status: true,
                        data: results
                    }
                    res.end(JSON.stringify(obj));
                })
            })
    }
}).listen(1234);