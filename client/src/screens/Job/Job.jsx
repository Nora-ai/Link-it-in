import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Job (props) {
    const params = useParams()

    const showInfo = props.jobs.find((job) => params.id === job.id)
    console.log(showInfo)

    const { jobs, owner, link, company, position, salary, status, techAss, appProcess, nextRound, final, notes } = showInfo.fields

    console.log(company)


    // useEffect(() => {
       
    // },[])

    // if (params.id) {
    //     const showInfo = jobs.find((job) => params.id === jobs.id)
    //     console.log(showInfo)
    // }

    return (
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

    )
}