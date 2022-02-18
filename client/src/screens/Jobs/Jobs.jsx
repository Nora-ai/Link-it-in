import { Link } from 'react-router-dom'
import './Jobs.scss'

export default function Jobs (props) {

    const { jobs } = props

    return(
        <div className="jobs-page-container">
            <h3 className="jobs-title">Would you like to apply to some jobs today?</h3>
            <div className="jobs-list-container">
                <div className="jobs-header">
                    <p>Date Added</p>
                    <select className="owner-tag">
                        <option>Nora</option>
                        <option>Raul</option>
                    </select>
                    <p>Company</p>
                    <p>Position</p>
                    <p>Status</p>
                </div>
                
                <div className="jobs-list">
                {jobs.map((job, index) => (
                        <Link to={`/jobs/${job.id}`} className="link-to-job">
                    <div className="jobs-row">
                        <p>{job.fields.Created}</p>
                        <p>{job.fields.owner}</p>
                        <p>{job.fields.company}</p>
                        <p>{job.fields.position}</p>
                        <p>{job.fields.status}</p>
                    </div>
                        </Link>
                ))}
                </div>
            
            </div>

            <Link to="/" className="back-to-homepage"><p>Add New Job</p></Link>


        </div> 
    )
}