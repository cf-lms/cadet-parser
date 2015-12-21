var parser = module.exports = function(file, startDate, callback) {
  file = fs.readFileSync(__dirname + '/../example/example.md', 'utf-8');

  if(typeof startDate === 'function') {
    callback = startDate;
    startDate = null;
  }

  startDate = startDate || new Date(new Date().setHours(0, 0, 0, 0));

  var addADay = function(date) {
    var days = 1;

    if(date.getDay() === 5) {
      days = 3;
    }

    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  };

  file = file.split('\n');

  var parse = {course: {}};
  parse['#'] = function(input) {
    input = input.split(':');
    this.course.title = input[0];
    this.course.description = input[1].substring(1);
  };

  parse['##'] = function(input) {
    if (!this.course.weeks) this.course.weeks = [];
    this.course.weeks.push({order: input});
    this.weeksIndex = this.course.weeks.length - 1;
  };

  parse['###'] = function(input) {
    if (!this.course.weeks[this.weeksIndex].days) this.course.weeks[this.weeksIndex].days = [];
    this.course.weeks[this.weeksIndex].days.push({order: input});
    this.daysIndex = this.course.weeks[this.weeksIndex].days.length - 1;
    this.dueDate = addADay(this.dueDate ? this.dueDate : startDate);
  };

  parse['####'] = function(input) {
    if (!this.course.weeks[this.weeksIndex].days[this.daysIndex].assignments) this.course.weeks[this.weeksIndex].days[this.daysIndex].assignments = [];
    input = input.split(':');
    this.course.weeks[this.weeksIndex].days[this.daysIndex].assignments.push({type: input[0], description: input[1].substring(1), dueDate: this.dueDate});
    this.assignmentsIndex = this.course.weeks[this.weeksIndex].days[this.daysIndex].assignments.length - 1;
  };

  parse['#####'] = function(input) {
    this.course.weeks[this.weeksIndex].days[this.daysIndex].assignments[this.assignmentsIndex].rubric = input.split(':')[1].substring(1);
  };

  for(var i = 0; i < file.length; i++) {
    var prefix = '';
    var stringIndex = 0;

    while(file[i][stringIndex] === '#') {
      prefix += file[i][stringIndex];
      stringIndex++;
    }

    file[i] =  file[i].substring(prefix.length);

    if (prefix.length > 0) {
      parse[prefix](file[i]);
    }
  }

  return callback(parse.course);
};
