console.log('Aufgabe 1:')

color= "darkblue";
switch (color) {
    case 'red':
      console.log('This is red');
      break;
    case 'blue':
      console.log('This is blue');
      break;
    case 'green':
      console.log('This is green');
      break;
    case 'yellow':
      console.log('This is yellow');
      break;
    default:
        console.log('This has no color')
    }

    console.log('Aufgabe 2:')
    score = 75;
    switch (score) {
        // If score is 90 or greater
        case  90:
            console.log("Good Job");
            break;
        // If score is 80 or greater
        case 80:
            console.log("You should study more");
            break;
        default:
        console.log("You did not study enough!");
}

    console.log('Aufgabe 3:')

    fruit= "strawberry";
switch (color) {
    case 'banana':
      console.log('This is a banana');
      break;
    case 'orange':
      console.log('This is an orange');
      break;
    case 'strawberry':
      console.log('This is a strawberry');
      break;
    case 'apple':
      console.log('This is an apple');
      break;
    default:
        console.log('This is not a fruit');
    }

    console.log('Aufgabe 4:')     

let percentageComplete = 100;

if (percentageComplete < 30) {
    console.log("Still a long way to go")
}
else if ((30 <= percentageComplete) && (percentageComplete < 50)) {
    console.log("Slowly getting there")
}
else if ((51 <= percentageComplete) && (percentageComplete < 80)) {
    console.log ("You can do it!")
}
else if ((81 <= percentageComplete) && (percentageComplete < 99)) {
    console.log ('This is the last push!')
}
else (console.log("You're there. Well done!"));
