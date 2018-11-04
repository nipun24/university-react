import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { TextField, Button, Grid, Typography, Card, Dialog, DialogActions, DialogTitle, CircularProgress } from '@material-ui/core';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInPhoneNumber: '',
      signInPassword: '',
      route: 'signin',
      alert: false
    }
  }

  componentDidMount = () => {
    const token = sessionStorage.getItem('token');
    if(token !== null){
      this.setState({route: 'home'});
    }
  }

  handleAlertClose = () => {
    this.setState({alert: false})
  }

  onPhoneNumberChange = (event) => {
    this.setState({signInPhoneNumber: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSignIn = () => {
    this.setState({route: 'loading'});
    fetch('https://infinite-hamlet-28839.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        phoneNumber: this.state.signInPhoneNumber,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if(data === false){
          this.setState({alert: true});
          this.setState({route: "signin"})
        }
        else{
          sessionStorage.setItem('token', data.token);
          this.setState({route: "home"});
        }
      })
  }

  handlekeypress = (e) => {
    if(e.key === "Enter"){
      this.onSignIn();
    }

  }
  
  render() {
    switch(this.state.route){
        case 'loading':
            return(
                <Grid container justify="center" alignItems="center" style={{marginTop: "300px"}}>
                <CircularProgress style={{color: "#000000"}}/>
                </Grid>
            );
        case 'signin':
            return (
                <div style={{marginTop: '128px'}} onKeyPress={this.handlekeypress}>
                    <Grid container justify="center" alignItems="center">
                        <Card style={{padding: '50px'}} elevation={24}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Typography variant="h3">
                            Sign In
                            </Typography>
                            <TextField
                            type="text"
                            label="Enter Phone Number"
                            placeholder="Enter Phone Number"
                            margin="normal"
                            onChange={this.onPhoneNumberChange}
                            />
                            <TextField
                            type="password"
                            label="Enter Password"
                            placeholder="Enter Phone Number"
                            margin="normal"
                            onChange={this.onPasswordChange}
                            />
                            <Button variant="contained" color="primary" onClick={this.onSignIn} style={{marginTop: '20px'}}>
                              Sign In
                            </Button> 
                        </Grid>
                        </Card>
                    </Grid>
                    <Dialog
                        open={this.state.alert}
                        onClose={this.handleAlertClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle>{"Invalid Phone Number or Password"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleAlertClose} color="primary" autoFocus>
                          Close
                        </Button>
                    </DialogActions>
                    </Dialog>
                </div>
            ); 
        case 'home':
            return(
                <Redirect to='/'/>
            );
        default :
            return(
              <Redirect to='/signin'/>
            );
    }
  }
}

export default SignIn;