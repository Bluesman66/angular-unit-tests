import countries from './countries';

describe('countries', () => {
  it('shouls contain countries codes', () => {
    const result = countries();

    expect(result).toContain('RU');
    expect(result).toContain('US');
    expect(result).toContain('DE');
  });
});
