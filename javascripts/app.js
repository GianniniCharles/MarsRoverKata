// Rover Object Goes Here
// ======================

let rover = {
  //possible directions: "N", "S", "E", "W". Default is "N".
  direction: "N",
  olddirection: null,
  x: 0,
  y: 0,
  travellog: [],
}
/*
We will create an array for travel log, which we did. After each move, travellog.push previous coordinates (idk if I will use a for loop,
but if I do, it will be i -i to get the previous iteration (check this feasibilty)



After each time rover moves, must keep track of coordinates where the rover was before it moved.
Once the rover has stopped moving, console.log travel log.

*/

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
      rover.olddirection = rover.direction;
      rover.direction = "W";
      console.log(`Your rover turned left. It used to face ${rover.olddirection}, but now it faces ${rover.direction}.`)
      break;
    case "W":
      rover.olddirection = rover.direction;
      rover.direction = "S";
      console.log(`Your rover turned left. It used to face ${rover.olddirection}, but now it faces ${rover.direction}.`)
      break;
    case "S":
      rover.olddirection = rover.direction;
      rover.direction = "E";
      console.log(`Your rover turned left. It used to face ${rover.olddirection}, but now it faces ${rover.direction}.`)
      break;
    case "E":
      rover.olddirection = rover.direction;
      rover.direction = "N";
      console.log(`Your rover turned left. It used to face ${rover.olddirection}, but now it faces ${rover.direction}.`)
      break;
    default:
    console.log('That direction was invalid. Please input a proper direction');
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N":
      rover.olddirection = rover.direction;
      rover.direction = "E";
      console.log(`Your rover turned right. It used to face ${rover.olddirection}, but now it faces ${rover.direction}.`)
      break;
    case "W":
      rover.olddirection = rover.direction;
      rover.direction = "N";
      console.log(`Your rover turned right. It used to face ${rover.olddirection}, but now it faces ${rover.direction}.`)
      break;
    case "S":
      rover.olddirection = rover.direction;
      rover.direction = "W";
      console.log(`Your rover turned right. It used to face ${rover.olddirection}, but now it faces ${rover.direction}.`)
      break;
    case "E":
      rover.olddirection = rover.direction;
      rover.direction = "S";
      console.log(`Your rover turned right. It used to face ${rover.olddirection}, but now it faces ${rover.direction}.`)
      break;
    default:
    console.log('That direction was invalid. Please input a proper direction');
    break;
  }
}


function moveForward(rover){
  console.log("moveForward was called")
  rover.travellog.push(` (${rover.x}, ${rover.y})`);
  switch(rover.direction) {
    case "N":
      rover.y++;
      console.log(`Your rover has shifted to (${rover.x},${rover.y}).`)
      break;
    case "W":
      rover.x--;
      console.log(`Your rover has shifted to (${rover.x},${rover.y}).`)
      break;
    case "S":
      rover.y--;
      console.log(`Your rover has shifted to (${rover.x},${rover.y}).`)
      break;
    case "E":
      rover.x++;
      console.log(`Your rover has shifted to (${rover.x},${rover.y}).`)
      break;
  }
}


function commands(commandInput) {
  let commandTransfer = commandInput.split("");
    for(let i = 0; i<commandTransfer.length; i++) {
      switch(commandTransfer[i]) {
        case "f":
          moveForward(rover);
          break;
        case "r": 
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        default:
          return "invalid entry: You must enter only f for forward, r for turn right, or l for turn left."
      }
    console.log(`Here is the travel log: ${rover.travellog}.`);
    }


}

/*
Improvement: Cook up a way for code to interpret argument as a string.





ALL OF THE BELOW WORKED. GREAT JOB.

command to insert string: (try it with the function call)

I need something that translates a string into commands.

String can contain f, r, or l.

Steps:

- Split the string into individual letters.
-Put those individual letters in an array.
-Loop through the array.
  Multi loop in the array.
  -If array contains f, moveForward(rover);
  -If array contains r, turnRight(rover);
  -If array contains l, turnLeft(rover);  a
  -If array contains else, change: invalid command, use "f", "r", or "l" only.

  Put an if statement before starting, or :) include in switch statement.





test string: 'rffrfflfrff'.

if 'r' {
  turnRight(rover);
} else if 'f' {
  moveForward(rover);
} else if 'l' {
  turnLeft(rover);
}



*/






