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

    // const [page, setPage] = useState(1);
    // const [offset, setOffset] = useState(1);
    // const [limit] = useState(10);

    // const onPageChange = (newPage) => {
    //     const newOffset = newPage * limit - (limit - 1);
    //     setOffset(newOffset);
    //     setPage(newPage);
    // };
  
    console.log(allUsers);
 

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