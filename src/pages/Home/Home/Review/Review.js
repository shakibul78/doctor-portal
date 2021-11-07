import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';



const Review = (props) => {
    const { name, description, img } = props.bar;
    console.log(props)
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
                alignSelf: "center",

                p: 1,
            }}
        >
            <Typography sx={{ p: 2, boxShadow: 2 }}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>

                    <CardContent style={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                            image={img}
                            alt="green iguana"
                        />
                        <Typography>
                            <Typography variant="h5" component="div">
                                {name}
                            </Typography>

                            <Typography variant="h6" component="div">
                                California
                            </Typography>
                        </Typography>



                    </CardContent>

                </Card>

            </Typography>


        </Grid>


    );
};

export default Review;