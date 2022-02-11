import {INote} from "../Interfaces";
import styled from "styled-components";

interface Props {
    note: INote;
    completeNote(noteNameToDelete: string): void;
}

const Note = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  color: white;
  margin: 15px;
`;

const Content = styled.div`
  flex: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  display: grid;
  place-items: center;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-right: none;
  background-color: teal;
`;

const Button = styled.button`
  flex: 20%;
  height: 100%;
  border: none;
  background-color: coral;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  cursor: pointer;
`;

const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 45px;
  width: 45px;
  
  :checked {
    color:red;
    text-decoration: line-through;
  }
`;

const TodoNote = ({note, completeNote}: Props) => {
    // const completedTodosCount = () => {
    //     setTodoList(todoList.filter(todoList => todoList.completeNote() === true).length);
    // };
    // const addTodo = () => {
    //   todoList.push({
    //      id: shortid.generate();
    //   })
    // };
    return (
        <Note>
            <Content>
                <Span>{note.noteName}</Span>
                <Span>{note.deadline}</Span>
            </Content>
            <Button onClick={() => completeNote(note.noteName)}>Complete</Button>
            <Input type="checkbox"/>
        </Note>
    )
}

export default TodoNote;