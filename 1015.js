var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var eixo1 = lines.shift();
var p1 = eixo1.split(" ");
var x1 = parseFloat(p1[0]);
var y1 = parseFloat(p1[1]);

var eixo2 = lines.shift();
var p2 = eixo2.split(" ");
var x2 = parseFloat(p2[0]);
var y2 = parseFloat(p2[1]);


const distancia = Math.pow((x2-x1), 2) + Math.pow((y2-y1),2)
console.log(`${Math.sqrt(distancia).toFixed(4)}`)
