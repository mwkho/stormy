import React, { useState } from 'react';
import axios from 'axios';
import CommentListItem from "./CommentListItem"

export default function CommentList(props){

  return(
    <>
    <img src={props.image} width="50" height="50"/>
    <div class="reply-form">
      <textarea id="message-text" name="message" placeholder="Type your comment"></textarea>
      <button class="send" type="submit">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
      </button>
    </div>
    <CommentListItem comment="Its a comment" timestamp="Dec 21st 2020" />
    </>
  )

};

