import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography, Box } from '@mui/material';



const bannerBg = {
    background: `url(${ bg })`,

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile
                            <br />
                            Starts Here
                        </Typography>

                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod ipsum quos libero cumque ab repudiandae, ad dolorum dolor eum?
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Box>

                </Grid>

                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;