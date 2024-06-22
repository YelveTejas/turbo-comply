import React, { useState } from "react";

const Form = ({ fields }) => {
  const [form, setForm] = useState({
     
  });



   
  const handleChange = (e) => {
    //   console.log(e.target.name)
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form, "form");
  };
  return (
    <>
      <div>
        {fields &&
          fields.map((e) => (
            <>
              <input placeholder={e} type={e} onChange={handleChange} value={e.value} ></input>
            </>
          ))}
      </div>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default Form;
