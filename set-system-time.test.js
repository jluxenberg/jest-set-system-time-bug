it('should return the hardcoded date', () => {
  jest.useFakeTimers('modern');

  jest.setSystemTime(1349852318268);
  expect(new Date().valueOf()).toBe(1349852318268);
  expect(jest.getRealSystemTime().valueOf()).not.toBe(1349852318268);
});

