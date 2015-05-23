console.log("ok!");

var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}


var text = new PointText(new Point((size.width-200), 50));

var centerOfCircle = new Point(400,400);

ref = Path.Circle({
	center: centerOfCircle,
	radius: 10,
	fillColor: "red",
	strokeColor: "black",
	strokeWidth: 2

});

circle = Path.Circle({
	center: centerOfCircle,
	radius: 80,
	fillColor: "blue",
	strokeColor: "black",
	strokeWidth: 2

});

text.content = "Circle center: " + circle.bounds.center;


console.log(circle);
console.log(centerOfCircle.angle + ", " + centerOfCircle.length);

vector = new Point({
	angle: 240,
	length: 282.842712474619
});

centerOfCircle += vector;
console.log("new center: " + centerOfCircle.angle + ", " + centerOfCircle.length);
console.log("new location :" + centerOfCircle);
circle.position= centerOfCircle;













//BOUNCE BALL LEFT AND RIGHT:

function animate(c){
	 back = false;

	c.onFrame = function onFrame(event){
		size = {
		  width: window.innerWidth || document.body.clientWidth,
		  height: window.innerHeight || document.body.clientHeight
		}	
		pos = c.position;
			
			if(!back){
				if((pos.x+80)<size.width){
					pos.x +=16;
				} else {
					back = true;
				}
			} else{
				if((pos.x-80)>0){
					pos.x -=16;
				} else {
					back = false;
				}
			}
		text.content = "Circle center: " + pos;		
	}
}


	
