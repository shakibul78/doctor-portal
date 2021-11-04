import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';
import { width } from '@mui/system';

const ExceptionalDental = () => {


    return (


        <Container sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    md={6}

                >
                    <img

                        style={{
                            width: 400,
                        }}
                        src={treatment} alt="" />
                </Grid>

                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    fustifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h4" sx={{ my: 5 }} >
                            Exceptional Dental
                            <br />
                            care, on Your Terms
                        </Typography>

                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: '#6ACECE', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi commodi provident porro. Dolore aspernatur fugit sint culpa temporibus adipisci.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus sed nisi, adipisci nulla sunt nostrum tempore temporibus dolor eum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero sit unde ducimus aperiam quam suscipit et temporibus fugiat ratione.
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExceptionalDental;