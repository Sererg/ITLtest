import './postcard.scss'

interface PersonPost {
    userId:number;
    id:number;
    title:string;
    body:string;
}

const PostCard = ({ title, body } : PersonPost)=> {

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