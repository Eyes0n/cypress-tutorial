export const inputRegEx = /^(([0-9])+[\s]?,[\s]?)*([0-9]+)$/;
// TODO: 이걸로 해도 됨
// expect('testing').to.match(/^test/)

describe('입력 정규표현식 TEST', () => {
  it('영어', () => {
    expect(inputRegEx.test('a')).to.equal(false);
  });
  it('영어 포함 문자열 1', () => {
    expect(inputRegEx.test('1A')).to.equal(false);
  });
  it('영어 포함 문자열 2', () => {
    expect(inputRegEx.test('1,2,3,4 a')).to.equal(false);
  });
  it('특수 문자', () => {
    expect(inputRegEx.test('!')).to.equal(false);
  });
  it('여러 dot을 포함한 문자열 1', () => {
    expect(inputRegEx.test('1,2,3,4,....')).to.equal(false);
  });
  it('여러 dot을 포함한 문자열 2', () => {
    expect(inputRegEx.test('...1,2,3,4,5,')).to.equal(false);
  });
  it('빈 공백 문자열', () => {
    expect(inputRegEx.test(' ')).to.equal(false);
  });
  it('공백 + 콤마로 구성된 문자열', () => {
    expect(inputRegEx.test(', , , , ,')).to.equal(false);
  });
  it('숫자 + 콤마로 구성된 문자열', () => {
    expect(inputRegEx.test('1,2,3,4')).to.equal(true);
  });
  it('숫자 + 콤마 + 공백 형식으로 구성된 문자열', () => {
    expect(inputRegEx.test('1, 2, 3, 4')).to.equal(true);
  });
  it('숫자 + 공백 + 콤마 형식으로 구성된 문자열', () => {
    expect(inputRegEx.test('1 ,2 ,3 ,4')).to.equal(true);
  });
  it('숫자 + 공백 + 콤마 + 공백', () => {
    expect(inputRegEx.test('1 , 2 , 3 , 4')).to.equal(true);
  });
});
