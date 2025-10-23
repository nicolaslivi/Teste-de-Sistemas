function calculateTimeLeftForChristmas() {
  const now = new Date(Date.now());
  const year = now.getFullYear();
  const christmas = new Date(year, 11, 25);
  const difference = christmas.getTime() - now.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  return { days, hours, minutes, seconds };
}

module.exports = calculateTimeLeftForChristmas;