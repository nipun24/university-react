import React, { Component } from 'react';
import { AppBar,Toolbar,Typography, Button } from '@material-ui/core';
import Student from './Student';
import Professor from './Professor';
import CollegeAdmin from './CollegeAdmin';

class Home extends Component {
    render(){
        return(
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            University
                        </Typography>
                        <Button>
                            LOGOUT
                        </Button>
                    </Toolbar>
                </AppBar>
                {/* <Student/> */}
                {/* <Professor/> */}
                <CollegeAdmin/>
            </div>
        );
    }
}

export default Home;