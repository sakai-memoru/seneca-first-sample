const shoud  = require('chai').should();
const expect = require('chai').expect;

describe('generateId#randomId() function',()=>{
  describe('logical unit test',()=>{
    it('should return random number of 11 digit',()=>{
      // Arrange
      const randomId = require('../lib/generateId').randomId;
      const expectedRegexp = /^\d{11}$/
      const length = 11;
      // Act
      let actual = randomId();
      console.log('actual = ' + actual);
      // Assert
      expect(actual).to.have.lengthOf(length);
      expect(actual).match(expectedRegexp);
    });
  });
});

describe('generateId#timestampId() function',()=>{
  describe('logical unit test',()=>{
    it('should return YYYYMMDDHHmmss',()=>{
      // Arrange
      const timestampId = require('../lib/generateId').timestampId;
      const expectedRegexp = /^\d{14}$/
      const dtm = new Date();
      const expectedYYYYMMDD = "" + dtm.getFullYear() + ("0" + dtm.getMonth()+1).slice(-2) + ("0" + dtm.getDate()).slice(-2);
      console.log(expectedYYYYMMDD);
      // Act
      let actual = timestampId();
      console.log('actual = ' + actual);
      // Assert
      expectedRegexp.test(actual).should.be.true;
      actual.slice(0,8).should.equal(expectedYYYYMMDD);
    });
  });
});

describe('generateId#uuId() function',()=>{
  describe('logical unit test',()=>{
    it('should return RRRRRRRR-RRRR-4RRR-rRRR-RRRRRRRRRRRR',()=>{
      // Arrange
      const uuId = require('../lib/generateId').uuId;
      const expectedRegexp = /^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/
      // Act
      let actual = uuId();
      console.log('actual = ' + actual);
      // Assert
      expectedRegexp.test(actual).should.be.true;
    });
  });
});

describe('generateId#rondomKey() function',()=>{
  describe('logical unit test',()=>{
    it('should return 36 chars [0-9a-z] with parameter in length',()=>{
      // Arrange
      const randomKey = require('../lib/generateId').randomKey;
      const length = 12;
      const expectedRegexp = new RegExp('^[0-9a-z]{' + length +'}$');
      // Act
      let actual = randomKey(length);
      console.log('actual = ' + actual);
      // Assert
      expectedRegexp.test(actual).should.be.true;
    });
  });
});

describe('generateId#dateKey() function',()=>{
  describe('logical unit test',()=>{
    it('should return YYMMDD-RRRRRR',()=>{
      // Arrange
      const dateKey = require('../lib/generateId').dateKey;
      const expectedRegexp = /[0-9]{6}-[0-9a-z]{6}/;
      const dtm = new Date();
      const expectedYYMMDD = ("" + dtm.getFullYear()).slice(2,4444) + ("0" + dtm.getMonth()+1).slice(-2) + ("0" + dtm.getDate()).slice(-2);
      console.log(expectedYYMMDD);
      // Act
      let actual = dateKey();
      console.log('actual = ' + actual);
      // Assert
      expectedRegexp.test(actual).should.be.true;
      actual.slice(0,6).should.equal(expectedYYMMDD);
    });
  });
});

