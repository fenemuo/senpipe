const genrateRandomNumber = require('./index');

test('generateRandomNumber should return a number between 1 and 100', () => {
    const randomNumber = genrateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(100);
}
);