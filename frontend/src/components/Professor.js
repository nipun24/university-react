import React from 'react';
import { Card,CardContent,Grid,Typography } from '@material-ui/core';

const Professor = () => {
  return (
    <div>
        <Grid container spacing={40} alignItems="center" justify="center" style={{marginTop: "48px"}}>
            <Grid item sm={6} md={4} lg={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h3">
                            courses
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h3">
                            marks
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h3">
                            attendance
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}

export default Professor;