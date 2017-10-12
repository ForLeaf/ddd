var app = document.getElementById('app');
var time = document.getElementById('time');
var timer = setInterval(updateClock, 1000);

function updateClock(){
	time.innerHTML = (new Date()).toString();
}

app.style.display = 'table-cell';
app.style.width = '400px';
app.style.height = '400px';
app.style.border = '3px solid #339';
app.style.background = '#fff';
app.style.color = 'yellow';
app.style.textAlign = 'center';
app.style.verticalAlign = 'middle';

// var img = document.createElement('img')
// img.src = './app/assets/o_bg5.jpg';
// app.appendChild(img)

if(module.hot){
	module.hot.accept();
	module.hot.dispose(function(){
		clearInterval(timer);
	});
}

