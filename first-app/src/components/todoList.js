import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
    taskName: "",
    taskDescription: "",
    taskPriority: "low",
    filterPriority: "all",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTask = () => {
    const { taskName, taskDescription, taskPriority, tasks } = this.state;
    if (taskName.trim() === "") {
      return;
    }

    const newTask = {
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      completed: false,
    };

    this.setState({
      tasks: [...tasks, newTask],
      taskName: "",
      taskDescription: "",
      taskPriority: "low",
    });
  };

  toggleTaskComplete = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    this.setState({ tasks: updatedTasks });
  };

  deleteTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };

  filterTasks = (priority) => {
    this.setState({ filterPriority: priority });
  };

  render() {
    const { tasks, taskName, taskDescription, taskPriority, filterPriority } = this.state;
    const filteredTasks = filterPriority === "all" ? tasks : tasks.filter(task => task.priority === filterPriority);

    return (
      <div className="App">
        <h1>Priority To-Do List</h1>

        <div>
          <input
            type="text"
            name="taskName"
            placeholder="Task Name"
            value={taskName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="taskDescription"
            placeholder="Task Description"
            value={taskDescription}
            onChange={this.handleInputChange}
          />
          <select name="taskPriority" value={taskPriority} onChange={this.handleInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button onClick={this.addTask}>Add Task</button>
        </div>

        <div>
          <label>Filter by Priority:</label>
          <select value={filterPriority} onChange={(e) => this.filterTasks(e.target.value)}>
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.toggleTaskComplete(index)}
              />
              {task.name} ({task.priority})
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
