import Card from "../../components/cards/Card";
import { useAppSelector } from "../../services/storeHook/hook"

const FavoritesPage = () => {

    interface PersonItem {
        id:number;
        name: string;
        email: string;
        username: string;
        phone: string;
        website:string 
    }

    const favoritesUsers = useAppSelector((state) => state.allFavorites )
    return (
    <>  
      <div className={favoritesUsers.length < 1 ? "container" : "cards__box container"}>
        {favoritesUsers.length 
    ? (favoritesUsers?.map(( personItem : PersonItem ) => (
                        <div className= "cards__wrapper">
                            <Card key={personItem?.id} personData={personItem} />
                        </div>
                    )
                ))
        : 'Вы пока никого не добавили в избранное 😭'
    }
        </div>
    </>
           
    )
}

export default FavoritesPage