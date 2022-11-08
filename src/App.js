import './App.css';
import{Route,Switch} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './component/layout/Layout';
 

function App() {
  return (
    <div className="App">
    <Layout>
    <Switch>
      <Route path='/' exact>
          <AllMeetupsPage/>
      </Route>
      <Route path='/new-meetup'>
          <NewMeetupsPage/>
      </Route>
      <Route path='/favourites'>
          
          <FavouritesPage/>
      </Route>
    </Switch>
  </Layout>
    </div>
  );
}

export default App;
