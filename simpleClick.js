console.log("got it!");

// Create a circle shaped path at the center of the view:
var circle = new Path.Circle({
    center: view.center,
    radius: 25,
    fillColor: 'black'
});

var shiftPath = function() {
    this.position += new Point(15,15);
};

// When the mouse enters the item, set its fill color to red:
circle.attach('mousedown', function onFrame(event) {
    this.fillColor = 'red';
});

circle.on('mousedown', shiftPath);

// When the mouse leaves the item, set its fill color to black
// and remove the mover function:
