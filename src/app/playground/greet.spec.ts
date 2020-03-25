import greet from './greet';

describe('greet', () => {
  it('should contain name in return message', () => {
    expect(greet('Angular')).toContain('Angular');
  });
});
