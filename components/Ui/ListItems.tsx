import { useContext } from 'react';
import { TodosContxet } from '../../store/todos.context';

//  nextjs imports
import Link from 'next/link';

// MUI Imports
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

// MUI Icons
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const Theme: React.FC = () => {
	const todoCtx = useContext(TodosContxet)
	
	return (
		<ListItemButton onClick={() => {
			todoCtx.changeTheme()
		}}>
			<ListItemIcon>
				{todoCtx.lightTheme ? <DarkModeIcon /> : <LightModeIcon/>}
			</ListItemIcon>
			<ListItemText primary='Theme' />
		</ListItemButton>
	)
}

export const mainListItems = (
	<>
		<Link href='./'>
			<ListItemButton>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary='Home' />
			</ListItemButton>
		</Link>

		<Link href='./doodles'>
			<ListItemButton>
				<ListItemIcon>
					<AddCircleIcon />
				</ListItemIcon>
				<ListItemText primary='Doodle' />
			</ListItemButton>
		</Link>

		<Link href='./important'>
			<ListItemButton>
				<ListItemIcon>
					<LabelImportantTwoToneIcon />
				</ListItemIcon>
				<ListItemText primary='Important' />
			</ListItemButton>
		</Link>

		<Theme/>
	</>
);

export const secondaryListItems = (
	<>
		<ListSubheader component='div' inset>
			App info
		</ListSubheader>

		<ListItemButton>
			<ListItemIcon>
				<AccountCircleRoundedIcon />
			</ListItemIcon>
			<ListItemText primary='About us' />
		</ListItemButton>
	</>
);
