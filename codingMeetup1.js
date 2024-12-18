function countDevelopers(list) {
  return list.filter(item => item.continent === "Europe" && item.language === "JavaScript").length
}