import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import theme from './Ui/theme';

import Link from 'next/link';
import { useEffect } from 'react';

const LandingPage: React.FC = () => {
	//FIXME:

	useEffect(() => {
		console.log('landing');
	});

	return (
		<>
			<Grid container component={'main'}>
				<CssBaseline>
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundRepeat: 'no-repeat',
							backgroundImage: 'url(https://source.unsplash.com/random)',
							backgroundColor: (t) =>
								t.palette.mode === 'light'
									? t.palette.grey[50]
									: t.palette.grey[900],
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '100vh',
						}}
					/>
					<Grid
						item
						xs={12}
						sm={8}
						md={5}
						component={Paper}
						elevation={6}
						square
					>
						<Box
							sx={{
								my: 8,
								mx: 4,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Avatar
								alt='Remy Sharp'
								src='https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
								sx={{
									width: 56, height: 56, marginBottom: 2,
								}}
								
							/>
							<Typography component='h1' variant='h5' fontWeight={500}>
								Tododoole
							</Typography>
							<Card
								sx={{
									maxWidth: 400,
									height: 450,
									marginTop: 2,
									borderRadius: '10px',
									boxShadow: 10,
										[theme.breakpoints.up('sm')]: {
											width: 600, height: 600, marginBottom: 2,
										},
								}}
							>
								<CardMedia
									component='img'
									height='200'
									image='https://images.unsplash.com/photo-1610397648930-477b8c7f0943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										Work seamlessly
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'
										sx={{
											marginBottom: 1,
										}}
									>
										Manage your team and everything with Tododoole
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										When you are overwhelmed by the amount of work you have on
										your plate? Stop and rethink.
									</Typography>
								</CardContent>
								<CardActions>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											pl: 1,
											pb: 1,
											width: '100%',
										}}
									>
										<Link href='./home'>
											<Button
												variant='contained'
												sx={{
													width: '70%',
													height: 43,
													borderRadius: '50px',
												}}
											>
												Lets Go
											</Button>
										</Link>
									</Box>
								</CardActions>
							</Card>
						</Box>
					</Grid>
				</CssBaseline>
			</Grid>
		</>
	);
};

export default LandingPage;
