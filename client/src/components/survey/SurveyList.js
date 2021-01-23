import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../actions";

const SurveyList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurveys());
  }, []);

  const surveys = useSelector((state) => {
    console.log("state", state);
    return Object.values(state.surveys);
  });
  console.log("sur", surveys);

  const renderSurveys = () => {
    return surveys.map(({ title, subject, body, recipients, yes, no }) => (
      <tr>
        <td>{title}</td>
        <td>{subject}</td>
        <td>{body}</td>
        <td>{recipients.length}</td>
        <td>{yes}</td>
        <td>{no}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h3>List Surveys</h3>
      <table className="striped centered">
        <thead>
          <tr>
            <th>title</th>
            <th>subject</th>
            <th>body</th>
            <th>Number of Recipients</th>
            <th>YES</th>
            <th>NO</th>
          </tr>
        </thead>

        <tbody>
          {renderSurveys()}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyList;
