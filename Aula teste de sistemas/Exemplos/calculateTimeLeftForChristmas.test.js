const calculateTimeLeftForChristmas = require("./calculateTimeLeftForChristmas");

describe("Calculando os dias até o natal", () => {
  test("Primeiro dia do ano até o natal", () => {
    jest.spyOn(Date, "now").mockImplementation(() => {
      const firstDayOfTheYear = new Date("2025-01-01T00:00:00-03:00");
      return firstDayOfTheYear.getTime();
    });

    const timeLeft = calculateTimeLeftForChristmas();

    expect(timeLeft.days).toBe(358);
  });

  test("Ultimo dia do ano até o natal", () => {
    const mock = jest.spyOn(Date, "now").mockImplementation(() => {
      return new Date("2025-12-31T00:00:00-03:00").getTime();
    });

    const timeLeft = calculateTimeLeftForChristmas();

    expect(timeLeft.days).toBe(-6);
    mock.mockRestore();
  });

  test("Dias até o natal - atual", () => {
    const timeLeft = calculateTimeLeftForChristmas();
    console.log(timeLeft.days);
  });
});