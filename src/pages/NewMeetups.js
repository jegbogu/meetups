import {useHistory} from 'react-router-dom'
import NewMeetupForm from "../component/meetups/NewMeetupForm";


const NewMeetupsPage = () => {
    const history = useHistory()
    const addMeetupHandler = (meetUpData) =>{
        
        fetch(
            'https://react-getting-started-f45a2-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetUpData),
                headers:{
                    'Content-Type':'application/json'
                }
            }

            ).then(()=>{
                history.replace('/')
            })

    }
    return ( 
        <section>
        <h1>New Meet Ups</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
     );
}
 
export default NewMeetupsPage;