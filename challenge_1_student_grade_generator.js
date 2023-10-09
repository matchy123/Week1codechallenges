// Import the 'readline' module to get user input
const readline = require('readline');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateGrade(){


    // Prompt the user for their age
rl.question('Please enter the student marks: ', (rawMarks) => {

    const marks = parseInt(rawMarks);
    let studentGrade=''
    if (!isNaN(marks)) {
    if (marks<0){
        console.error("The mark entered is too low to be considered for grading, please enter a new mark");
 // Close the interface
 rl.close();
        return 
    }
    else if (marks>100){
        console.error("The grade entered is too high to be considered for grading, please enter a new mark ")
         // Close the interface
  rl.close();
        return
    }

    // Grading process

    if (marks>79){
        studentGrade="A"
    }
    else if (marks>=60){

        studentGrade= "B"
    }

    else if (marks>=49){
        studentGrade= "C"
    }
    else if (marks>=40){
        studentGrade="D"
    }
    else if (marks>0){
        studentGrade= "E"
    }
    else {
        console.error("We could not determine the grade of the marks entered, check the marks and try again")
         // Close the interface
  rl.close();
        return
    }

    }
    else{
        console.error('Invalid input. Please enter a valid integer for student grade.');
        return "error"
    }
console.log(`Student grade is :${studentGrade}`)
rl.close();
return studentGrade
}
);
    
}


generateGrade()



