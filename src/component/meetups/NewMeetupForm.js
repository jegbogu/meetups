import Card from "../ui/Card";
import {useRef} from 'react'
import classes from "./NewMeetupForm.module.css"



const NewMeetupForm = (props) => {

const titleUseRef = useRef()
const imageUseRef = useRef()
const addressUseRef = useRef()
const descriptionUseRef = useRef()

    const submitHandler = (event) =>{
        event.preventDefault()

        const meetUpData ={
            title : titleUseRef.current.value,
            image: imageUseRef.current.value,
            address: addressUseRef.current.value,
            description: descriptionUseRef.current.value
        }

        props.onAddMeetup(meetUpData)
        
        }
    return ( 
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleUseRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageUseRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressUseRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                     <textarea id='description' required rows='5' ref={descriptionUseRef}></textarea>
                </div>
                <div className={classes.action}>
                    <button>Add Meetup</button>
                </div>

            </form>

        </Card>
     );
}
 
export default NewMeetupForm;