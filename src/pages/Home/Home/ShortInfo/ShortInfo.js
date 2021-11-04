import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { PhoneInTalk, Place, Schedule } from '@mui/icons-material'

const ShortInfo = () => {
    return (
        <Container>
            <Grid container spacing={2}>

                {/* ShortInfo-1  */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                        alignSelf: "center",

                        p: 1,
                    }}
                    style={{ height: "150px", bgcolor: 'text.disabled' }}
                >
                    <Typography
                        component="div"
                        sx={{
                            p: 2,
                            bgcolor: "text.disabled",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography >
                                <Schedule style={{ fontSize: 60, color: 'white' }}></Schedule>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography variant="h6">Opening Hours</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                        </Grid>
                    </Typography>
                </Grid>

                {/* ShortInfo-2  */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                        alignSelf: "center",

                        p: 1,
                    }}
                    style={{ height: "150px" }}
                >
                    <Typography
                        component="div"
                        sx={{
                            p: 2,
                            bgcolor: "text.secondary",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h2">
                                <Place style={{ fontSize: 60, color: 'white' }}></Place>
                                {/* <FontAwesomeIcon icon={faMapMarker} /> */}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography variant="h6">Visit our location</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Brooklyn, NY 10036, United States
                            </Typography>
                        </Grid>
                    </Typography>
                </Grid>

                {/* ShortInfo-3  */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                        alignSelf: "center",

                        p: 1,
                    }}
                    style={{ height: "150px" }}
                >
                    <Typography
                        component="div"
                        sx={{
                            p: 2,
                            bgcolor: "text.disabled",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h2">
                                <PhoneInTalk style={{ fontSize: 60, color: 'white' }}></PhoneInTalk>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography variant="h6">Contact us now</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                +000 123 456789
                            </Typography>
                        </Grid>
                    </Typography>
                </Grid>




            </Grid>
        </Container>
    );
};

export default ShortInfo;