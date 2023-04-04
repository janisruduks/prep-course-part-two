import { CharacterCount } from './index';

describe('CharacterCount()', () => {
  let characterCount: CharacterCount;

  beforeEach(() => {
    characterCount = new CharacterCount();
  });

  it('should count the occurrences of each character in a string', () => {
    const result = characterCount.count('hello world');
    expect(result).toEqual({ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 });
  });

  it('should ignore case when counting characters', () => {
    const result = characterCount.count('Hello World');
    expect(result).toEqual({ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 });
  });

  it('should count special characters and numbers', () => {
    const result = characterCount.count('The quick brown fox jumps over the lazy dog 123!');
    expect(result).toEqual({
      t: 2,
      h: 2,
      e: 3,
      ' ': 9,
      q: 1,
      u: 2,
      i: 1,
      c: 1,
      k: 1,
      b: 1,
      r: 2,
      o: 4,
      w: 1,
      n: 1,
      f: 1,
      x: 1,
      j: 1,
      m: 1,
      p: 1,
      s: 1,
      v: 1,
      l: 1,
      a: 1,
      z: 1,
      y: 1,
      d: 1,
      g: 1,
      '1': 1,
      '2': 1,
      '3': 1,
      '!': 1,
    });
  });

  it('should return an empty object if the input string is empty', () => {
    const result = characterCount.count('');
    expect(result).toEqual({});
  });
});