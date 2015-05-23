console.log("ok!");

// first get the size from the window
// if that didn't work, get it from the body
var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}

console.log(size);

function Track(name, sim){
	sim = sim || 1;
	if(sim == 1){
		x = size.width/2;
		y = size.height/2;
	}
	else {
		newLoc = placeTrack(sim);
		trackCenter = new Point(size.width/2, size.height/2);
		console.log("center: " + trackCenter);
		trackCenter.angle += newLoc.angle;
		console.log("old length: " + trackCenter.length);
		trackCenter.length += newLoc.length;
		console.log("new length: " + trackCenter.length);
		console.log("new point: " + trackCenter);


		x = trackCenter.x;
		y = trackCenter.y;

		if(x<0){
			x *= -1;
		}
		if(y<0){
			y *= -1;
		}
	}
	

	xLoc = x;
	yLoc = y;
	radius = sim*80;
	thisTrack = Path.Circle(new Point(x,y), radius);
	thisTrack.strokeColor = "orange";
	thisTrack.strokeWidth = 3;
	thisTrack.fillColor = "#015A67";

	thisTrack.onMouseEnter = function(event){
			this.fillColor = "#017585";
	}
		
	thisTrack.onMouseLeave = function(event){
			this.fillColor = "#015A67";
	}
	
	if(sim !=1){
		connect = new Path();
		connect.add(new Point(xLoc, yLoc), new Point(size.width/2, size.height/2))
		connect.strokeColor = "#015A67";
		connect.strokeWidth = 3;
	}

	return thisTrack;
}	

function placeTrack(sim){
	sector = Math.ceil(Math.random()*5);				// Divide into 5 sectors of 72 degrees each - round up
	fineTune = Math.ceil(Math.random()*72);				// Find a random degree sliver
	angle = (72*sector - fineTune);
	console.log(angle);
	vector = new Point();
	vector.angle = angle;
	vector.length = sim*100;
	console.log(vector)
	console.log("angle: " + vector.angle)
	console.log("length: " + vector.length)
	return vector;
}


	MAIN_TRACK = new Track("main");
	MAIN_TRACK.strokeWidth = 6;

	t2 = new Track("second", 0.4);
