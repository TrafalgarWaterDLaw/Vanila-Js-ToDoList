import Todo from '../modals/todo';

import { useRouter } from 'next/router';
import Link from 'next/link';

import React, { useState, useContext } from 'react';
import { TodosContxet } from '../store/todos.context';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { orange } from '@mui/material/colors';

import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: '1px solid #000',
	justifyContent: 'space-around',
	boxShadow: 24,
	p: 4,
};

const NewTodo = () => {
	const todoCtx = useContext(TodosContxet);

	const [open, setOpen] = useState(true);
	//const [value, setValue] = useState<Date | null>(new Date());

	const [title, setTitle] = useState('');
	const [titleError, setTitleError] = useState(false);

	const [task, setTask] = useState('');
	const [taskError, setTaskError] = useState(false);

	const [date, setDate] = useState<Date | null>(new Date());

	const [time, setTime] = useState<Date | null>(new Date());

	const router = useRouter();

	const handleClick = () => {
		router.replace('/');
		setOpen(!open);
	};

	//remove error message when user starts typing

	const submitHandler = (event: any) => {
		event.preventDefault();

		//Error handling
		if (title.length === 0) setTitleError(true);

		if (task.length === 0) setTaskError(true);

		if (title.length > 0 && task.length > 0 && date !== null && time !== null) {
			handleClick();

			const inputDate = `${date.getDate().toString()} ${
				(date.toLocaleString('default', { month: 'long' }))
				} ${date.getFullYear().toString()}`;
			
			const inputTime = `${time.getHours().toString()}:${time.getMinutes().toString()}`;

			todoCtx.addTodo(task, inputDate, time.toString(), title);
		}

	};

	return (
		<>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClick}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
				sx={{
					boxShadow: 1,
					color: 'primary.main',
					m: 1,
					p: {
						xs: 1,
					},
				}}
			>
				<Fade in={open}>
					<Card
						component='form'
						sx={{
							...style,
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete='off'
					>
						<CardHeader
							avatar={
								<Avatar sx={{ bgcolor: orange[500] }} aria-label='Doodle'>
									D
								</Avatar>
							}
							title='To-Doodle'
							subheader={`${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`}
						/>
						<CardContent>
							<Box
								component='div'
								sx={{
									'& > :not(style)': { m: 1, width: '30ch', mb: '2rem' },
								}}
							>
								{titleError ? (
									<TextField
										error
										id='standard-error-helper-text'
										label='Error'
										defaultValue='Hello World'
										helperText='Title required.'
										variant='standard'
										onChange={(event) => setTitle(event.target.value)}
									/>
								) : (
									<TextField
										id='standard-basic'
										label='Title'
										variant='standard'
										onChange={(event) => setTitle(event.target.value)}
									/>
								)}
								{taskError ? (
									<TextField
										error
										id='standard-error-helper-text'
										label='Error'
										helperText='Empty entry.'
										multiline
										rows={4}
										variant='standard'
										onChange={(event) => setTask(event.target.value)}
									/>
								) : (
									<TextField
										id='margin-dense'
										margin='normal'
										label='Task'
										multiline
										rows={4}
										variant='standard'
										onChange={(event) => setTask(event.target.value)}
									/>
								)}
							</Box>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<Stack spacing={3}>
									<DatePicker
										disablePast
										label='Date'
										openTo='year'
										views={['year', 'month', 'day']}
										value={date}
										onChange={(newValue) => {
											setDate(newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
									<TimePicker
										label='Time'
										value={time}
										onChange={(newValue) => {
											setTime(newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
								</Stack>
							</LocalizationProvider>
						</CardContent>

						<CardActions>
							<IconButton aria-label='add to favorites' color='primary'>
								<FavoriteIcon sx={{ fontSize: 30 }} />
							</IconButton>

							<IconButton aria-label='important' color='primary'>
								<LabelImportantTwoToneIcon sx={{ fontSize: 30 }} />
							</IconButton>

							<IconButton
								aria-label='delete'
								color='default'
								onClick={handleClick}
							>
								<DeleteSweepRoundedIcon sx={{ fontSize: 30 }} />
							</IconButton>

							<Link href='/'>
								<IconButton aria-label='add' onClick={submitHandler}>
									<AddCircleIcon sx={{ fontSize: 30 }} />
								</IconButton>
							</Link>
						</CardActions>
					</Card>
				</Fade>
			</Modal>
		</>
	);
};

export default NewTodo;
