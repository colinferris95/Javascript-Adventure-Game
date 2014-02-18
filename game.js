

// location matrix D:0 M:1 EB:2 T:3 WG:4 GK:5 GG:6 F:7


//constructor
function Location(id,name,desc,item,visit)
{
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.item = item;
	this.visit = visit;
	
}

//objects
var dungeon = new Location(0,"Dungeon Cell","You start in a cold dungeon cell, and see some sort of a weapon....\n\n"," Axe",false);
var maze = new Location(1,"Maze to Nowhere","You get lost in a maze with no end in sight.......\n\n","nothing",false);
var east_bridge = new Location(2,"East Bridge","You walk across a bridge\n\n","you get nothing");
var Troll = new Location(3,"Troll","You encounter a large troll. Hit troll with axe!\n\n","nothing",false);
var West_Gate = new Location(4,"West Gate","You open a large gate\n\n","nothing",false);
var Key = new Location(5,"Golden Key Room","You see a shiny key on the ground\n\n","Golden Key",false);
var Golden_Gate = new Location(6,"Golden Gate","You see a large gold gate, maybe something can open it\n\n ","nothing",false);//needs gold key
var Open_Field = new Location(7,"Open Field","You reach open air!\n\n","nothing",false);



//locations
var locations = new Array();
locations[-1] = "You cannot traverse the map this way";
locations[0] = dungeon; //Dungeon cell
locations[1] = maze; // Maze to Nowhere
locations[2] = east_bridge; //East Bridge 
locations[3] = Troll; //Troll
locations[4] = West_Gate; //West Gate 
locations[5] = Key; //Golden Key
locations[6] = Golden_Gate; //Golden Gate
locations[7] = Open_Field; //Open Field

//Globals
var currentLocationsInt = 0;

var inventory = [];

var gameScore = 0 ;

var locked = true;

//Location Matrix
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
	


//updates display with game information
function display(){
	document.getElementById("display").value =  
	locations[currentLocationsInt].desc +  '' + 
	'Location: '  + locations[currentLocationsInt].name  + ' ' + 
	'Score: ' + gameScore + ' ' + 'Inventory: '  + inventory  ;
	//document.getElementById("display").value = dungeon.;
	
}

function go(cl){
	var textDir = document.getElementById("textInput").value;
	
	if (textDir === "n" || "N" || "north" || "North"){
		var newLocation = matrix[cl][0];
		var loc = 0;
	} else if (textDir === "s" || "S" || "south" || "South"){
		var newLocation = matrix[cl][1];
		var loc = 1;
	} else if (textDir === "e" || "E" || "east" || "East"){
		var newLocation = matrix[cl][2];
		var loc = 2;
	} else if (textDir === "w" || "W" || "west" || "West"){
		var newLocation = matrix[cl][3];
		var loc = 3;
	}
	
	if (newLocation >= 0 && currentLocationsInt !== 6){
		currentLocationsInt = newLocation;
		display();
	} else if(locations[currentLocationsInt] === Golden_Gate && loc === 0 && locked === true){
		document.getElementById("alert").value = "You must unlock this door first";
		currentLocationsInt = 0;
		display();
	} else if(locations[currentLocationsInt] === Golden_Gate && loc === 0 && locked === false){
		currentLocationsInt = newLocation;
		display();
	}
	
	else {
		document.getElementById("display").value = "You cannot traverse the map this way, you are still in " + 
		locations[currentLocationsInt].name ;
	}
	
	if (locations[currentLocationsInt].visit === false){
		locations[currentLocationsInt].visit = true;
		gameScore = gameScore + 5;	
		
		display();
	}
}

//Moves the player
function move(cl,dir){
	
	var newLocation = matrix[cl][dir];
	
		if (newLocation >= 0 && currentLocationsInt !== 6){
			currentLocationsInt = newLocation;
			document.getElementById("alert").value = " ";
			display();
		} else if(locations[currentLocationsInt] === Golden_Gate && dir === 0 && locked === true){
			document.getElementById("alert").value = "You must unlock this door first";
			currentLocationsInt = 0;
			display();
		} else if(locations[currentLocationsInt] === Golden_Gate && dir === 0 && locked === false){
			currentLocationsInt = newLocation;
			display();
		} else if (newLocation === -1) {
			document.getElementById("alert").value = "You cannot traverse the map this way, you are still in " + 
			locations[currentLocationsInt].name ;
			display();
		}
		
		if (locations[currentLocationsInt].visit === false){
			locations[currentLocationsInt].visit = true;
			gameScore = gameScore + 5;	
			display();
		}
		
	}

	

//allows player to take items.
function action(){
		if (locations[currentLocationsInt].item !== "nothing"){
			inventory.push(locations[currentLocationsInt].item);
			document.getElementById("alert").value = 'You picked up an item!';//change this
			display();
		}
		if (locations[currentLocationsInt] === Golden_Gate && inventory.indexOf("Golden Key") === -1){
			document.getElementById("alert").value = 'you do not have the key to open this door';
			currentLocationsInt = 0;
			display();
		} else if(locations[currentLocationsInt] === Golden_Gate) {
			document.getElementById("alert").value = 'move north brave warrior!';
			locked = false;
			
		}	
	}


function help(){
	alert("Welcome to Dungeon's Keep, a text based adventure game written in javascript. Use the directional buttons to move around the game map, and the action button to pick up items and use them. Have fun!");
	
	
	
}
