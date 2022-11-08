import { useContext } from "react";
import  FavoritesContext  from "../store/favorities-context";
import MeetupList from "../component/meetups/MeetupList";

const FavouritesPage = () => {
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if(favoritesCtx.totalFavorites=== 0){
        content=<p>You got no Favourites . start adding some</p>
    }else{
       content =  <MeetupList meetups={favoritesCtx.favorites}/>
    }
    return ( 
         <section>
            <h1>My Favourites</h1>
            {content}
         </section>
     );
}
 
export default FavouritesPage;