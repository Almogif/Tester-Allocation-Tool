import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import "./AllocationDate.css";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [job, setJob] = useState("");
  const [unit, setUnit] = useState("");
  const [box, setBox] = useState("");
  const [name, setName] = useState("");
  const [tp, setTp] = useState("");
  const [reminder, setReminder] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectTester, setSelectTester] = useState("");
  const [selectProject, setSelectProject] = useState("");
  const [selectBoard, setSelectBoard] = useState("");
  const [selectStartTime, setSelectStartTime] = useState("");
  const [selectEndTime, setSelectEndTime] = useState("");
  const [selectTdr, setSelectTdr] = useState("");
  const [selectDev, setSelectDev] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const dateChange = (event) => {
    setEnterDate(event.target.value);
  };

  const options = [
    { value: "UF1", label: "UF1" },
    { value: "UF2", label: "UF2" },
    { value: "UF3", label: "UF3" },
    { value: "UF4", label: "UF4" },
    { value: "UF5", label: "UF5" },
    { value: "UF6", label: "UF6" },
  ];

  const projects = [
    { value: "BlackBird", label: "BlackBird" },
    { value: "CARMEL", label: "CARMEL" },
    { value: "FireBird", label: "FireBird" },
    { value: "ARAVA", label: "ARAVA" },
    { value: "AMOS", label: "AMOS" },
    { value: "AMOS GB", label: "AMOS GB" },
    { value: "GALIL", label: "GALIL" },
    { value: "NEGEV", label: "NEGEV" },
    { value: "VIPER", label: "VIPER" },
    { value: "PHOENIX", label: "PHOENIX" },
    { value: "SHOMRON", label: "SHOMRON" },
    { value: "Bluefield", label: "Bluefield" },
    { value: "CSOP", label: "CSOP" },
    { value: "TAMAR", label: "TAMAR" },
    { value: "KFIR", label: "KFIR" },
  ];

  const board = [
    { value: "HS", label: "HS" },
    { value: "LS", label: "LS" },
    { value: "HS + LS", label: "HS +LS" },
    { value: "Single site", label: "Single site" },
    { value: "dual sites", label: "dual sites" },
    { value: "4 sites", label: "4 sites" },
  ];

  const dev = [{ value: "Devmon", label: "Devmon" }];

  const tdr = [{ value: "TDR", label: "TDR" }];

  const start = [
    { value: "07:30", label: "07:30" },
    { value: "08:00", label: "08:00" },
    { value: "08:30", label: "08:30" },
    { value: "09:00", label: "09:00" },
    { value: "10:00", label: "10:00" },
    { value: "11:00", label: "11:00" },
    { value: "12:00", label: "12:00" },
    { value: "13:00", label: "13:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
    { value: "17:00", label: "17:00" },
    { value: "18:00", label: "18:00" },
    { value: "19:00", label: "19:00" },
    { value: "20:00", label: "20:00" },
  ];

  const end = [
    { value: "08:00", label: "08:00" },
    { value: "08:30", label: "08:30" },
    { value: "09:00", label: "09:00" },
    { value: "10:00", label: "10:00" },
    { value: "11:00", label: "11:00" },
    { value: "12:00", label: "12:00" },
    { value: "13:00", label: "13:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
    { value: "17:00", label: "17:00" },
    { value: "18:00", label: "18:00" },
    { value: "19:00", label: "19:00" },
    { value: "20:00", label: "20:00" },
    {
      value: "ETA - Please talk with Kfir",
      label: "ETA - Please talk with Kfir",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !selectProject ||
      !selectTester ||
      !selectStartTime ||
      !selectEndTime
    ) {
      alert("Must to fill name, project, tester and time");
      return;
    }
    onAdd({
      enterDate,
      text,
      tp,
      reminder,
      name,
      date,
      selectTester,
      selectProject,
      selectStartTime,
      selectEndTime,
      selectBoard,
      selectTdr,
      selectDev,
      unit,
      box,
      job,
    });
    setText("");
    setName("");
    setTp("");
    setReminder(false);
    setDate(date);
    setSelectTester(selectTester);
    setSelectProject(selectProject);
    setSelectBoard(selectBoard);
    setSelectStartTime(selectStartTime);
    setSelectEndTime(selectEndTime);
    setSelectDev(selectDev);
    setSelectTdr(selectTdr);
    setUnit(unit);
    setBox(box);
    setJob(job);
    setEnterDate(enterDate);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <dev className="form-control">
        <label> Name (Required)</label>
        <input
          type="text"
          placeholder="Add Your Name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </dev>

      <label> Tester (Required)</label>

      <Select options={options} onChange={(e) => setSelectTester(e.value)} />

      <label>Project (Required) </label>
      <Select options={projects} onChange={(e) => setSelectProject(e.value)} />

      <label>Start time (Required)</label>
      <Select options={start} onChange={(e) => setSelectStartTime(e.value)} />

      <label>End time(Required)</label>
      <Select options={end} onChange={(e) => setSelectEndTime(e.value)} />

      <div className="new-expense__control">
        <label> Date </label>
        <input
          type="date"
          onChange={dateChange}
          value={enterDate}
          min="2022-04-01"
          max="2025-01-01"
        />
      </div>

      <label>Board type (Optional)</label>
      <Select options={board} onChange={(e) => setSelectBoard(e.value)} />

      <dev className="form-control">
        <label> Unit (Optional)</label>
        <input
          type="unit"
          placeholder="Add the unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
      </dev>
      <dev className="form-control">
        <label> Box number (Optional)</label>
        <input
          type="unit"
          placeholder="Add the box number"
          value={box}
          onChange={(e) => setBox(e.target.value)}
        />
      </dev>

      <label>Devmon (Optional)</label>
      <Select options={dev} onChange={(e) => setSelectDev(e.value)} />

      <label>TDR Cal (Optional)</label>
      <Select options={tdr} onChange={(e) => setSelectTdr(e.value)} />

      {/* <dev className='form-control'>
        <label> Project </label>
        <input type='text' placeholder='Add Project' value={text} onChange={(e) => setText(e.target.value)}/>
    </dev> */}

      <dev className="form-control">
        <label> TP Path (optional)</label>
        <input
          type="text"
          placeholder="Add your TP path here"
          value={tp}
          onChange={(e) => setTp(e.target.value)}
        />
      </dev>
      <dev className="form-control">
        <label> Job/ Cannel map(Optional)</label>
        <input
          type="unit"
          placeholder="Add the box number"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </dev>

      {/* <div>
        <Calendar className="react-calendar" onChange={setDate} value={date} />
      </div> */}

      {/* check box */}
      {/* 
        <dev className='form-control form-control-check'>
        <label>Remainder</label>
        <input type='checkbox'
        checked={reminder}
        value={reminder} 
        onChange={(e) => setReminder
        (e.currentTarget.checked)}/>
    </dev> */}

      <input type="submit" value="Save Allocation" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
