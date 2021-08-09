import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    formControl1: {
        width: "100%"
    },
    formControl2: {
        display: "flex",
        flexDirection: "row",
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    input: {
        width: "100%",
        margin: '0 0 2rem 0'
    },
    button: {
        width: "100%",
        backgroundColor: '#ffc542',
        fontSize: '1.6rem',
        '&:hover': {
            backgroundColor: "#ffb542"
        }
    }
})

const Contact = () => {
    const classes = useStyles();
    const [selection, setSelection] = useState('')
    const [checked, setChecked] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    function handleChange(e) {
        setSelection(e.target.value)
    }

    function toggleCheck(e) {

        setChecked(e.target.checked)
        console.log(checked)
    }
    return (
        <div className="contact">
            <form className="contact__form" action="">
                <TextField
                    className={classes.input}
                    label="Full Name"
                    variant="outlined"
                    autoComplete="off"
                    required
                />
                <TextField
                    className={classes.input}
                    label="Email Address"
                    required
                    autoComplete="off"
                    variant="outlined"
                />
                <TextField
                    className={classes.input}
                    label="Mobile Number"
                    autoComplete="off"
                    variant="outlined"
                />
                <FormControl className={classes.formControl1}>
                    <InputLabel>Select A Pet</InputLabel>
                    <Select
                        labelId="Select"
                        value={selection}
                        required
                        onChange={handleChange}
                    >

                        <MenuItem value={'bird'}>Bird</MenuItem>
                        <MenuItem value={'cat'}>Cat</MenuItem>
                        <MenuItem value={'dog'}>Dog</MenuItem>
                        <MenuItem value={'fish'}>Fish</MenuItem>
                        <MenuItem value={'falcon'}>Falcon </MenuItem>
                        <MenuItem value={'reptiles'}>Reptiles </MenuItem>
                        <MenuItem value={'small animal'}>Small Animal </MenuItem>
                        <MenuItem value={'horse'}>Horse </MenuItem>
                        <MenuItem value={'farm animals'}>Farm Animals </MenuItem>

                    </Select>
                </FormControl>
                <FormControl className={classes.formControl2}>
                    <FormControlLabel
                        label="Pet Parent"
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={toggleCheck}
                                color="primary"
                            />
                        }
                    />
                    <FormControlLabel
                        label="Pet Lover"
                        control={
                            <Checkbox
                                checked={isChecked}
                                onChange={e => setIsChecked(e.target.checked)}
                                color="primary"
                            />
                        }
                    />
                </FormControl>
                <Button className={classes.button} variant="contained">
                    Submit
                </Button>
            </form>
            <img src="/images/contact-img.svg" alt="" />
        </div>
    )
}

export default Contact
