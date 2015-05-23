console.log("ok!");

var animate = false;

//PROTOTYPE CLASS OBJECT WITH FUNCTIONS:
function makeCircle(x,y, rad){
	circle = Path.Circle({
		center: [x, y],
		radius: rad,
		fillColor: "#FFAE00",
		strokeWidth: 3,
		strokeColor: "#FDEFE2",
		opacity: 0.8
	});

	circle.onMouseDown = function() {
		this.opacity = 0.5;
		console.log("on mouse down animate: " + animate);
	}

	circle.onMouseUp = function() {
		mergeCircles(this, circle1);
		this.opacity = 0.8;
		console.log("on mouse up animate: " + animate);
	}

	return circle;

};

circle1 = makeCircle(200, 200, 60);
circle2 = makeCircle(1200, 500, 40);


function mergeCircles(c1, c2){
	console.log("merging circles!");
	//Define circle positions:
	cen1 = c1.position;
	cen2 = c2.position;

	//Define move increments: 
	moveX = (cen1.x - cen2.x)/100;
	moveY = (cen1.y - cen2.y)/100;
	console.log("moveX: " + moveX + ", moveY: " + moveY );
	animate = true;
}

	function moveCircle(c, x, y) {
		console.log(c.position.x + ", " + c.position.y + ", " + "moving: " + x + ", " + y );
		c.position.x -= x;
		c.position.y -= y;
		circle2.position.x = c.position.x;
		circle2.position.y = c.position.y;

		if(c.position.x == circle1.position.x && c.position.y == circle1.position.y){
			animate = false;
			circle1.remove();
		}

	}


function onFrame(event) {
	if(animate == true){
		moveCircle(circle2, moveX, moveY)
		console.log("animating!");
	}




}
