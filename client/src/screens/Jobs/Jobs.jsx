import './Jobs.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Jobs.css'

export default function Jobs (props) {

    //const history = useHistory()

    const { jobs } = props

    return(
        <div className="jobs-page-container">
            <h3 className="jobs-title">Would you like to apply to some jobs today?</h3>
            <div className="jobs-list-container">
                <div className="jobs-header">
                <p>Date Added</p>
                <p>Company</p>
                <p>Postion</p>
                <p>Status</p>
                </div>
                
                <div className="jobs-list">
                {jobs.map((job, index) => (
                    <Link to={`/jobs/${job.id}`}><div>
                    <p>{job.fields.owner}</p>
                    <p>{job.fields.company}</p>
                    <p>{job.fields.position}</p>
                    <p>{job.fields.status}</p>
                    </div></Link>
                ))}
                </div>
            
            </div>


        </div> 
    )
}