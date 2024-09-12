import { Button } from '@headlessui/react'
import { Grid, Typography,Link } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10 "
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blogs</Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Parteners</Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Soolution</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Analytic</Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Comments</Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Insights</Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Support</Button>

                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Documentation</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>API Stats</Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Claims</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>

                    </div>
                </Grid>
            
                <Grid className='pt-20' container 
                justifyContent="center" 
                alignItems="center"  item sx={{minHeight: '10vh'}} >
                    <Typography variant='body2' component="p" align='center'>
                        &copy; 2023 My Company.All right reserve.
                    </Typography>

                    <Typography variant='body2' component="p" align='center'>
                        Made with love by me
                    </Typography>

                    <Typography variant='body2' component="p" align='center'>
                        Icons made by{''}
                        <Link href="https://www.freepik.com/" color='inherit' underline='always'>
                            Freepik
                        </Link>{''}
                        from{''}
                        <Link href="https://www.flaticon.com/" color='inherit' underline='always'>
                            Flaticon
                        </Link>
                    </Typography>
                </Grid>

            </Grid>

        </div>
    )
}

export default Footer