import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Review from '../Review/Review.js';



// img
import people1 from '../../../../images/people-1.png';
import people2 from '../../../../images/people-2.png';
import people3 from '../../../../images/people-3.png';

const bars = [
    {
        name: 'winson Herry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ea quam! Quibusdam incidunt, ratione minus harum illo id totam tempora!',
        img: people1

    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ea quam! Quibusdam incidunt, ratione minus harum illo id totam tempora!',
        img: people2

    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ea quam! Quibusdam incidunt, ratione minus harum illo id totam tempora!',
        img: people3

    },
]

const Reviews = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>

                <Typography sx={{ fontWeight: 600, m: 5, }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {


                        bars.map(bar => <Review
                            key={bar.name}
                            bar={bar}
                        ></Review>)
                    }
                </Grid>

            </Container>
        </Box>
    );
};

export default Reviews;