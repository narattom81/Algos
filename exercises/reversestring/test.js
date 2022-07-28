const rev = require('./index');


test('Reverse function exists', () => {
  expect(rev).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(rev('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(rev('  abcd')).toEqual('dcba  ');
});

