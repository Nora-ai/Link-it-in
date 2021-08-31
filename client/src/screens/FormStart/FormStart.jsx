import axios from "axios"
import { baseURL, config } from "../../services/apiConfig"
import { useHistory } from 'react-router-dom'
import './FormStart.css'


export default function FormStart(props) {
    const history = useHistory()
    const { owner, link, company, setCompany, position, setPosition, setToggle} = props

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fields = {
            owner,
            link, 
            company,
            position
        }
        await axios.post(baseURL, {fields}, config)
        setToggle(prev => !prev)
        history.push('/jobs')
    }

    return (
        <div className="form-start-container">
            <h3 className="form-start-title">Type in info</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    className="form-start-input"
                    type="text"
                    placeholder="company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />

                <input 
                    className="form-start-input"
                    type="text"
                    placeholder="position name"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                 />

                 <button className="form-start-button" type="submit"></button>

            </form>
            
        </div>
    )
}
