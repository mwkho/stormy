import React, { useState, useEffect } from 'react';
import CommentListItem from "./CommentListItem"
import Axios from 'axios';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  }
}));

export default function CommentList(props){
  const {placeId} = props
  const [comments, setComments] = useState()
  const [newComment, setNewComment] = useState("")
  const classes = useStyles();

  const getComments = (placeId) => {
    console.log('arrived at comment')
    return Axios.get(`get/comments/${placeId}`)
    .then((results) => {
      console.log(results.data.rows)
      setComments([...results.data.rows])
    })
  };

  const submitComment = function() {
    Axios.post(`/add/comment`, { placeId: placeId, comment:newComment})
    .then(getComments(placeId)) // setComments(prev => [...prev,newComment])  })
    .catch(err=>{
      console.log(err)
    })
  }; 
  
  //renders list of comments on initial render
  useEffect(() => {
    getComments(placeId)
  }, [])
  
  // run this effect for every change on comments
  useEffect(()=>{
    setNewComment("")
  }, [comments])
  

  const commentList = !comments ? undefined : comments.map(comment => {
    // if(place){
      if(comment.place_id === placeId){
        return (
          <CommentListItem convertDate={props.convertDate} timestamp={comment.comment_date} username="Egg Eggerson">
            {comment.content} 
          </CommentListItem>
        )
      }
    // }
    return null
  });
  
  return(
    <>
    <Box height='2rem'/>
      <Typography variant='h6'>
        Have some conditions to report? Let us know by leaving a comment!
      </Typography>
      <Box
        className={classes.root}
        display="flex"
        flexDirection='column'
        justifyContent="center"
        alignItems="center"
      >
        <TextField  
          style={{ width: '80%' }}
          multiline
          variant='filled'
          onChange={(event) => setNewComment(event.target.value)} 
          value={newComment}            
        />  
        <Button
          className={classes.root}
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
