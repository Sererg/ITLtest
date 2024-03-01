import { useNavigate } from 'react-router-dom'
import './card.scss'

interface PersonData {
    id:number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website:string 
}

const Card = ({ personData } : { personData: PersonData })=> {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`users/${personData.id}`)}>
            <div className="card__header">
               {personData.name}
            </div>
            <div className="card__main">
                <div>
                    {personData.username}
                </div>
                <div>
                {personData.email}
                </div>
                <div>
                {personData.phone}
                </div>
                <div>
                {personData.website}
                </div>
            </div>
            
            
        </div>
    )
}

export default Card