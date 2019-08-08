import React, {Component} from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext, Image, Text, DataTable, Meter, FormField, Anchor, RangeInput, Chart} from 'grommet';
import { FormClose, Notification, Facebook } from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';



const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='start'
        background='white'
        style={{ zIndex: '1' }}
        {...props}
    />

);


const theme = {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

class App extends Component {
    constructor() {
        super();
        this.state = { value: 0 };
    }
    render() {
        const { value } = this.state;
        return (

            <Grommet theme={hpe} full>
                <ResponsiveContext.Consumer>
                    {size => (
                        <Box fill>

                            <AppBar flex margin={{top:'5%'}} gap='30%'>
                                <Image
                                    style={{width:100,height:100}}
                                    src='https://www.hpe.com/etc/designs/hpeweb/logo.jpg'
                                />
                                <Heading level='3' color='#00b388' alignSelf='center' textAlign='center'>Predictive Maintenance - Predictive</Heading>
                                <Image
                                    style={{width:50,height:50}}
                                    src='https://media.licdn.com/dms/image/C4D0BAQEZ2_r-IM1lRw/company-logo_200_200/0?e=2159024400&v=beta&t=cbDc9rSI649EBVMWOgbddgWmR4yItafGXzOL_t2TmdM'
                                />
                            </AppBar>

                            <Box>
                                <Box flex margin={{horizontal:'2%',top:'15%'}}  style={{width:400}} pad='xlarge' border={{color:'red', size}} >

                                    <Box flex align='center' justify='center' >
                                        <Heading size="10px" textAlign='center'>Item with Highest Probability of Failure</Heading>
                                        <Text size="9px">(in the currently selected items)</Text>
                                        <br></br>
                                        <Text size="9px">Equipment ID:11</Text>
                                        <br></br>
                                        <Text size="9px">Predicted days to failure: 15</Text>
                                        <Text size="9px">Date of prediction: 23/11/2017</Text>
                                        <Text size="9px">Prediction valid until: 30/11/2017</Text>
                                    </Box>
                                </Box>

                                <Box margin={{horizontal:'70%'}}  style={{width:'30%',height:60}}>{/*si je change trop le height ça affecte le border rouge! */}
                                    <Box margin='none' flex align='center' justify='center' style={{width:'70%'}}>
                                        <Heading size="10px" textAlign='center'>Predictive Model Training Results</Heading>
                                        <Anchor href="www.hpe.com" primary label="View Confusion Matrix" />
                                        <br></br>
                                        <RangeInput/>
                                        <br></br>
                                        <DataTable style={{width:270,height:160}}
                                                   columns={[
                                                       {
                                                           property: 'name',
                                                           header: <Heading size="7px"></Heading>,

                                                       },
                                                       {
                                                           property: 'Predicted1',
                                                           header: <Heading size="10px">Predicted 1</Heading>,
                                                           primary: true,
                                                       },
                                                       {
                                                           property: 'Predicted0',
                                                           header: <Heading size="10px">Predicted 0</Heading>,
                                                       },
                                                   ]}
                                                   data={[
                                                       { name: 'Total', Predicted1: 41, Predicted0:1823},
                                                       { name: 'Actually 1', Predicted1: 39, Predicted0: 2 },
                                                       { name: 'Actually O', Predicted1: 2, Predicted0: 1821 },
                                                   ]}

                                        />

                                        <br></br>
                                        <br></br>

                                        <DataTable flex margin={{top:'60%'}}
                                            columns={[
                                                {
                                                    property: 'name',
                                                    header: <Text></Text>,
                                                    primary: true,
                                                },
                                                {
                                                    property: 'percent',
                                                    header: <Text></Text>,
                                                    render: datum => (
                                                        <Box resizable='true' pad={{ vertical: 'xsmall' }}>
                                                            <Meter
                                                                values={[{ value: datum.percent }]}
                                                                thickness="small"
                                                                size="small"
                                                            />
                                                        </Box>
                                                    ),
                                                },
                                            ]}
                                            data={[
                                                { name: 'Precision', percent: 95 },
                                                { name: 'Recall', percent: 95 },
                                                { name: 'F1-Score', percent: 95 },
                                                { name: 'Accuracy', percent: 100 },
                                            ]}
                                        />
                                    </Box>
                                </Box>

                                <Heading size="10px" margin={{horizontal:'10px'}}>Predicted Equipment Failure Status</Heading>
                                <br></br>

                                <DataTable style={{width:300,height:260}} margin={{horizontal:'10px'}}
                                           columns={[
                                               {

                                                   property: 'EquipmentID',
                                                   header: <Heading size="10px">Equipment ID</Heading>,
                                                   primary: true,
                                                   search: true,
                                                   resizeable: true,

                                               },
                                               {
                                                   property: 'FailureFlag',
                                                   header: <Heading size="10px">Failure Flag</Heading>,
                                                   resizeable: true,
                                               },
                                               {
                                                   property: 'ProbabilityOfFailure',
                                                   header: <Heading size="10px">Probability of Failure</Heading>,
                                                   resizeable: true,

                                               },
                                           ]}
                                           data={[
                                               {EquipmentID: 11, FailureFlag:0, ProbabilityOfFailure:0.94468},
                                               {EquipmentID: 99, FailureFlag:0, ProbabilityOfFailure:0.26226},
                                               {EquipmentID: 79, FailureFlag:0, ProbabilityOfFailure:0.94468},
                                               {EquipmentID: 72, FailureFlag:0, ProbabilityOfFailure:0.94468},
                                               {EquipmentID: 48, FailureFlag:0, ProbabilityOfFailure:0.94468},
                                               {EquipmentID: 67, FailureFlag:0, ProbabilityOfFailure:0.26226},
                                               {EquipmentID: 93, FailureFlag:0, ProbabilityOfFailure:0.94468},
                                               {EquipmentID: 87, FailureFlag:0, ProbabilityOfFailure:0.94468},
                                               {EquipmentID: 71, FailureFlag:0, ProbabilityOfFailure:0.94468},
                                               {EquipmentID: 47, FailureFlag:0, ProbabilityOfFailure:0.26226},
                                               {EquipmentID: 27, FailureFlag:0, ProbabilityOfFailure:0.94468},
                                           ]}
                                           sortable={true}
                                           resizeable={true}
                                />

                            </Box>
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
            </Grommet>
        );
    }
}

export default App;

