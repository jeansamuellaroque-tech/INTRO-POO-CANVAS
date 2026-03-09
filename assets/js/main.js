const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;


/* CLASE CIRCLE */

class Circle{

constructor(x,y,radius,color,text,backcolor,textcolor){

this.posX = x;
this.posY = y;
this.radius = radius;
this.color = color;
this.text = text;
this.backcolor = backcolor;
this.textcolor = textcolor;

}

draw(context){

context.shadowColor="rgba(0,0,0,0.3)";
context.shadowBlur=10;

context.beginPath();
context.arc(this.posX,this.posY,this.radius,0,Math.PI*2,false);

context.fillStyle=this.backcolor;
context.fill();

context.lineWidth=4;
context.strokeStyle=this.color;
context.stroke();

context.textAlign="center";
context.textBaseline="middle";
context.font="bold 18px Arial";

context.fillStyle=this.textcolor;
context.fillText(this.text,this.posX,this.posY);

context.closePath();

}

}


/* OBJETO OOP */

let miCirculo = new Circle(
canvasOOP.width/2,
canvasOOP.height/2,
50,
"rgb(57,224,155)",
"Tec",
"rgb(66,135,245)",
"white"
);

miCirculo.draw(ctx);


/* RANDOM */

let randomRadius = Math.floor(Math.random()*90)+20;

let randomX = Math.random()*(canvasRandom.width-2*randomRadius)+randomRadius;
let randomY = Math.random()*(canvasRandom.height-2*randomRadius)+randomRadius;

let miCirculoRandom = new Circle(
randomX,
randomY,
randomRadius,
"green",
"Tec",
"rgb(83,186,52)",
"white"
);

miCirculoRandom.draw(ctxRandom);



/* MULTIPLES OBJETOS */

let arrayCircle=[];

for(let i=0;i<5;i++){

let randomRadius = Math.floor(Math.random()*30)+40;

let randomX = Math.random()*(canvasMultiple.width-2*randomRadius)+randomRadius;
let randomY = Math.random()*(canvasMultiple.height-2*randomRadius)+randomRadius;

let randomColor = `rgb(${Math.floor(Math.random()*255)},
${Math.floor(Math.random()*255)},
${Math.floor(Math.random()*255)})`;

let miCirculoMultiple = new Circle(
randomX,
randomY,
randomRadius,
randomColor,
i+1,
randomColor,
"white"
);

arrayCircle.push(miCirculoMultiple);
arrayCircle[i].draw(ctxMultiple);

}