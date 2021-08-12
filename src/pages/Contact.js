import React, { useState } from 'react'
import { user } from '../App'
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

const names = [
    'Bird',
    'Cat',
    'Dog',
    'Fish',
    'Falcon',
    'Reptiles',
    'Small Animal',
    'Horse',
    'Farm Animals',
]

const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [selection, setSelection] = useState([])
    const [message, setMessage] = useState('')
    const [checked, setChecked] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    function handleChange(e) {
        setSelection(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        user.add({
            id: name,
            name: name,
            email: email,
            phone: parseInt(phoneNumber, 10),
            message: message,
            pet: selection,
            pet_parent: checked,
            pet_lover: isChecked
        }).then(
            alert('Your request has been submitted, we will be soon contacting you')
        ).catch(error => console.error(error))
        setName("")
        setEmail("")
        setPhoneNumber('')
        setSelection([])
        setChecked(false)
        setIsChecked(false)
    }

    function toggleCheck(e) {

        setChecked(e.target.checked)
        console.log(checked)
    }
    return (
        <div id="contact" className="contact">
            <h1
                className="contact__title">
                Contact Us
            </h1>
            <form
                className="contact__form" action="">
                <TextField
                    className={classes.input}
                    label="Full Name"
                    variant="outlined"
                    autoComplete="off"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <TextField
                    className={classes.input}
                    label="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                    variant="outlined"
                />
                <TextField
                    className={classes.input}
                    label="Mobile Number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    autoComplete="off"
                    variant="outlined"
                />
                <TextField
                    className={classes.input}
                    label="Message"
                    variant="outlined"
                    autoComplete="off"
                    value={message}
                    multiline
                    minRows={4}
                    onChange={e => setMessage(e.target.value)}
                    required
                />
                <FormControl className={classes.formControl1}>
                    <InputLabel>Select A Pet</InputLabel>
                    <Select
                        labelId="Select"
                        value={selection}
                        required
                        multiple
                        onChange={handleChange}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}

                        {/* <MenuItem value={'bird'}>Bird</MenuItem>
                        <MenuItem value={'cat'}>Cat</MenuItem>
                        <MenuItem value={'dog'}>Dog</MenuItem>
                        <MenuItem value={'fish'}>Fish</MenuItem>
                        <MenuItem value={'falcon'}>Falcon </MenuItem>
                        <MenuItem value={'reptiles'}>Reptiles </MenuItem>
                        <MenuItem value={'small animal'}>Small Animal </MenuItem>
                        <MenuItem value={'horse'}>Horse </MenuItem>
                        <MenuItem value={'farm animals'}>Farm Animals </MenuItem> */}

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
                <Button onClick={handleSubmit} className={classes.button} variant="contained">
                    Submit
                </Button>
            </form>
            <img src="/images/contact-img.svg" alt="" />
        </div>
    )
}

export default Contact
