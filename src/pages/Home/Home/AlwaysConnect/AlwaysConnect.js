import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import bg from '../../../../images/appointment-bg.png'
import Button from '@mui/material/Button';
import { Container, Grid, Typography } from '@mui/material';


const appointmentBanner = {
    background: `url(${ bg })`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AlwaysConnect = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container

            >
                <Grid
                    sm={12}
                    md={12}>
                    <Typography variant="h6" sx={{ my: 5, py: 5 }} style={{ color: '#6ACECE' }}>
                        CONTACT US
                    </Typography>
                    <from>

                        <TextField sx={{ bgcolor: 'white', width: ' 75%', my: 3, borderRadius: 1 }}
                            placeholder="Email Address*"

                        />

                        <br />
                        <TextField sx={{ bgcolor: 'white', width: ' 75%', my: 3, borderRadius: 1 }} id="outlined-basic"
                            placeholder="Subject"

                        />
                        <br />

                        <TextField
                            sx={{ bgcolor: 'white', width: ' 75%', my: 3, borderRadius: 1 }}
                            placeholder="Your Message*"
                            multiline
                            rows={4}

                        />
                        <br />
                        <Button sx={{ width: 300, my: 3, borderRadius: 1 }} variant="contained">SUBMIT</Button>
                    </from>
                </Grid>

            </Container>


        </Box>
    );
};

export default AlwaysConnect;