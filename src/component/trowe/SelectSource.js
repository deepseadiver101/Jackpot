import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Modal, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Button, ButtonGroup } from '@material-ui/core';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 45;
    const left = 45;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function SelectSource(props) {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const [source1, setSource1] = React.useState("db");
    const [source2, setSource2] = React.useState();

    const saveSources = (source1, source2) => {
        console.log(source1, source2)
        props.saveSources(source1, source2);
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Select Sources</h2>
            <FormControl component="fieldset">
                <FormLabel component="legend">Source 1</FormLabel>
                <RadioGroup row name="source1" onChange={(event) => {
                    setSource1(event.target.value)
                }}>
                    <FormControlLabel value="json" control={<Radio color="primary" />} label="JSON" />
                    <FormControlLabel value="db" control={<Radio color="primary" />} label="DB" />
                    <FormControlLabel value="xml" control={<Radio color="primary" />} label="XML" />
                    <FormControlLabel value="delimiter" control={<Radio color="primary" />} label="DELIMITER" />
                </RadioGroup>
                <FormLabel component="legend">Source 2</FormLabel>

                <RadioGroup row name="source2" onChange={(event) => { setSource2(event.target.value) }}>
                    <FormControlLabel value="json" control={<Radio color="primary" />} label="JSON" />
                    <FormControlLabel value="db" control={<Radio color="primary" />} label="DB" />
                    <FormControlLabel value="xml" control={<Radio color="primary" />} label="XML" />
                    <FormControlLabel value="delimiter" control={<Radio color="primary" />} label="DELIMITER" />
                </RadioGroup>
                <ButtonGroup style={{ padding: 2 }}>
                    <Button variant="contained" color="primary" onClick={()=>saveSources(source1,source2)}>Continue</Button>
                    <Button variant="contained" color="default" onClick={props.handleCancel}>Close</Button>
                </ButtonGroup>


            </FormControl>
        </div>
    );
    return (
        <div>

            <Modal
                open={true}
                onClose={props.handleCancel}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default SelectSource;