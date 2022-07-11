import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const mainListItems = (
	<React.Fragment>
		<ListItemButton>
			<ListItemIcon>
				<AddCircleIcon />
			</ListItemIcon>
			<ListItemText primary='Doodle' />
		</ListItemButton>

		<ListItemButton>
			<ListItemIcon>
				<DoneOutlineIcon />
			</ListItemIcon>
			<ListItemText primary='Completed' />
		</ListItemButton>

		<ListItemButton>
			<ListItemIcon>
				<LabelImportantTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary='Important' />
		</ListItemButton>

		<ListItemButton>
			<ListItemIcon>
				<DeleteSweepRoundedIcon />
			</ListItemIcon>
			<ListItemText primary='Trash' />
        </ListItemButton>
        
        <ListItemButton>
			<ListItemIcon>
				<LightModeIcon />
			</ListItemIcon>
			<ListItemText primary='Theme' />
		</ListItemButton>

	</React.Fragment>
);

export const secondaryListItems = (
	<React.Fragment>
		
        <ListSubheader component='div' inset>
			App info
        </ListSubheader>
        
		<ListItemButton>
			<ListItemIcon>
				<AccountCircleRoundedIcon />
			</ListItemIcon>
			<ListItemText primary='About us' />
		</ListItemButton>
        
	</React.Fragment>
);
