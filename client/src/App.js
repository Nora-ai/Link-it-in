import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from "react"
import { baseURL, config } from './services/apiConfig'
import axios from 'axios'
import Jobs from './screens/Jobs/Jobs'
import Job from './screens/Job/Job'
import HomePage from './screens/HomePage/HomePage'
import ChooseUser from './screens/ChooseUser/ChooseUser';
import FormStart from './screens/FormStart/FormStart'

function App() {
  const [link, setLink] = useState("")
  const [owner, setOwner] = useState("")
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [status, setStatus] = useState("")
  const [salary, setSalary] = useState("")
  const [appProcess, setAppProcess] = useState("")
  const [techAss, setTechAss] = useState("")
  const [nextRound, setNextRound] = useState("")
  const [final, setFinal] = useState("")
  const [notes, setNotes] = useState("")

  const [jobs, setJobs] = useState([])
  const [toggle, setToggle] = useState(false)
  

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get(baseURL, config)
      // console.log(response.data.records)
      setJobs(response.data.records)
    }
    getJobs()
  }, [toggle])


  return (<>
    <Switch>
    <Route exact path='/'>
      <HomePage link={link} setLink={setLink}/>
    </Route>
    <Route path='/choose-user'>
      <ChooseUser owner={owner} setOwner={setOwner} />
    </Route>
    <Route path='/company-info'>
        <FormStart owner={owner} link={link} company={company} 
        setCompany={setCompany} position={position} setPosition={setPosition} 
        setToggle={setToggle}/>
    </Route>
    
    <Route path='/jobs/:id'>
      <Job jobs={jobs} owner={owner} link={link} company={company} 
      position={position} status={status} salary={salary}
      appProcess={appProcess} techAss={techAss} nextRound={nextRound} 
      final={final} notes={notes}/>
    </Route>
    <Route exact path='/jobs'>
      <Jobs jobs={jobs} 
       />
    </Route>
    
    <Route path='/edit/:id'>

    </Route>
    </Switch>

  </>);
}

export default App;
