import "./App.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const initialValues = {
    name: "",
    details: "",
    email: "",
    number: "",
  };
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [submitBtn, setSubmitBtn] = useState(true);
  const [firstPage, setFirstPage] = useState(false);
  const [formErr, setFormErr] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  useEffect(() => {
    setFormValues({
      ...formValues,
      name: name,
      details: details,
      email: email,
      number: number,
    });
  }, [name, details, email, number]);
  const btnDiv = () => {
    console.log("ddddddd");
    console.log(name, details, email, number);
    console.log(formValues);
    setFormErr(validate(formValues));
    setIsSubmit(true);
    debugger;
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.msg = "Please add valid name field";
      errors.name = "Yes";
    }
    if (!values.details) {
      errors.msg = "Please add valid details";
      errors.details = "Yes";
    }
    if (!values.number) {
      errors.msg = "Please add valid email";
      errors.number = "Yes";
    }
    if (!values.email.match(validRegex)) {
      errors.msg = "Please add valid number field";
      errors.email = "Yes";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isSubmit) {
      setSubmitBtn(false);
      setFirstPage(true);
    }
  }, [formErr]);

  return (
    <>
      <div className="main-div">
        <div className="text-1-div">Contact Form</div>
        {submitBtn && (
          <div className="first-Page">
            Enter your Name
            <div className="text-2-div">
              <input
                type="text"
                size={40}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Animesh Mondal"
                required
              />
            </div>
            {formErr.name ? (
              <div className="text-3-div">Please add valid name field</div>
            ) : (
              <div className="text-4-div"></div>
            )}
            Enter your Details
            <div className="text-2-div">
              <textarea
                class="form-control"
                className="text-area"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            {formErr.details ? (
              <div className="text-3-div">Please add valid details</div>
            ) : (
              <div className="text-4-div"></div>
            )}
            Enter your Email
            <div className="text-2-div">
              <input
                type="text"
                size={40}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="animesh@gmail.com"
                required
              />
            </div>
            {formErr.email ? (
              <div className="text-3-div">Please add valid email</div>
            ) : (
              <div className="text-4-div"></div>
            )}
            Enter your Contact Number
            <div className="text-2-div">
              <input
                type="number"
                id="typeNumber"
                class="form-control"
                className="text-area"
                required
                placeholder="12345678"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            {formErr.number ? (
              <div className="text-3-div">Please add valid number field</div>
            ) : (
              <div className="text-4-div"></div>
            )}
            <div className="btn-div" onClick={btnDiv}>
              Submit
            </div>
          </div>
        )}
        {firstPage && (
          <div className="first-Page">
            <div>Name: {name}</div>
            <div>Details: {details}</div>
            <div>Email: {email}</div>
            <div>Contact Number: {number}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
