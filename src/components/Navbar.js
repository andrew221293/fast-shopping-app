import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginBottom: '7rem',
	},
	appBar: {
		backgroundColor: 'whitesmoke',
		boxShadow: 'none',
	},
	grow: {
		flexGrow: 1,
	},
	button: {
		marginLeft: theme.spacing(2),
	},
}));

const Navbar = ({cart}) => {
	const [cartCount, setCartCount] = useState(0);
	const classes = useStyles();
	useEffect(()=>{
		let count = 0;
		cart.forEach(item => {
			count += item.qty
		});
		setCartCount(count);
	}, [cart, cartCount]);
	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Link to='/'>
						<Typography variant="h6" color='textPrimary' component='p'>
							Fast Shopping
						</Typography>
					</Link>
					<div className={classes.grow}/>
					<div className={classes.button}>
						<Link to='/cart' aria-label={'Show cart items'} color='inherit'>
							<Badge badgeContent={cartCount} color='secondary'>
								<ShoppingCart  fontSize='large' color='primary'/>
							</Badge>
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Navbar);