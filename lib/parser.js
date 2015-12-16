var fs = require('fs');
var lodash = require('lodash');

var parser = module.exports = function(path, callback) {
  fs.readFile(path, 'utf-8', function(err, file) {
    file = file.split('\n');
    var parse = {course: {}};
    parse[1] = function(input) {
      this.course.title = input;
    };
    parse[2] = function(input) {
      this.week = 'week' + input.slice(-1);
      this.course[this.week] = {order: input};
    };
    parse[3] = function(input) {
      this.day = 'day' + input.slice(-1);
      this.course[this.week][this.day] = {order: input};
      this.assignmentCount = 1
    };
    parse[4] = function(input) {
      this.assignment = 'assignment' + this.assignmentCount;
      this.course[this.week][this.day][this.assignment] = {stuff: input};
      this.assignmentCount++;
    };
    parse[5] = function(input) {
      this.course[this.week][this.day][this.assignment].rubric = input;
    };

    for(var i = 0; i < file.length; i++) {
 
      var hashCount = file[i].lastIndexOf('#') + 1;
      if (hashCount > 0) {
        var inputString = file[i].slice(hashCount);
        parse[hashCount](inputString);
      }
    }
    //console.log(parse.course);
    return callback(err, parse.course);
  });
};

//parser(__dirname + '/../example/example.md', function() {return;});
