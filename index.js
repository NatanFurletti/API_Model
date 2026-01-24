function Home() {
  return <h1>teste</h1>;
}

const { Person } = require("./person");

require("./modules/express");

const person = new Person("Alice", 30);

export default Home;
