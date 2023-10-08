import React, { useState } from "react";
import './App.css'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {v4 as uuidv4} from 'uuid'
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskDetails from "./TaskDetails";

const App = () => {
  // let message = 'Hello world porra!'
  const [tasks, setTaks] = useState([
    {
      id: 1,
      title: 'Learn Programming',
      completed: false,
      info: "Today, my top priority is to dive into programming. I'll dedicate focused time to sharpen my coding skills, whether it's through tutorials, practice projects, or online courses. Building my programming expertise is crucial for my personal and professional growth.",
    },
    {
      id: 2,
      title: 'Read a Book',
      completed: true,
      info: "Reading is a wonderful way to expand my horizons and escape into different worlds. Today, I'm making sure to carve out some quiet time to immerse myself in a good book. Whether it's fiction or non-fiction, I'm excited to explore new ideas and stories.",
    },
    {
      id: 3,
      title: 'Watch Animes',
      completed: false,
      info: "Sometimes, relaxation and entertainment are essential. Today, I'm looking forward to enjoying some anime. It's a great way to unwind, be entertained by captivating stories and characters, and immerse myself in a different cultural experience.",
    },
    {
      id: 4,
      title: 'Learn Languages',
      completed: true,
      info: "Language is the key to connecting with people from different backgrounds. Today, I'm committed to my language learning journey. I'll practice and explore new languages, aiming to become more proficient and culturally aware. Each language I learn opens up new opportunities for communication and understanding.",
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task;
    })

    setTaks(newTasks);
  }

  const handleTaskAddition = (taskTitle, taskInfo) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        info: 'xxxxxxxxx',
      }]

    setTaks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTaks(newTasks);
  }

  return <Router>
    <div className="container">
      <Header />
      <Route path='/' exact render={() => (
        <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
        </>
      )}/>
      <Route path='/:taskTitle' exact render={(props) => <TaskDetails {...props} tasks={tasks} />} />

    </div>
  </Router>
}

export default App;