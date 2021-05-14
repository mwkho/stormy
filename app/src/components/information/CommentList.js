import React, { useState, useEffect } from 'react';
import CommentListItem from "./CommentListItem"
import Axios from 'axios';
import Button from '@material-ui/core/Button';


export default function CommentList(props){
  
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  
  const  getComments = () => {
    return Axios.get('get/comments')
    .then((results) => {
      setComments([...results.data.rows])
    })
  };
  
  // run this effect for every change on comments
  useEffect(()=>{
    setNewComment("")
  }, [comments])
  
  // renders list of comments on initial render
  useEffect(() => {
    getComments()
  },[])

  const submitComment = function() {
    Axios.post(`/add/comment`, { placeId:props.place[0].id, comment:newComment})
    .then(resp => {
      getComments()
      // setComments(prev => [...prev,newComment])
    })
    .catch(err=>{
      console.log(err)
    })
  }; 
  
  const commentList = !comments ? undefined : comments.map(comment => {
    if(props.place){
      if(comment.place_id === props.place[0].id){
        return <CommentListItem timestamp={comment.comment_date}>{comment.content}</CommentListItem>
      }
    }
    return null
  });
  
  return(
    <>
      <img src={props.image} width="50" height="50"/>
      <div className="comment-form">
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
        <Button onClick={submitComment} className="send" type="submit">
          <i class="fa fa-paper-plane" aria-hidden="true"></i>
        </Button>
      </div>
      {commentList}
    </>
  )

};

