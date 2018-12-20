var arr = []

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(100);
}

function draw() {
arr[0] = [];
arr[1] = [];	
arr[0][1] = 50;
arr[0][2] = 50;	
	ellipse(arr[0][1],arr[0][2], 20, 20);
arr[1][1] = 100;
arr[1][2] = 100;	
	ellipse(arr[1][1],arr[1][2], 50, 50);

}
