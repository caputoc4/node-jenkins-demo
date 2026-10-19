function greet(name = "Jenkins") {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greet());
}

module.exports = { greet };
