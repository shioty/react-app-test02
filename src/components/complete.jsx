import React from "react";

const Complete = (props) => {
  const { complete, clickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のリスト</p>
      <ul>
        {complete.map((dodo, index) => {
          return (
            <li key={dodo}>
              <div className="item">
                <p className="item-title">{dodo}</p>
                <button
                  className="back-button"
                  onClick={() => clickBack(index)}
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Complete;
