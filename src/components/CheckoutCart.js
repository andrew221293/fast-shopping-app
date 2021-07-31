import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ItemCart from './ItemCart';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

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
	total: {
		marginTop: '4rem',
		display: 'flex',
		flexDirection: 'row-reverse',
		paddingRight: '2rem'
	},
	inputs: {
		paddingLeft: '2rem',
		display: 'flex',
		flexDirection: 'column',
		width: '30rem'
	},
	buttons: {
		paddingLeft: '2rem',
		marginTop: '4rem',
	},
	order: {
		marginRight: '2rem',
	}
} ));

const CheckoutCart = ({ cart }) => {
	const classes = useStyles();
	const history = useHistory();
	
	const [totalPrice, setTotalPrice] = useState(0);
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [completed, setCompleted] = useState(true);
	
	const handleName = (event) => {
		setName(event.target.value);
	};
	
	const handleId = (event) => {
		setId(event.target.value);
	};
	
	const handleAddress = (event) => {
		setAddress(event.target.value);
	};
	
	const handlePhone = (event) => {
		setPhone(event.target.value);
	};
	
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	
	useEffect(() => {
		let price = 0;
		cart.forEach(item => {
			price += item.qty * item.price;
		});
		
		if (name !== '' && id !== '' && address !== '' && email !== '') {
			setCompleted(false);
		}
		
		setTotalPrice(price);
	}, [cart, totalPrice, setTotalPrice, name, id, address, email, setCompleted]);
	
	return (
		<List className={ classes.root }>
			{
				cart.length === 0 ? (
					<Typography className={ classes.without }>
						{ 'You have not added products to the cart' }
					</Typography>
				) : (
					<div>
						{
							cart.map(item => (
								<div>
									<ItemCart key={ item.id } product={ item }/>
								</div>
							))
						}
						<Typography className={ classes.total }>{ `Total: $${ totalPrice }.00` }</Typography>
						<div className={classes.inputs}>
							<Typography>{'Customer Information'}</Typography>
							<FormControl>
								<InputLabel htmlFor="name">Full Name*</InputLabel>
								<Input id="name" value={name} onChange={handleName}/>
							</FormControl>
							<FormControl>
								<InputLabel htmlFor="id">ID*</InputLabel>
								<Input id="id" value={id} onChange={handleId}/>
							</FormControl>
							<FormControl>
								<InputLabel htmlFor="address">Address*</InputLabel>
								<Input id="address" value={address} onChange={handleAddress}/>
							</FormControl>
							<FormControl>
								<InputLabel htmlFor="phone">Phone Number</InputLabel>
								<Input id="phone" value={phone} onChange={handlePhone}/>
							</FormControl>
							<FormControl>
								<InputLabel htmlFor="email">Email*</InputLabel>
								<Input id="email" value={email} onChange={handleEmail}/>
							</FormControl>
						</div>
						<div className={classes.buttons}>
							<Button onClick={() => history.push('/congrats')} className={classes.order}
							        variant="contained" color="primary" disabled={completed}>
								Place Order
							</Button>
							<Link to='/'>
								Back to the list
							</Link>
						</div>
					</div>
				)
			}
		</List>
	);
};

const mapStateToProps = state => {
	return {
		cart: state.shop.cart
	};
};


export default connect(mapStateToProps)(CheckoutCart);