import axios from "axios"
import { baseURL, config } from "../../services/apiConfig"
import { useNavigate } from 'react-router-dom'
import './FormStart.scss'


export default function FormStart(props) {
    const navigate = useNavigate()
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
        navigate('/jobs')
    }

    return (
        <div className="form-start-container">
            <h3 className="form-start-title">Let's get some more information</h3>

            <form onSubmit={handleSubmit} className="form-start-form">
                <input 
                    className="form-start-input"
                    type="text"
                    placeholder="company name"
                    value={company}
                    required
                    onChange={(e) => setCompany(e.target.value)}
                />

                <input 
                    className="form-start-input"
                    type="text"
                    placeholder="position name"
                    value={position}
                    required
                    onChange={(e) => setPosition(e.target.value)}
                 />

                 <button className="form-start-button" type="submit">Link-it-in</button>

            </form>
            
        </div>
    )
}
