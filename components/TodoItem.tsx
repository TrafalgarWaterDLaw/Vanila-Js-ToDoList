import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

//Icons
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';

interface TodoItemProps {
	title: string;
	time: string;
	date: string;
	text: string;
	onDelete: () => void;
	onImportant: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
	title,
	time,
	date,
	text,
	onDelete,
	onImportant,
}) => {
	return (
		<Grid item md={6} sm={12}>
			<Card sx={{ width: 345 }}>
				<CardHeader
					title={title}
					subheader={`Completed on: ${date}. Time:${time}`}
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{text}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='completed' onClick={onDelete}>
						<DoneOutlineIcon />
					</IconButton>

					<IconButton aria-label='important' onClick={onImportant}>
						<LabelImportantTwoToneIcon />
					</IconButton>

					<IconButton aria-label='delete' onClick={onDelete}>
						<DeleteSweepRoundedIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
		
	);
};

export default TodoItem;
