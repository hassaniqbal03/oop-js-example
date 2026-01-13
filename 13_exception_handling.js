try {
  let result = x + 5;
} catch (error) {
  console.log("Error handled:", error.message);
} finally {
  console.log("Execution finished");
}
