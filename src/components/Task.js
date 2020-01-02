import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid orange;
  padding: 10px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  border: 2px solid #00b894;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
  justify-content: center;
  background-color: ${props => (props.completed ? "#00b894" : "white")};
`;

const TaskInput = styled.input`
  display: flex;
  flex: 1;
  height: 20px;
  margin-left: 5px;
  font-weight: 600;
  font-size: inherit;
  border: 0;
  outline: none;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

const Task = ({ task, onClick, handleTextChange, onClickDelete }) => {
  const _handleChange = e => {
    const {
      target: { value }
    } = e;
    handleTextChange(task, value);
  };

  return (
    <Container>
      <Button completed={task.completed} onClick={() => onClick(task)}>
        {task.completed ? "☑️" : ""}
      </Button>
      <TaskInput
        completed={task.completed}
        value={task.title}
        type="text"
        onChange={_handleChange}
      />
      <button onClick={() => onClickDelete(task)}>delete</button>
    </Container>
  );
};

export default Task;
