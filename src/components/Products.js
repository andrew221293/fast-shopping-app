import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	product: {
		marginBottom: '3rem',
		display:'flex',
		justifyContent:'center',
		alignItems: 'center'
	},
}));

const Products = ({products}) => {
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
			<Grid container>
				{
					products.map(product => (
						<Grid item xs={12} sm={6} className={classes.product}>
							<Product key={product.id} product={product}/>
						</Grid>
					))
				}
			</Grid>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.shop.products,
	}
}

export default connect(mapStateToProps)(Products);
