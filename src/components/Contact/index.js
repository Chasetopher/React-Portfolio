import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Card ,CardContent, Grid, Button } from '@mui/material'


const Contact = () => {

    return (
        <div>
            <Typography gutterBottom variant="h2" align="center">
                Contact
            </Typography>
            <Card style={{ maxWidth: 650, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Name"
                                    defaultValue="Enter Name"
                                    fullWidth
                                    color="text"
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    required
                                    type="email"
                                    id="outlined-basic"
                                    label="Email Adress"
                                    defaultValue="Enter Email Adress"
                                    fullWidth
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Message"
                                    multiline
                                    rows={8}
                                    defaultValue="Enter Message"
                                    fullWidth
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="secondary" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact;


{/* <Box
component="form"
sx={{
    '& .MuiTextField-root': { m: 1, width: '75ch' },
    // bgcolor: 'background.paper'
}}
noValidate
autoComplete="off"
>
<div>
<TextField label="Outlined secondary" color="text" focused />
<TextField
    required
    id="filled-required"
    label="Enter Name"
    defaultValue="Enter Name"
    variant="filled"
/>
<TextField
    required
    id="filled-required"
    label="Email Adress"
    defaultValue="Enter Email Adress"
    variant="filled"
/>
<TextField
    id="outlined-multiline-static"
    label="Message"
    multiline
    rows={8}
    defaultValue="Message"
    variant="filled"
/>
</div>
</Box> */}