
// location matrix D:0 M:1 EB:2 T:3 WG:4 GK:5 GG:6 F:7

//var currentLocationsStr = locations[currentLocationsInt];

var gameScore = 5;

var locationLog = [''];

//var visit = new Boolean(1);
//constructor
function Location(id,name,desc,item)
{
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.item = item;
	
}

//objects
var dungeon = new Location(0,"Dungeon Cell","You start in a cold dungeon cell","axe");
var maze = new Location(1,"Maze to Nowhere","You get lost in a maze with no end in sight.......","you get nothing");
var east_bridge = new Location(2,"East Bridge","You walk across a bridge","you get nothing");
var Troll = new Location(3,"Troll","You encounter a large troll. Hit troll with axe!","you get nothing");
var West_Gate = new Location(4,"West Gate","You open a large gate","you get nothing");
var Key = new Location(5,"Golden Key","You pick up a shiny gold key!!","Golden Key");
var Golden_Gate = new Location(6,"Golden Gate","You see a large gold gate, maybe something can open it ","you get nothing");//needs gold key
var Open_Field = new Location(7,"Open Field","You reach open air!","you get nothing");




var locations = new Array();
locations[-1] = "You cannot traverse the map this way";
locations[0] = dungeon.name; //Dungeon cell
locations[1] = maze.name // Maze to Nowhere
locations[2] = east_bridge.name; //east bridge 
locations[3] = Troll.name; //Troll
locations[4] = West_Gate.name; //west gate 
locations[5] = Key.name; //golden key
locations[6] = Golden_Gate.name; //golden gate
locations[7] = Open_Field.name; //open field

var currentLocationsInt = 0;


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
	document.getElementById("display").value = locations[currentLocationsInt]; //+ " " + gameScore 
	//document.getElementById("display").value = dungeon.;
	
}

function move(cl,dir){
	
	
	//currentLocation = locations[matrix[cl][dir]];
	var newLocation = matrix[cl][dir];
	
	if (newLocation >= 0){
	currentLocationsInt = newLocation;
	/*
		if (locationLog.indexOf(locations[currentLocationsInt]) === -1){
			gameScore = gameScore + 5;
		} else{
			//do nothing
		}*/
	//locationLog.push(locations[currentLocationsInt]);
	display();
	} else {
		currentLocationsInt = currentLocationsInt;
		document.getElementById("display").value = "You cannot traverse the map this way";
	}
	
	
	
}