var chai = require('chai');
var parser = require(__dirname + '/../lib/parser.js');
var expect = chai.expect;

var text = '#JavaScript: An eight week course over the MEAN stack.\n##Week 1\n###Day 1\n####Code: Simple Test and Modular Parrerns\n#####Rubric: 10\n####Read: Basic Testing With Mocha/Chai\n#####Rubric: 5\n\n###Day 2\n####Code: Adding a Gulpfile/package.json\n#####Rubric: 10\n####Read: Semantic Versioning\n#####Rubric: 5\n';

describe('the markdown parser', function() {
  it('should read a file you pass it and respond with a course object', function(done) {
    parser(text, function(course) {
      expect(course).to.have.property('title');
      expect(course).to.have.property('description');
      expect(Array.isArray(course.weeks)).to.eql(true);
      expect(course.weeks[0]).to.have.property('order');
      expect(Array.isArray(course.weeks[0].days)).to.eql(true);
      expect(course.weeks[0].days[0]).to.have.property('order');
      expect(Array.isArray(course.weeks[0].days[0].assignments)).to.eql(true);
      expect(course.weeks[0].days[0].assignments[0]).to.have.property('type');
      expect(course.weeks[0].days[0].assignments[0]).to.have.property('description');
      expect(course.weeks[0].days[0].assignments[0]).to.have.property('rubric');
      done();
    });
  });
});
