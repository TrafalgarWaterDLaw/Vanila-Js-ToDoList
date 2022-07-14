import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';

//Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';

interface TodoItemProps {
	// title: string;
	// date: string;
	text: string;
	onDelete: () => void;
	// onFavorite: () => void;
	// onComplete: () => void;
	// onImportant: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
	text,onDelete
}) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: orange[500] }} aria-label={'title'}>
						Do
					</Avatar>
				}
				title={'title'}
				subheader={'date'}
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					{text}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon />
				</IconButton>

				<IconButton aria-label='completed' >
					<DoneOutlineIcon />
				</IconButton>

				<IconButton aria-label='important'>
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
