import {expect} from 'chai';
// Import your calculator functions here
import {
  addChar,
  cos,
  sin,
  tan,
  sqrt,
  ln,
  exp,
  deleteChar,
  changeSign,
} from './script.js';

describe('Calculator Functions', () => {
  describe('should correctly calculate the trigonometry of a value', () => {
    it('should calculate the sine of a value', () => {
      let form = {display: {value: '0'}};
      sin(form);
      expect(parseFloat(form.display.value)).to.equal(0);
    });

    it('should calculate the cosine of a value', () => {
      let form = {display: {value: '0'}};
      cos(form);
      expect(parseFloat(form.display.value)).to.equal(1);
    });

    it('should calculate the tangent of a value', () => {
      let form = {display: {value: '0'}};
      tan(form);
      expect(parseFloat(form.display.value)).to.equal(0);
    });
  })

  describe('should correctly change characters and sign', () => {
    it('should add a character to a blank input', () => {
      let input = {value: '0'};
      addChar(input, '5');
      expect(input.value).to.equal('5');
    });

    it('should delete the last character of a value', () => {
      let input = {value: '123'};
      deleteChar(input);
      expect(input.value).to.equal('12');
    });

    it('should change the sign of a value', () => {
      let input = {value: '100'};
      changeSign(input);
      expect(input.value).to.equal('-100');
    });
  });

  describe('should perform math functions', () => {
    it('should calculate the square root of a value', () => {
      let form = {display: {value: '9'}};
      sqrt(form);
      expect(parseFloat(form.display.value)).to.equal(3);
    });

    it('should calculate the natural log of a value', () => {
      let form = {display: {value: '1'}};
      ln(form);
      expect(parseFloat(form.display.value)).to.equal(0);
    });

    it('should calculate the exponential of a value', () => {
      let form = {display: {value: '1'}};
      exp(form);
      expect(parseFloat(form.display.value)).to.equal(2.718281828459045);
    });
  });

});

