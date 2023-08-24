// Hooks
import { useState } from "react";

// Components
import Categories from "./Components/Categories";
import Container from "./Components/Container";
import Movies from "./Components/Movies";

const App = () => {
  return (
    <Container>
      <Categories />
      <Movies />
    </Container>
  );
};

export default App;
