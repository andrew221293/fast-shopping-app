import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { removeToCart, adjustQty } from '../Shopping/shopping-actions';

const useStyles = makeStyles((theme) => ( {
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: 'inline',
	},
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
} ));

const ItemCart = ( {product: {id, name, category, price, image, description, qty}, addToCart, removeToCart, adjustQty }) => {
	const classes = useStyles();
	const [quantity, setQty] = useState(qty);
	const [open, setOpen] = useState(false);
	
	const handleChange = (event) => {
		setQty(event.target.value);
		adjustQty(id, event.target.value);
	};
	
	const handleClose = () => {
		setOpen(false);
	};
	
	const handleOpen = () => {
		setOpen(true);
	};
	
	return (
		<div className={ classes.root }>
			<ListItem alignItems="flex-start">
				<ListItemText
					primary={ name }
					secondary={
						<React.Fragment>
							{ category }
						</React.Fragment>
					}
				/>
				<ListItemText
					primary="Price"
					secondary={
						<React.Fragment>
							{ `$${ price }.00` }
						</React.Fragment>
					}
				/>
				<ListItemText
					primary="Qty"
					secondary={
						<React.Fragment>
							<FormControl className={ classes.formControl }>
								<Select
									labelId="demo-controlled-open-select-label"
									id="demo-controlled-open-select"
									open={ open }
									onClose={ handleClose }
									onOpen={ handleOpen }
									value={ quantity }
									onChange={ handleChange }
								>
									<MenuItem value={ 1 }>
										<em>1</em>
									</MenuItem>
									<MenuItem value={ 2 }>2</MenuItem>
									<MenuItem value={ 3 }>3</MenuItem>
									<MenuItem value={ 4 }>4</MenuItem>
								</Select>
							</FormControl>
							<IconButton onClick={ () => removeToCart(id) }>
								<DeleteIcon/>
							</IconButton>
						</React.Fragment>
					}
				/>
				<ListItemText
					primary=""
					secondary={
						<React.Fragment>
							{ `$${price * qty}.00` }
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li"/>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		removeToCart: (id) => dispatch(removeToCart(id)),
		adjustQty: (id, value) => dispatch(adjustQty(id, value))
	};
};

export default connect(null, mapDispatchToProps)(ItemCart);