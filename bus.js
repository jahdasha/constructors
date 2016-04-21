// Author: Jahdasha Flagg (Homework 11)

  var Student = require("./student.js");

  var Bus = function (driverName,color,gas){

    this.studentsOnTheBus = [];
    this.driverName = driverName;
    this.color = color;
    this.gas = gas;
    this.tattleOn = [];
    

    this.studentEntersBus = function (n, g, gr, GPA, d, s, c) {
      this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
    }

    this.busChatter = function(){
      var catchPhrases = [];
      for (var i = 0; i < this.studentsOnTheBus.length; i++) {
        catchPhrases.push(this.studentsOnTheBus[i].canStudentHaveFun());
      }
      return catchPhrases;
    }
  }

  module.exports = Bus;