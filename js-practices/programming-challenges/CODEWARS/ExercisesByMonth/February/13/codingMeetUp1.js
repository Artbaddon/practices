function countDevelopers(devs) {
  let count = 0;
  for (const dev of devs) {
    if (dev.continent === "Europe" && dev.language === "JavaScript") {
      count++;
    }
  }
  return count;
}
