import React from 'react';
import { TextField,Button,Typography,Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/posts';
const Form = () => {
    const[postData,setPostData]=useState({creator:"",title:"",message:"",tags:"",selectedFile:""})
     const classes= useStyles();
     const dispatch=useDispatch()

     const handleSubmit = (e) =>{
         e.preventDefault();
         dispatch(createPost(postData))


     }
     const clear =() => {

     }

    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}  onSubmit={handleSubmit}>
                <Typography varient="h6">Creating a Memory</Typography>
                <TextField   name="creator" varient="outlined"label="Creator" value={postData.creator}onChange={(e)=> setPostData({...postData,creator:e.target.value})} fullWidthvalue />
                <TextField   name="title" varient="outlined"label="Title" value={postData.title}onChange={(e)=> setPostData({...postData,title:e.target.value})} fullWidthvalue />
                <TextField   name="msg" varient="outlined"label="Message" value={postData.message}onChange={(e)=> setPostData({...postData,message:e.target.value})} fullWidthvalue />
                <TextField   name="ta"gs varient="outlined"label="Tags" value={postData.tags}onChange={(e)=> setPostData({...postData,tags:e.target.value})} fullWidthvalue />
                <div className={classes.fileInput}> <FileBase multiple={false} onDone={({base64}) => setPostData({...postData,selectedFile:base64})}/></div>
                <Button className={classes.buttonSubmit} varient="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                <Button  varient="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>

            </form>

        </Paper>
    );
};

export default Form;
