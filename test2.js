console.log("ok!");

var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}


var trackSlots =[false, false, false, false, false];

var centerOfCircle = new Point(size.width/2,size.height/2);

ref = Path.Circle({
	center: centerOfCircle,
	radius: 20,
	fillColor: "red",
	strokeColor: "black",
	strokeWidth: 2

});

// this is the function that'll randomly place a track with size based on similarity
function placeCircle(sim){

	// keep doing this until we find an empty sector
	do{
		//generate and log random sector (out of 5):
		sector = Math.ceil(Math.random()*5);
		console.log("Sector: "  + sector)
	}while(trackSlots[sector] == true);

	trackSlots[sector] = true;




	// generate and log random sector (out of *50%!! - because we're giving a 22 degree buffer between sectors. 
	// We subtract 22 degrees later on, so the fine-tuning slice selection only needs pick from 50 degrees):

	slice = Math.ceil(Math.random()*50);
	console.log("Slice: "  + slice); 

	// combine them into a concrete transform angle and log that
	// we subtract 22 degrees to prevent overlap
	randomAngle = sector*72-22 - slice;
	console.log("The transform angle is: " + randomAngle)

	vector = new Point({
		angle: randomAngle,
		length: 300*sim+40
	});


	circle = Path.Circle({
		center: centerOfCircle + vector,
		radius: 80*sim,
		fillColor: "blue",
		strokeColor: "black",
		strokeWidth: 2

	});

	circle.randomAngle = randomAngle;

	connector = new Path(centerOfCircle, circle.position);
	connector.strokeWidth = 2;
	connector.strokeColor = "black";

	console.log("new angle: " + randomAngle + ", " + centerOfCircle.length);
	console.log("new location :" + circle.position);

	return circle;

}


t1 = placeCircle(0.5);
t2 = placeCircle(0.2);
t3 = placeCircle(0.9);
t4 = placeCircle(0.8);
t5 = placeCircle(0.7	);






