import './Jobs.css'
import { Link, useParams } from 'react-router-dom'
import './Jobs.css'

export default function Jobs (props) {

    const { jobs } = props
    const { id } = useParams()

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
                    <div className="jobs-row">
                    <p>{job.fields.Created}</p>
                        <p>{job.fields.owner}</p>
                    <Link to={`/jobs/${job.id}`}>
                    <p>{job.fields.company}</p>
                        </Link>
                        <Link to={`/jobs/${job.id}`}>
                    <p>{job.fields.position}</p>
                    </Link>
                    <p>{job.fields.status}</p>
                    </div>
                ))}
                </div>
            
            </div>


        </div> 
    )
}