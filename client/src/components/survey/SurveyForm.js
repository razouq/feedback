import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { reviewSurvey } from "../../actions";

const SurveyForm = ({ setShowReview }) => {
  const { register, handleSubmit, reset } = useForm();
  const [active, setActive] = useState();

  
  const dispatch = useDispatch();
  
  const titleRef = useRef();
  const subjectRef = useRef();
  const bodyRef = useRef();
  
  const { title, subject, body, recipients: storeRecipients } = useSelector(({ survey }) => survey);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    titleRef.current.value = title;
    subjectRef.current.value = subject;
    bodyRef.current.value = body;
    setActive(null);
  }, []);

  const onSubmit = (data) => {
    console.log({ ...data, recipients });
    dispatch(reviewSurvey({...data, recipients}));
    setShowReview(true);
  };

  const addRecipient = (e) => {
    e.preventDefault();
    setRecipients([...recipients, ""]);
  };

  const updateRecipient = (index, e) => {
    const newRecipients = [...recipients];
    newRecipients[index] = e.target.value;
    setRecipients(newRecipients);
  };

  const renderRecipients = () => {
    return recipients.map((recipient, index) => (
      <input
        key={index}
        type="text"
        value={recipient}
        onChange={(e) => updateRecipient(index, e)}
      />
    ));
  };
  console.log(renderRecipients());
  console.log(recipients);

  return (
    <div>
      <h3>Create Survey</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label
            className={
              active === "title" || titleRef?.current?.value ? "active" : null
            }
            htmlFor="title"
          >
            Title
          </label>
          <input
            onFocus={(e) => setActive("title")}
            onBlur={(e) => e.target.value === "" && setActive(null)}
            ref={(e) => {
              register(e);
              titleRef.current = e;
            }}
            name="title"
            id="title"
            type="text"
            className="validate"
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label
            className={
              active === "subject" || subjectRef?.current?.value
                ? "active"
                : null
            }
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            onFocus={(e) => setActive("subject")}
            onBlur={(e) => e.target.value === "" && setActive(null)}
            ref={(e) => {
              register(e);
              subjectRef.current = e;
            }}
            name="subject"
            id="subject"
            type="text"
            className="validate"
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label
            className={
              active === "body" || bodyRef?.current?.value ? "active" : null
            }
            htmlFor="body"
          >
            Body
          </label>
          <input
            name="body"
            onFocus={(e) => setActive("body")}
            onBlur={(e) => e.target.value === "" && setActive(null)}
            ref={(e) => {
              register(e);
              bodyRef.current = e;
            }}
            id="body"
            type="text"
            className="validate"
            autoComplete="off"
          />
        </div>

        {renderRecipients()}

        <button
          className="waves-effect waves-light btn red"
          onClick={(e) => addRecipient(e)}
        >
          add Recipient
        </button>

        <button
          // onClick={() => setShowReview(true)}
          type="submit"
          className="waves-effect waves-light btn right"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
