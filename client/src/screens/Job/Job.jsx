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
 

    return (
        <div className="job-page-container">
            <div className="job-container">
                <div className="job-inner-container-left">
                    <p className="job-company">{company}</p>
                    <p className="job-position">{position}</p>
                    <p className="job-salary">SALARY: {salary}</p>
                    <p>LINK TO JOB: {link}</p>
                    <p>DATE ADDED:</p>
                    <p>APPLIED: {status}</p>
                </div>
                <div className="job-inner-container-right">
                    <p>APPLICATION PROCESS: {appProcess}</p>
                    <p>TECH ASSESSMENT: {techAss}</p>
                    <p>NEXT ROUND: {nextRound}</p>
                    <p>FINAL: {final}</p>
                    <p>NOTES: {notes}</p>
                    <Link to={`/jobs/${id}/edit`}><button className="job-edit">Edit</button></Link>
                    <button className="job-delete"onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}