import { useState, useEffect } from "react";
import MeetupList from "../component/meetups/MeetupList";

const AllMeetupsPage = () => {
  const[isLoading, setIsLoading] = useState(true)
  const[loadedMeetups,setLoadedMeetups] = useState([])
 

  useEffect(()=>{
    setIsLoading(true);
  
    fetch('https://react-getting-started-f45a2-default-rtdb.firebaseio.com/meetups.json').then(response=>{
     return response.json()
    }).then((data)=>{
      const meetup = []
      for(const key in data){
        const meetups = {
          id:key,
          ...data[key]
        }
        meetup.push(meetups)
       
        
      }
      setIsLoading(false)
      setLoadedMeetups(meetup)
    });
  },[]);
 

if(isLoading){
  return(
    <section>
      <p>..Loading</p>
    </section>
  )
  
}

return ( 
    <section>
          <h1>AllMeetUps</h1>
          <MeetupList meetups={loadedMeetups}/>
        </section>
   );
}
 
export default  AllMeetupsPage;