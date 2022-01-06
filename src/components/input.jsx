import React from "react";

const InputToDo = (props) => {
  const { todoText, chngeTodo, addToDo, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={chngeTodo}
      />
      <button onClick={addToDo} disabled={disabled}>
        追加
      </button>
    </div>
  );
};

export default InputToDo;
