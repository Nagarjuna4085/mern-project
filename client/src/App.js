import React from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.png'
import useStyles from './styles';
const App = () =>{
    const classes= useStyles();
return(
    <container maxidth="lg" >
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <Typography className={classes.heading} varient="h1" align="center" > Memories</Typography>
            <img className={classes.image} src={memories} alt="memories"  height="60" />
        </AppBar>
        <Grow in >
            <containe>
                <Grid container justify="space-between" alignItems='strech' spacing={3}>
                       <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}  >
                            <Form />
                        </Grid>
                </Grid>
            </containe>
         
        </Grow>

    </container>
);
}
export default App;