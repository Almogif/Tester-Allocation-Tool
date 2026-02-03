import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        Project: {task.selectProject} {task.selectBoard}{" "}
        <FaTimes
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>
        Name: {task.name} | Tester: {task.selectTester}
      </p>
      <h5>
        {task.selectStartTime} - {task.selectEndTime}      {task.selectTdr}     {" "}
        {task.selectDev}
      </h5>
      <p>{task.tp} </p>
      <p>
        {" "}
        {task.unit}      {task.box}      {task.job}{" "}
      </p>
      <p>{task.enterDate}</p>
    </div>
  );
};

export default Task;
