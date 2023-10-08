import React from "react";
import Button from "./components/button";
import { useParams } from "react-router-dom";
import './TaskDetails.css'
import { useHistory } from "react-router-dom";

const TaskDetails = ({ tasks }) => {
    const params = useParams();
    const history = useHistory();
    const handleBackButtonClick = () => {
    history.goBack();
    }


    const task = tasks.find(task => task.title === params.taskTitle);

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Return</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>{task ? task.info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}</p>
            </div>
        </>
    );
}

export default TaskDetails;
