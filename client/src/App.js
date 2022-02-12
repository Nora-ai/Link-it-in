import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services/apiConfig";
import axios from "axios";
import Jobs from "./screens/Jobs/Jobs";
import Job from "./screens/Job/Job";
import JobEdit from "./screens/JobEdit/JobEdit";
import HomePage from "./screens/HomePage/HomePage";
import ChooseUser from "./screens/ChooseUser/ChooseUser";
import FormStart from "./screens/FormStart/FormStart";

function App() {
  const [link, setLink] = useState("");
  const [owner, setOwner] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [salary, setSalary] = useState("");
  const [appProcess, setAppProcess] = useState("");
  const [techAss, setTechAss] = useState("");
  const [nextRound, setNextRound] = useState("");
  const [final, setFinal] = useState("");
  const [notes, setNotes] = useState("");

  const [jobs, setJobs] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get(baseURL, config);
      setJobs(response.data.records);
    };
    getJobs();
  }, [toggle]);

  // useEffect(() => {
  //   const updateJobs = async (body, id) => {
  //     const response = await axios.put(baseURL, { fields: body }, config)
  //     setJobs(response.data.records)
  //   }
  //   updateJobs()
  // },)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage link={link} setLink={setLink}/>} />
        <Route path="/choose-user"
          element={<ChooseUser owner={owner} setOwner={setOwner} />}/>
        <Route path="/company-info" element={
          <FormStart
            owner={owner}
            link={link}
            company={company}
            setCompany={setCompany}
            position={position}
            setPosition={setPosition}
            setToggle={setToggle}
          />} />
        <Route path="/jobs/:id" element={
          <Job
            jobs={jobs}
            owner={owner}
            link={link}
            company={company}
            position={position}
            status={status}
            salary={salary}
            appProcess={appProcess}
            techAss={techAss}
            nextRound={nextRound}
            final={final}
            notes={notes}
          />} />
        <Route exact path="/jobs"
          element ={<Jobs jobs={jobs} />} />

        <Route path="/jobs/:id/edit" element={
          <JobEdit 
          jobs={jobs} setJobs={setJobs}
          owner={owner} setOwner={setOwner}
          link={link} setLink={setLink}
          company={company} setCompany={setCompany}
          position={position} setPosition={setPosition}
          status={status} setStatus={setStatus}
          salary={salary} setSalary={setSalary}
          appProcess={appProcess} setAppProcess={setAppProcess}
          techAss={techAss} setTechAss={setTechAss}
          nextRound={nextRound} setNextRound={setNextRound}
          final={final} setFinal={setFinal}
          notes={notes} setNotes={setNotes}
          />} />
      </Routes>
    </>
  );
}

export default App;
