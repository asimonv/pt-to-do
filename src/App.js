import React from "react";
import "./App.css";
import styled from "styled-components";
import ToDoList from "./components/ToDoList";
import tasks from "./data/tasks";
import LinksComponent from "./components/Links";
import links from "./data/links";
import Why from "./components/Why";

const Container = styled.div`
  border: 3px solid blue;
`;

const Wrapper = styled.div`
  margin: 10px;
  border: 3px solid black;
  padding: 10px;
`;

function App() {
  return (
    <>
      <Wrapper>
        <a href="https://github.com/asimonv/pt-to-do">
          <span role="img" aria-label="2 hands pointing right emoji">
            👉👉
          </span>
          code
          <span role="img" aria-label="2 hands pointing left emoji">
            👈👈
          </span>
        </a>
        <h2>Demo: To-do list</h2>
        <Container>
          <ToDoList tasks={tasks} />
        </Container>
        <h2>Links</h2>
        <LinksComponent links={links} />
        <h2>Por qué React?</h2>
        <Why />
      </Wrapper>
    </>
  );
}

export default App;
