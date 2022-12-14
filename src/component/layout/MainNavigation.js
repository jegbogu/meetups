import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"
import  FavoritesContext  from "../../store/favorities-context";

const MainNavigation = () => {
    const fovoritesCtx = useContext(FavoritesContext)
    return ( 
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to = '/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to = '/new-meetup'>Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to = '/favourites'>My Favorites
                        <span className={classes.badge}>{fovoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default MainNavigation;