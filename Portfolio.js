const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
var http = require("http");

http.createServer (fonction (demand, response) {
// See the text HTTP
// Statut HTTP: 200 OK
// Type of content: text/plain
response.writeHead(200, {'Content-Type' : 'text/plain'});
// Send the response to the form “Hello World”
response.end('Bonjour tot le monde\n');
}).écouter(3000);
// The console imprimera the message
console.log('Server running at http://127.0.0.1:3000/');