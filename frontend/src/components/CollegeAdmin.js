import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const getSteps = () => {
  return ['Personal Details', 'Registration Details','Review'];
}

const getStepContent = (step) => {
  switch (step) {
    case 0:
        return(
            <Typography color="default">
                Personal Details
            </Typography>
        );
    case 1:
        return(
            <Typography>
                Registration Details
            </Typography>
        );
    case 2:
        return(
            <Typography>
                Review
            </Typography>
        );
    default:
      return 'Unknown step';
  }
}

class CollegeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state={
            activeStep: 0,
        }
    }

    handleNext = () => {
        this.setState({ activeStep: this.state.activeStep + 1});
    };

    handleBack = () => {
        this.setState({activeStep: this.state.activeStep -1});
    };

    handleReset = () => {
        this.setState({
        activeStep: 0,
        });
    };

    render() {
        const steps = getSteps();
        const { activeStep } = this.state;
        return (
            <div>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        return (
                        <Step key={label} {...props}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {
                        (() => {
                            if(activeStep === steps.length){
                                return(
                                    <Button variant="contained" onClick={this.handleReset}>
                                        Reset
                                    </Button>
                                );
                            }
                            else{
                                return(
                                    <div>
                                        <Typography>{getStepContent(activeStep)}</Typography>
                                        <div>
                                            <Button
                                            variant="contained"
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}
                                            >
                                            Back
                                            </Button>
                                            <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                );
                            }
                        })()
                    }
                </div>
            </div>
        );
    }
}

export default CollegeAdmin;