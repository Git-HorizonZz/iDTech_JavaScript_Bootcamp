var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('test greet()', function () {
  it('should greet a name', function() {
    expect(greet('Bianca')).toEqual("Hello, Bianca!");
  });
  it('should greet null', function() {
    expect(greet(null)).toEqual("Hello there!");
  });
  it('should greet shouting', function() {
    expect(greet('ALEX')).toEqual("HELLO ALEX!");
  });
  it('should greet 2 names', function() {
    expect(greet('Finn, Athena')).toEqual("Hello, Finn, Athena!");
  });
  it('should greet 4 names', function() {
    expect(greet('Mia, Colin, Cece, Clara')).toEqual("Hello, Mia, Colin, Cece, Clara!");
  });
});

