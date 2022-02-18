import { Link, useNavigate } from 'react-router-dom'
import './HomePage.scss'

export default function HomePage(props) {
    const navigate = useNavigate()
    const { link, setLink } = props

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/choose-user')
    }


    return (
        <div className="homepage-container">
            <h2 className="homepage-logo">Link-it-in</h2>
            <div className="bubble">
                <p className="bubble-text">Found a job you like? Not ready to apply? Save it here, apply later.</p>
            </div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
            <form onSubmit={handleSubmit} className="homepage-form">
                <input
                    className="homepage-input"
                    type="text"
                    placeholder="insert job link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </form>
            <Link to="/jobs" className="homepage-link"><p>Actually, I am ready to apply for jobs!</p></Link>


        </div>
    )
}