const sumArrayNumsOnly = require ('../sumarraynumsonly');

describe('sumarraynumsonly', () => {
  it('can sum an array of numbers', () => {
    expect(sumArrayNumsOnly([1,2,3])).toBe(6);
    expect(sumArrayNumsOnly([-1,0,3])).toBe(2);
  });

  it('excludes non-number values', () => {
    expect(sumArrayNumsOnly([1,'tree',3])).toBe(4);
    expect(sumArrayNumsOnly([1,true,3])).toBe(5); //okay with boolean being 0/1
    expect(sumArrayNumsOnly([NaN,2,3])).toBe(5);
    expect(sumArrayNumsOnly(['',2,3])).toBe(5);
    expect(sumArrayNumsOnly([null,2,3])).toBe(5);
    expect(sumArrayNumsOnly([undefined,2,3])).toBe(5);
  });
});