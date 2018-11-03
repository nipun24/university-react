import React from 'react';
import { Grid,Paper,Typography, Card, CssBaseline } from '@material-ui/core';

const Student = ({theme}) => {

    const student = {
        course: "btech",
        name: "xyz",
        dept: "abc",   
    }

    return(
        <div>
            {/* <CssBaseline/> */}
            <Grid container justify="center" alignItems="center" style={{marginTop: "64px"}} spacing={40}>
                <Grid item sm={6} md={4} lg={3} xs={12}>
                    <Paper>
                        <Typography>
                            {student.course}
                        </Typography>
                        <Typography>
                            {student.dept}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item sm={6} md={4} lg={3} xs={12}>
                    <Card>
                        <Typography>
                            Marks
                        </Typography>
                    </Card>
                </Grid>
                <Grid item sm={6} md={4} lg={3} xs={12}>
                    <Card>
                        <Typography>
                            Attendance
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Student;