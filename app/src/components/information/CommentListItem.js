import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"80%",
    margin: theme.spacing(1)
  }
}))

export default function CommentListItem(props){
  const classes = useStyles();
  const {timestamp, convertDate, children} = props 
  console.log(timestamp)
  const date = new Date(timestamp)
  return(
    <Card className={classes.root}>
      <CardHeader 
        avatar={<Avatar>U</Avatar>}
        />
      <CardContent>
        <Typography align='left' color='textSecondary'>
         User Name
        </Typography>
      <Typography align='left' variant="body1"  style={{whiteSpace: 'pre-line'}} color='textPrimary'  >
          {children }
        </Typography>
        <Typography align='right' paragraph color = "textSecondary" component='p'>
          {convertDate(date, true)}  
        </Typography>
      </CardContent>
    </Card>
  )
};