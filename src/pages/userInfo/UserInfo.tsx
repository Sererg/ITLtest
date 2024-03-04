import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../services/storeHook/hook"
import { addFavorites } from "../../services/favorites/favoriteSlice"
import vector from "../../assets/vector.svg"
import PostCard from "../../components/postCard/PostCard"

interface PersonItem {
    id:number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website:string 
}

interface PersonPost {
    userId:number;
    id:number;
    title:string;
    body:string;
}


const UserInfo = () => {

    const dispatch = useAppDispatch();

    const [user, setUser] = useState <Array<PersonPost>>();
    const [userInfo, setUserInfo] = useState <PersonItem>();


    const { id: personsId } = useParams()

    const getPlaceHolderAPI = async () => {
        const result = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${personsId}`)
        const resultUserInfo = await fetch (`https://jsonplaceholder.typicode.com/users/${personsId}`)

        const userDataInfo = await resultUserInfo.json()
        setUserInfo({
            id: userDataInfo.id,
            name: userDataInfo.name,
            email: userDataInfo.email,
            username: userDataInfo.username,
            phone: userDataInfo.phone,
            website:userDataInfo.website
        })
        
        const data = await result.json()
        setUser(data)
      }
    
      useEffect(() => {
        getPlaceHolderAPI()
      }, [])

      const favoritesUsers = useAppSelector((state) => state.allFavorites )

      const checkIncludeFavorites = favoritesUsers?.find((user) => user.id === userInfo?.id )
      console.log(checkIncludeFavorites, "2222");


    return (
        <div className= "container">
          
            <div className="postCard">
                <div className="postCard__header">
                    <div>
                    {userInfo?.name}
                    <button  className="buttonFavorite" disabled={!!checkIncludeFavorites}
                        onClick={() => {
                            if(userInfo) {
                                
                                dispatch(addFavorites(userInfo))}
                            }}>
                        <img src={vector} className="header__favorites-image" alt="star" />
                    </button>
                    </div>
                    <>Posts</>
                   
                </div>
            
                {user?.map((elem: PersonPost) => {
                    return (
                    <div>
                        <PostCard 
                        id={elem.id}
                        title={elem.title}
                        body={elem.body} 
                        userId={elem.userId}
                        />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserInfo