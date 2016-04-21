// and a function called canStudentHaveFun that checks if they have less than 10 detentions 
//and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.

// Prompt the user for a student's information, make a new Student Object with it, 
// then invoke the canStudentHaveFun function.

// export the student constructor at the bottom of the file

var Student = function (name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){

this.name = name;
this.gender = gender;
this.grade = grade;
this.GPA = GPA;
this.detentions = detentions;
this.sleepingInClass =sleepingInClass;
this.catchPhrase = catchPhrase;

var canStudentHaveFun = function(detentions, GPA){
    if(detentions<10 && GPA >= 2){
      console.log("Can have fun!");
    }

}


}

module.exports = Student;