
// location matrix D:0 M:1 EB:2 T:3 WG:4 GK:5 GG:6 F:7
var currentLocationsInt = 0;
//var currentLocationsStr = locations[currentLocationsInt];

var gameScore = 5;

var locationLog = [''];


var locations = new Array();
locations[-1] = "You cannot traverse the map this way";
locations[0] = "Dungeon cell"; //Dungeon cell
locations[1] = 'Maze to Nowhere'; // Maze to Nowhere
locations[2] = 'east bridge'; //east bridge 
locations[3] = 'Troll'; //Troll
locations[4] = 'west gate '; //west gate 
locations[5] = 'golden key'; //golden key
locations[6] = 'golden gate'; //golden gate
locations[7] = 'open field'; //open field

var matrix = [
   //N  S  E  W
	[6, 1, 2, 4],//Dungeon cell
	[0,-1,-1,-1],// Maze to Nowhere
	[-1,3,-1, 0],//east bridge 
	[2,-1,-1,-1],//Troll
	[-1,-1,0, 5],//west gate 
	[-1,-1,4,-1],//golden key
	[7,0,-1,-1 ],//golden gate
	[-1,6,-1,-1]//open field
	];
	



function display(){
	document.getElementById("display").value = locations[currentLocationsInt] + " " + gameScore ;
	
	
}

function move(cl,dir){
	
	
	//currentLocation = locations[matrix[cl][dir]];
	var newLocation = matrix[cl][dir];
	
	if (newLocation >= 0){
	currentLocationsInt = newLocation;
	
		if (locationLog.indexOf(locations[currentLocationsInt]) === -1){
			gameScore = gameScore + 5;
		} else{
			//do nothing
		}
	locationLog.push(locations[currentLocationsInt]);
	display();
	} else {
		currentLocationsInt = currentLocationsInt;
		document.getElementById("display").value = "You cannot traverse the map this way";
	}
	
	
	
}