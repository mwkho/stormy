import React, { useState, useEffect } from 'react';
import CommentListItem from "./CommentListItem"
import Axios from 'axios';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default function CommentList(props){
  
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  
  const  getComments = () => {
    return Axios.get('get/comments')
    .then((results) => {
      setComments([...results.data.rows])
    })
  };

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
  
  // renders list of comments on initial render
  useEffect(() => {
    getComments()
  },[])
  
  // run this effect for every change on comments
  useEffect(()=>{
    setNewComment("")
  }, [comments])
  

  const commentList = !comments ? undefined : comments.map(comment => {
    if(props.place){
      if(comment.place_id === props.place[0].id){
        return (
          <CommentListItem convertDate={props.convertDate} timestamp={comment.comment_date}>
            {comment.content}
          </CommentListItem>
        )
      }
    }
    return null
  });
  
  return(
    <>
        <Box  display="flex"
        multiline
        flexDirection='column'
    // justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    width='100%'
    >
        <form 
          autoComplete="off"
          onSubmit={event => event.preventDefault()}
        >
          {/* <input
            type="text"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            placeholder="Enter your comment"
            data-testid="comment-input"
          /> */}
          <TextField size='medium' multiline  variant="outlined" onChange={(event) => setNewComment(event.target.value)} value={newComment}/>  
        </form>
        <Button 
        onClick={submitComment}
        variant="contained"
        color="primary"
        >
          Submit
        </Button >

      {commentList}
      </Box>
    </>
  )

};
