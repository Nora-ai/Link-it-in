import axios from 'axios'
import { baseURL, config } from '../../services/apiConfig'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function JobEdit(props) {

    const { id } = useParams()
    const navigate = useNavigate()
    const [oneJob, setOneJob] = useState({})
       
    const {company, setCompany, position, setPosition, salary, setSalary, 
        link, setLink, status, setStatus, appProcess, setAppProcess, 
        techAss, setTechAss, nextRound, setNextRound, 
        final, setFinal, notes, setNotes, owner } = props
    
    
    useEffect(() => {
        const getOneJob = async () => {
            const response = await axios.get(`${baseURL}/${id}`, config)
            setOneJob(response.data.fields)
            setCompany(response.data.fields.company)
            setPosition(response.data.fields.position)
            setLink(response.data.fields.link)
            setSalary(response.data.fields.salary || "")
            setStatus(response.data.fields.status || "")
            setAppProcess(response.data.fields.appProcess || "")
            setTechAss(response.data.fields.techAss || "")
            setNextRound(response.data.fields.nextRound || "")
            setNotes(response.data.fields.notes || "")
            setFinal(response.data.fields.final || "")
        }
        getOneJob()
    }, [id])
        

    const handleSubmit = (e) => {
        e.preventDefault()
        const fields = {
            company,
            position,
            link,
            salary,
            status,
            appProcess,
            techAss,
            nextRound,
            notes,
            final,
            owner
        }

        const updateJobs = async () => {
            const response = await axios.put(`${baseURL}/${id}`, { fields }, config)
            navigate(`/jobs/${id}`)
        }
        updateJobs()
    }


    return(<>

        <form onSubmit={handleSubmit}>
            <label>
                Company:
            <input 
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            </label>
            <label>
                Position:
            <input 
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />
            </label>
            <label>
                Salary:
            <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            </label>
            <label>
                Link:
            <input 
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            </label>
            {/* <label>
                Date Added:
            <input 
                type="text"
                value=""
                // onChange={(e) => setLink(e.target.value)}
            />
            </label> */}
            <label>
                Status:
            <input 
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            </label>
            <label>
                Application Process:
            <input 
                type="text"
                value={appProcess}
                onChange={(e) => setAppProcess(e.target.value)}
            />
            </label>
            <label>
                Tech Assessment:
            <input 
                type="text"
                value={techAss}
                onChange={(e) => setTechAss(e.target.value)}
            />
            </label>
            <label>
                Next Round:
            <input 
                type="text"
                value={nextRound}
                onChange={(e) => setNextRound(e.target.value)}
            />
            </label>
            <label>
                Final Interview:
            <input 
                type="text"
                value={final}
                onChange={(e) => setFinal(e.target.value)}
            />
            </label>
            <label>
                Notes:
            <input 
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            </label>
             
            <button>Submit Changes</button>
        </form>
        
    
    
    
    </>)
}