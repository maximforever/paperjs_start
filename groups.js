console.log("ok!");

var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}

var text = new PointText(new Point(size.width-50, 50));
text.content = "Hello world! "
text.justification = 'right';

//PROTOTYPE CLASS OBJECT WITH FUNCTIONS:
function makeCircle(x,y){
	circle = Path.Circle({
		center: [x, y],
		radius: 50,
		fillColor: "#FFAE00",
		strokeWidth: 3,
		strokeColor: "#FDEFE2",
		opacity: 0.5
	});

	circle.onMouseEnter = function(event) {
		this.opacity = 0.8;
	}

	circle.onMouseLeave = function(event) {
		this.opacity = 0.5;
	}

	return circle;

};

circle1 = makeCircle(300,300);
circle3 = makeCircle(800, 300);

function onFrame(event){
	circle3.position.x +=4;
	if(circle3.position.x >size.width){
		circle3.position.x = 0;
	}
}



