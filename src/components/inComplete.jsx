import React from "react";

const imComplete = (props) => {
  const { todo, clickComplete, clickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のリスト</p>
      <ul>
        {todo.map((val, index) => {
          return (
            <li key={val}>
              <div className="item">
                <p className="item-title">{val}</p>
                <button
                  className="complete-button"
                  onClick={() => clickComplete(index)}
                >
                  完了
                </button>
                <button
                  className="delete-button"
                  onClick={() => clickDelete(index)}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default imComplete;
