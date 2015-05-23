var main = function() {
	console.log("Ready to go!");
};

/*	var myCircle = new Path.Circle(new Point(150, 150), 80);
	myCircle.strokeColor = "orange";
	myCircle.strokeWidth = 3;
	myCircle.strokeCap = "round";
	myCircle.fillColor = "black";

	function onMouseDown(event){
		myCircle.fillColor = "red";
	}
	function onMouseUp(event){
		myCircle.fillColor = "black";
	}	

	var myPath = new Path ();

*/

	var t1, t2, t3, t4, t5, neigh;

	mainX = 650;
	mainY = 350;
	var mainLoc = new Point(mainX, mainY);

	var mainTrack = new Path.Circle(mainLoc,80);
	mainTrack.fillColor = "#015A67";
	mainTrack.strokeWidth = 5;
	mainTrack.strokeColor = "#FF7A00";

	createNeighbor(mainLoc, "Track1", 0.9);
	createNeighbor(mainLoc, "Track2", 0.6);




	mainTrack.onMouseEnter = function(event){
		this.fillColor = "#017585";
	}

	mainTrack.onMouseDrag = function(event) {

	}
	
	mainTrack.onMouseLeave = function(event){
		this.fillColor = "#015A67";
	}


	function createNeighbor(master, name, simScore){
		var inX = master.x;
		var inY = master.y;

		
		var loc = new Point(inX - (110+simScore*120.5), inY - (110+simScore*120.5));

		var connect = new Path();
		connect.add(new Point(inX, inY), loc)
		connect.strokeWidth = 2;
		connect.strokeColor = "#017585"

		console.log("MASTER:" + master);
		console.log("inX:" + inX);
		console.log("inY:" + inY);
		
		neigh = new Path.Circle(new Point(loc),simScore*80);
		console.log("copy:" + neigh);





		neigh.fillColor = "#015A67";
		neigh.strokeWidth = 5;
		neigh.strokeColor = "#FF7A00";
		return neigh;
	}






$(document).ready(main);