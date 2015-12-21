var parser = module.exports = require(__dirname + '/lib/parser.js');

var text = '#JavaScript: An eight week course over the MEAN stack.\n##Week 1\n###Day 1\n####Code: Simple Test and Modular Parrerns\n#####Rubric: 10\n####Read: Basic Testing With Mocha/Chai\n#####Rubric: 5\n\n###Day 2\n####Code: Adding a Gulpfile/package.json\n#####Rubric: 10\n####Read: Semantic Versioning\n#####Rubric: 5\n';

parser(text, function(course) {

  debugger;
});


