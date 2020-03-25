import compute from './compute';

describe('compute', () => {
  it('should return 0 if negative input', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
});

describe('compute', () => {
  it('should increment input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
