import { useNavigate } from 'react-router-dom'
import './postcard.scss'

interface PersonPost {
    userId:number;
    id:number;
    title:string;
    body:string;
}

const PostCard = ({ id, title, body, userId } : PersonPost)=> {

    return (
        <div className="posts container">
            <div className="posts__card">
                <div className="posts__card-title"> 
                    {title}
                </div>
                <div className="posts__card-body">
                    {body}
                </div>
            </div>
            
            
        </div>
    )
}

export default PostCard