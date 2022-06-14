import React, { useState } from "react";

const Todo = () => {
  const initialVal = [
    {
      text: "Swimming",
    },
  ];
  const [data, setData] = useState(initialVal);
  const [text, setText] = useState("");

  const [buttonText,setButtonText]=useState("Add")

  const handleSubmit = () => {
    addTask(text);
    setText("");
    console.log(data);
  };

  const addTask = () => {
    let copy = [...data];
    copy = [...copy, { text: text }];
    setData(copy);
  };

  const deleteItem = (text) => {
    const TodoAfterRemove = data.filter((ele) => {
      return ele.text !== text;
    });
    setData(TodoAfterRemove);
  };
const selectItem=(item)=>{
  setText(item); 
}
 
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h3 className="text-center shadow-lg rounded p-2">ToDo List</h3>
            <div className="row mt-4 justify-content-around">
              <div className="col-7">
                <input
                  type="text"
                  className="form-control"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Write plan here. for e.g Swimming"
                />
              </div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-warning px-3 form-control "
                  onClick={handleSubmit}
                >
                  <b>{buttonText}</b>
                </button>
              </div>
            </div>
            <div className="row">
              <ul className="list-unstyled m-3 border-none">
                {data.map((value) => {
                  return (
                    <>
                    <li className="d-flex flex-row">
                       <span className="col-8 d-flex justify-content-start">{value.text}</span> 

                        <button
                          className="col-2 btn btn-link text-danger d-flex justify-content-end"
                          onClick={() => deleteItem(value.text)}
                        >
                          Delete
                        </button>
                        <button
                          className="col-2 btn btn-link text-danger d-flex justify-content-end"
                          onClick={() => selectItem(value.text)}
                        >
                          Edit
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
