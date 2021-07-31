import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import {connect} from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	pagination: {
		'& > *': {
			marginTop: theme.spacing(2),
		},
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
	const [pageNumber, setPageNumber] = useState(0);
	const productsPerPage = 20;
	const pagesVisited = pageNumber * productsPerPage;
	const pageCount = Math.ceil(products.length / productsPerPage)
	
	const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage).map(product => {
			return (
				<Grid item xs={12} sm={6} className={classes.product}>
					<Product key={product.id} product={product}/>
				</Grid>
			);
	})
	
	const changePage = (e, page) => {
		console.log(page);
		setPageNumber(page)
	}
	
	return (
		<div className={classes.root}>
			<Grid container>
				{displayProducts}
			</Grid>
			{
			products.length >= 20 ? (
				<div className={classes.root}>
					<Pagination count={pageCount} color="primary" onChange={changePage}/>
				</div>
			): (<div></div>)
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.shop.products,
	}
}

export default connect(mapStateToProps)(Products);
