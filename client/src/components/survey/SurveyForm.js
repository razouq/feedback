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
  const recipientsRef = useRef();

  console.log("render");
  const theTitle = useSelector(state => state.survey.title)

  // undefined
  console.log("ref", titleRef?.current?.value);

  useEffect(() => {
    titleRef.current.value = theTitle;
    setActive(null);
  }, [theTitle]);

  const onSubmit = (data) => {
    dispatch(reviewSurvey(data));
    setShowReview(true);
  };

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
        <div className="input-field">
          <label
            className={
              active === "recipients" || recipientsRef?.current?.value
                ? "active"
                : null
            }
            htmlFor="recipients"
          >
            Recipients
          </label>
          <input
            name="recipients"
            id="recipients"
            type="text"
            className="validate"
            onFocus={(e) => setActive("recipients")}
            onBlur={(e) => e.target.value === "" && setActive(null)}
            ref={(e) => {
              register(e);
              recipientsRef.current = e;
            }}
            autoComplete="off"
          />
        </div>
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
