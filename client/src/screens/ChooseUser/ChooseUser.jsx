import { useNavigate } from 'react-router-dom'
import './ChooseUser.css'

export default function ChooseUser(props) {

    const navigate = useNavigate()
    const { owner, setOwner } = props


    const handleSubmit = async (e, name) => {
        e.preventDefault()
        setOwner(name) 
        navigate.push('/company-info')
    }


    return(
        <div className="choose-user-container">
            <h3 className="choose-user-title">Let's make sure we add this job to the right list</h3>

            <button className="choose-user-nora" onClick={(e) => handleSubmit(e, "Nora")}>Nora</button>
            <button className="choose-user-raul" onClick={(e) => handleSubmit(e, "Raul")}>Raul</button>
            <button className="choose-user-none">Not Nora or Raul</button>
        
        </div>

    )
}