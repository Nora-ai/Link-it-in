import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL, config} from '../../services/apiConfig'
import './Job.css'

export default function Job (props) {
    const [oneJob, setOneJob] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getOneJob = async () => {
            const response = await axios.get(`${baseURL}/${id}`, config)
            setOneJob(response.data.fields)
        }
        getOneJob()
    }, [id])


    const { link, company, position, salary, status, techAss, appProcess, nextRound, final, notes } = oneJob

    
    const handleDelete = async () => {
        const response = await axios.delete(`${baseURL}/${id}`, config)
        if (response) {
            navigate('/jobs')
        }
    }
 

    return (<>
        <div className="job-container">
            <div className="job-inner-container-left">
            <p className="job-company">{company}</p>
            <p className="job-position">{position}</p>
            <p className="job-salary">Salary: {salary}</p>
            <p>Link to Job: {link}</p>
            <p>Date Added:</p>
            <p>Applied: {status}</p>
            </div>
            <div className="job-inner-container-right">
            <p>Application Process: {appProcess}</p>
            <p>Tech Assessment: {techAss}</p>
            <p>Next Round: {nextRound}</p>
            <p>Final: {final}</p>
            <p>Notes: {notes}</p>
            <Link to={`/jobs/${id}/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>

    </>)
}