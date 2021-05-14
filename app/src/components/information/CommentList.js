import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentListItem from "./CommentListItem"
import Axios from 'axios';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  console.log("force update was called")
  return () => setValue(value => value + 1); // update the state to force render
}


export default function CommentList(props){

  const [comment, setComment] = useState()
  const [newComment, setNewComment] = useState("")
  const [test, setTest] = useState('')
  const forceUpdate = useForceUpdate()

  function getComments(){
    Axios.get('/api/getComments')
    .then((results) => {
      setComment([...results.data.rows])
    })
  };
 
  useEffect(()=>{
    getComments()
  },[])
  const commentList = !comment ? undefined : comment.map(comment => {
    if(props.place){
      console.log("props.place", props.place)
      if(comment.place_id === props.place[0].id){
    return <CommentListItem comment={comment.content} timestamp={comment.comment_date}/>
      }
    }
    return null

  });
  
  const onSubmit = function(){
    Axios.post(`/api/addComments/${props.place[0].id}/${newComment}`)
    .then(resp=>{
      console.log(resp)
      setNewComment("")
      getComments()
    })
    .catch(err=>{
      console.log(err)
    })
  }; 

  console.log(newComment)

  return(
    <>
    <img src={props.image} width="50" height="50"/>
    <div class="reply-form">
    <form 
    autoComplete="off"
    onSubmit={event => event.preventDefault()}
    >
      <input
        type="text"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        placeholder="Enter your comment"
        data-testid="comment-input"
      />
    </form>
      <button onClick={onSubmit}class="send" type="submit">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
      </button>
    </div>
    {commentList}
    </>
  )

};

