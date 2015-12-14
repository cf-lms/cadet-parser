var chai = require('chai');
var parser = require(__dirname + '/../lib/parser.js');
var expect = chai.expect;

describe('the markdown parser', function() {
  it('should read a file you pass it and respond with a course object', function(done) {
    parser(__dirname + '/../example/example.md', function(err, course) {
      expect(err).to.eql(null);
      expect(course).to.have.property('title');
      expect(course).to.have.property('week1');
      expect(course['week1']).to.have.property('order');
      expect(course['week1']).to.have.property('day1');
      expect(course['week1']['day1']).to.have.property('order');
      expect(course['week1']['day1']).to.have.property('assignment1');
      expect(course['week1']['day1']['assignment1']).to.have.property('type');
      expect(course['week1']['day1']['assignment1']).to.have.property('title');
      expect(course['week1']['day1']['assignment1']).to.have.property('rubric');
      done();
    });
  });
});
