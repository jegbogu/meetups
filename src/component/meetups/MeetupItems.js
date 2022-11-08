import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItems.module.css'
import  FavoritesContext  from '../../store/favorities-context';
const MeetupItem = (props) => {
const favoritesCtx = useContext(FavoritesContext)

const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    const toggleFavoritesStatusHandler=()=>{
       if(itemIsFavorite){
        favoritesCtx.removeFavorite(props.id)
       } else{
        favoritesCtx.addFavorite({
            id:props.id,
            title:props.title,
            description: props.description,
            image:props.image,
            address:props.address,

        })
       }
    }
    return ( 
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src ={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
                <div className={classes.action}>
                    <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite? 'Remove From Favorites':'To Favourites'}</button>
                </div>
            </div>
            </Card>
        </li>
     );
}
 
export default MeetupItem;