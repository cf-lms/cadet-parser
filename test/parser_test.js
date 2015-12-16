var chai = require('chai');
var parser = require(__dirname + '/../lib/parser.js');
var expect = chai.expect;

describe('the markdown parser', function() {
  it('should read a file you pass it and respond with a course object', function(done) {
    parser(__dirname + '/../example/example.md', function(err, course) {
      expect(err).to.eql(null);
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

  it('should return an err if provided an invalid path', function(done) {
    parser('invalid path', function(err, course) {
      expect(err).to.not.eql(null);
      done();
    });
  });
});
