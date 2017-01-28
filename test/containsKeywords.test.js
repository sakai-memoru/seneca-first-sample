const containsKeywords = require('../lib/containsKeywords').containsKeywords;

const shoud  = require('chai').should();

describe('contains keywords function',()=>{
  describe('contains SAY_HELLO keywords in message',()=>{
    it('should return true when it contains key',()=>{
      // Arrange
      let message = 'Hello,world!';
      let sceneCode = 'SAY_HELLO';
      let expected = true;
      // Act
      let actual = containsKeywords(message,sceneCode);
      // console.log('actual = ' + actual);
      // Assert
      actual.should.equal(expected);
    });
    it('should return true when it contains key with ignoreCase',()=>{
      // Arrange
      let message = 'hello,world!';
      let sceneCode = 'SAY_HELLO';
      let expected = true;
      // Act
      let actual = containsKeywords(message,sceneCode);
      // console.log('actual = ' + actual);
      // Assert
      actual.should.equal(expected);
    });
    it('should return false when it dose not contains key',()=>{
      // Arrange
      let message = 'Say,world!';
      let sceneCode = 'SAY_HELLO';
      let expected = false;
      // Act
      let actual = containsKeywords(message,sceneCode);
      // console.log('actual = ' + actual);
      // Assert
      actual.should.equal(expected);
    });
  });

});

