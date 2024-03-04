import Card from "../../components/cards/Card"
import { useEffect, useState } from "react";

export interface PersonItem {
    id:number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website:string 
}

const MainPage = () => {

    const [allUsers, setAllUsers] = useState <Array<PersonItem>>()

    const getPlaceHolderAPI = async () => {
      const result = await fetch ('https://jsonplaceholder.typicode.com/users')
      const data = await result.json()
      setAllUsers(data)
    }
  
    useEffect(() => {
      getPlaceHolderAPI()
    }, [])

    return (
            <div className= "cards__box container">
                {allUsers?.map(( personItem : PersonItem )=> {
                    return (
                       
                            <Card key={personItem?.id} personData={personItem} />
                     
                    )
                })}
            </div>
    )
}

export default MainPage