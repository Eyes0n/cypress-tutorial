export const stringToArray = (str) =>
  str
    .trim()
    .split(',')
    .map((str) => parseInt(str));

describe('Sting to Array', () => {
  // to.equal -> Error
  // to.eql -> Success
  // to.deep.equal -> Success

  it('단일 숫자 조합 배열', () => {
    expect(stringToArray('1,2,3,4')).to.eql([1, 2, 3, 4]);
  });
  it('문자열 끝에 공백이 포함 된 경우', () => {
    expect(stringToArray('1,2,3,4 ')).to.eql([1, 2, 3, 4]);
  });
  it('문자열 앞에 공백이 포함 된 경우', () => {
    expect(stringToArray(' 1,2,3,4')).to.eql([1, 2, 3, 4]);
  });
  it('배열 요소 중 숫자 앞에 공백이 포함된 경우', () => {
    expect(stringToArray('1, 2, 3, 4')).to.eql([1, 2, 3, 4]);
  });
  it('배열 요소 중 숫자 뒤에 공백이 포함된 경우', () => {
    expect(stringToArray('1 ,2 ,3 ,4')).to.eql([1, 2, 3, 4]);
  });
});
