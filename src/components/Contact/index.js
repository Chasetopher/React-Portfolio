import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Enter Name"
            />
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Enter Email Adress"
            />
            <TextField
                id="outlined-multiline-static"
                label="Required"
                multiline
                rows={8}
                defaultValue="Message"
            />
        </div>
        </Box>
    )
}

export default Contact;
