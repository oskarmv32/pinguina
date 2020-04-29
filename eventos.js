var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);

document.addEventListener("mousemove", dibujarConMouse);
document.addEventListener("mouseup", mouseSinPresion);
document.addEventListener("mousedown", mousePresionado);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujos");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var xM;
var yM;
var estado;

dibujarLinea("red", x-1, y-1, x+1, x+1, papel);
dibujarLinea("red", 149,149 ,151 ,151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarConMouse(evento)
{
	if (estado == 1)
	{
		var colorcito = "blue";
		dibujarLinea(colorcito, xM, yM, evento.offsetX, evento.offsetY, papel);
	}
	xM = evento.offsetX;
	yM = evento.offsetY;
}

function mouseSinPresion(evento)
{
	estado = 0;
	xM = evento.offsetY;
	yM = evento.offsetY;
}

function mousePresionado(evento)
{
	estado = 1;
	xM = evento.offsetX;
	yM = evento.offsetY;
}


function dibujarTeclado(evento)
{
  var colorcito = "brown";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
    dibujarLinea(colorcito, x , y, x, y - movimiento, papel);
    y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x , y, x, y + movimiento,papel);
    y = y + movimiento;
    break;
    case teclas.LEFT:
    case teclas.UP:
    dibujarLinea(colorcito, x , y, x - movimiento, y,papel);
    x = x -movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x , y, x + movimiento, y,papel);
    x = x +movimiento;
    break;

  }
}
