import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';
import {INote} from './Interfaces';
import TodoNote from "./components/TodoNote";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvet, sans-serif;
`;

const Header = styled.div`
  flex: 30%;
  background-color: steelblue;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 10px;
  font-size: 17px;
  border: 1px solid grey;
`;

const Button = styled.button`
  width: 70px;
  height: 87px;
  border: none;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  padding-left: 10px;
  cursor: pointer;
  background-color: lightblue;
`;

const TodoList = styled.div`
  flex: 70%;
  width: 100vw;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
`;

const App: FC = () => {
  const [note, setNote] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<INote[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (event.target.name === 'note') {
          setNote(event.target.value);
      } else {
          setDeadline(Number(event.target.value));
      }
  };
  const addNote = (): void => {
      const newNote = {noteName: note, deadline: deadline};
      setTodoList([...todoList, newNote]);
      setNote('');
      setDeadline(0);
  };
  const completeNote = (noteNameToDelete: string): void => {
    setTodoList(todoList.filter((note) => {
        return note.noteName !== noteNameToDelete;
    }));
  };
  return (
    <Wrapper>
      <Header>
          <InputContainer>
              <Input type="text" placeholder='Note.....' name='note' value={note} onChange={handleChange} />
              <Input type="number" placeholder='Deadline (in Days).....' name='deadline' value={deadline} onChange={handleChange}/>
          </InputContainer>
          <Button onClick={addNote}>Add Note</Button>
      </Header>
      <TodoList>
          {todoList.map((note: INote, key: number) => {
              return <TodoNote key={key} note={note} completeNote={completeNote}/>;
          })}
      </TodoList>
    </Wrapper>
  );
}

export default App;