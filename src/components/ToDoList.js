import React from "react";
import Task from "./Task";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  border: 3px solid red;
`;

const ToDoList = ({ tasks }) => {
  const [todoTasks, setTodoTasks] = React.useState(tasks);
  const _handleOnClick = task => {
    const taskIndex = todoTasks.findIndex(x => x.id === task.id);
    const newArray = Array.from(todoTasks);
    newArray[taskIndex] = {
      ...todoTasks[taskIndex],
      completed: !newArray[taskIndex].completed
    };
    setTodoTasks(newArray);
  };

  const _handleAddButtonClick = () => {
    const newTask = { editing: true, id: todoTasks.length };
    setTodoTasks([...todoTasks, newTask]);
  };

  const _handleTextChange = (task, text) => {
    const newTask = { ...task, title: text };
    const taskIndex = todoTasks.findIndex(x => x.id === task.id);
    const newArray = Array.from(todoTasks);
    newArray[taskIndex] = newTask;
    setTodoTasks(newArray);
  };

  const _onClickDelete = task => {
    const newArray = todoTasks.filter(x => x.id !== task.id);
    setTodoTasks(newArray);
  };

  return (
    <Container>
      {todoTasks.map(x => (
        <Task
          key={x.id}
          onClick={_handleOnClick}
          task={x}
          handleTextChange={_handleTextChange}
          onClickDelete={_onClickDelete}
        />
      ))}
      <button onClick={_handleAddButtonClick}>add</button>
      <pre>{JSON.stringify(todoTasks, null, 2)}</pre>
    </Container>
  );
};

export default ToDoList;
