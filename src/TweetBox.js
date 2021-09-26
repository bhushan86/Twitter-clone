import { Button,Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import "./TweetBox.css"
import db from './firebase';

function TweetBox() {
    const[tweetMessage,setTweetMessge]=useState('');
    const[tweetImage,setTweetImage]=useState("");
    const sendTweet = e =>{
        e.preventDefault();

        db.collection('post').add({
            displayName:'Bhushan Patil',
            username:'bhushan',
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar: "https://ibb.co/fHGdLvf",

        });
        setTweetMessge("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://ibb.co/fHGdLvf"/> 
                <input 
                onChange={e => setTweetMessge(e.target.value)} 
                value={tweetMessage} 
                 placeholder="what's happening"
                  type='text'/>
              
                </div>
                <input 
                value={tweetImage}
                onChange={(e)=> setTweetImage(e.target.value)}
                className="tweetBox__imageinput" placeholder="Enter image URL" type='text'/> 
                <Button onClick={sendTweet} type="submit" className="tweerBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
