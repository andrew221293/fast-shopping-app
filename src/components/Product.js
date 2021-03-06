import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import {connect} from 'react-redux';
import {addToCart} from '../Shopping/shopping-actions';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		width: 400,
	},
	action: {
		marginTop: '1rem',
	},
	media: {
		height: 0,
		paddingTop: '56.25%'
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));

const Product = ({product: {id, name, category, price, image, description}, addToCart}) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	
	return (
		<Card className={classes.root}>
			<CardHeader
				action={
					<Typography
						className={classes.action}
						variant='h4'
						color='textSecondary'>
						{`$${price}.00`}
					</Typography>
				}
				title={name}
				subheader="In Stock"
			/>
			<CardMedia
				className={classes.media}
				image={image}
				title={name}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{category}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton onClick={() => addToCart(id)} aria-label={'Add to cart'}>
					<AddShoppingCart fontSize='large'/>
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography>{description}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}

const mapToDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => dispatch(addToCart(id))
	}
}

export default connect(null, mapToDispatchToProps)(Product);