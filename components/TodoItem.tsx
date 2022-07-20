import Card from '@mui/material/Card';
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
	onFavorite: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
	title, time, date,text,onDelete, onFavorite,
}) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				title={title}
				subheader={`Completed by: ${date}. Time:${time}`}
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

				<IconButton aria-label='important' onClick={onFavorite}>
					<LabelImportantTwoToneIcon />
				</IconButton>

				
				<IconButton aria-label='delete' onClick={onDelete}>
					<DeleteSweepRoundedIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default TodoItem;
