import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, CardContent, Grid, Button } from '@mui/material'

const Contact = () => {

    return (
        <Box sx={{ mt: 10 }}>
            <Typography gutterBottom variant="h1" component="h1" align="center" color="error">
                Contact
            </Typography>
            <Box style={{ maxWidth: 650, margin: "0 auto", padding: "20px 5px"}}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    required
                                    error
                                    id="outlined-error-helper-text"
                                    label="Name"
                                    fullWidth
                                    color="common"
                                    focused
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    required
                                    error
                                    type="email"
                                    id="outlined-error-helper-text"
                                    label="Email Adress"
                                    fullWidth
                                    color="common"
                                    focused
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    required
                                    error
                                    id="outlined-textarea"
                                    label="Message"
                                    multiline
                                    rows={8}
                                    fullWidth
                                    color="common"
                                    focused
                                />
                            </Grid>
                            <Grid sx={{ mt: 0.25 }} xs={12} item>
                                <Button type="submit" variant="contained" color="secondary" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Box>
        </Box>
    )
}

export default Contact;

