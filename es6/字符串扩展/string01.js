function str01(){
	//JavaScript允许采用\uxxxx形式表示一个字符  \u0000~\uFFFF
	let str = "\u0061";
	console.log(str);

	//ES6 对这一点做出了改进，只要将码点放入大括号
	let str02 = "\u{20BB7}";
	console.log(str,str02);
}
//str01();

function str02(){
	 let tf01 = '\z' === 'z';
	 let tf02 = '\172' === 'z';
	 let tf03 = '\x7A' === 'z';
	 let tf04 = '\u007A' === 'z';
	 let tf05 = '\u{7A}' === 'z';
	 console.log(tf01,tf02,tf03,tf04,tf05)
}
//str02();

function str03(){
	var text = String.fromCodePoint(0x20BB7);

	for(let i of text){
		console.log(i)
	}
}
//str03();

function str04(){
	var s = "Hello World";
	var tof01 = s.startsWith('H');
	var tof02 = s.endsWith('World');
	var tof03 = s.includes('o');
	console.log(tof01, tof02, tof03);
}
//str04()

function str05(){
	var ns01 = 's'.padStart(4);
	var ns02 = 's'.padEnd(4);

	var news01 = '12'.padStart(10,'YYYY-MM-DD');
	var news02 = '19900302'.padStart(10,'YYYY-MM-DD');
	console.log(ns01,ns02,news01,news02);  
}
//str05();

function str06(){
	var template = `
	<ul>
	  <% for(var i=0; i < data.supplies.length; i++) { %>
		<li><%= data.supplies[i] %></li>
	  <% } %>
	</ul>
	`;
	function compile(template){
		var evalExpr = /<%=(.+?)%>/g;
		var expr = /<%([\s\S]+?)%>/g;
	  
		template = template
		  .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
		  .replace(expr, '`); \n $1 \n  echo(`');
	  
		template = 'echo(`' + template + '`);';
	  
		var script =
		`(function parse(data){
		  var output = "";
	  
		  function echo(html){
			output += html;
		  }
	  
		  ${ template }
	  
		  return output;
		})`;
	  
		return script;
	}
}

