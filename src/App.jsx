import { useState } from "react";
import "./styles.css";
import InputToDo from "./components/input";
import ImComplete from "./components/inComplete";
import Complete from "./components/complete";
import imComplete from "./components/inComplete";

export const App = () => {
  const [inComplete, setIncomplete] = useState([]);
  const [complete, setcomplete] = useState(["読書", "買物"]);
  const [inputToDo, setInputToDo] = useState("");
  const [disabled, setDisabled] = useState(false);
  const onChangeToDo = (event) => {
    setInputToDo(event.target.value);
  };

  const addToDo = () => {
    if (inputToDo === "") return;

    const newToDo = [...inComplete, inputToDo];
    setIncomplete(newToDo);
    setInputToDo("");
  };
  const clickDelete = (index) => {
    const newToDo = [...inComplete];
    newToDo.splice(index, 1);
    setIncomplete(newToDo);
  };
  const clickComplete = (index) => {
    const newToDo = [...inComplete];
    const completeDo = newToDo.splice(index, 1);
    setIncomplete(newToDo);
    const completeToDo = [...complete, completeDo];
    setcomplete(completeToDo);
  };

  const clickBack = (index) => {
    const doDo = [...complete];
    const backToDo = doDo.splice(index, 1);
    const newTodo = [...inComplete, backToDo];
    setIncomplete(newTodo);

    setcomplete(doDo.splice(index, 1));
  };
  return (
    <>
      <InputToDo
        todoText={inputToDo}
        chngeTodo={onChangeToDo}
        addToDo={addToDo}
        disabled={inComplete.length >= 5}
      />
      {inComplete.length >= 5 && (
        <p style={{ color: "red", fontSize: "10px" }}>
          登録できるTODOアイテムは5個までです。消化してください。
        </p>
      )}
      <ImComplete
        todo={inComplete}
        clickComplete={clickComplete}
        clickDelete={clickDelete}
      />
      <Complete complete={complete} clickBack={clickBack} />
    </>
  );
};
