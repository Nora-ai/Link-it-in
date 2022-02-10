import { Link, useParams } from 'react-router-dom'

export default function Job (props) {
    const params = useParams()

    const { jobs } = props

    const showInfo = jobs.find((job) => params.id === job.id)
    console.log(showInfo) 
    console.log(jobs)


    const { link, company, position, salary, status, techAss, appProcess, nextRound, final, notes } = showInfo.fields

    console.log(company)


    return (<>
        <div>
            <p>Company: {company}</p>
            <p>Position: {position}</p>
            <p>Salary: {salary}</p>
            <p>Link to Job: {link}</p>
            <p>Date Added:</p>
            <p>Applied: {status}</p>
            <p>Application: {appProcess}</p>
            <p>Tech Assessment: {techAss}</p>
            <p>Next Round: {nextRound}</p>
            <p>Final: {final}</p>
            <p>Notes: {notes}</p>
        </div>
       <Link to={`/jobs/${params.id}/edit`}><button>Edit</button></Link>

    </>)
}