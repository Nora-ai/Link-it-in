// import axios from 'axios'
// import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { baseURL, config } from '../../services/apiConfig'
import './HomePage.css'

export default function HomePage(props) {
    const navigate = useNavigate()
    const { link, setLink } = props

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate.push('/choose-user')
    }


    return (
        <div className="homepage-container">
            <h2 className="homepage-logo">Link-it-in</h2>

            <form onSubmit={handleSubmit} >
                <input
                    className="homepage-input"
                    type="text"
                    placeholder="insert job link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </form>
            <Link to="/jobs"><p className="homepage-link">Actually, I am ready to apply for jobs</p></Link>


        </div>
    )
}