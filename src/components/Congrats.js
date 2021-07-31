import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import { resetStore } from '../Shopping/shopping-actions';
import {useHistory} from 'react-router';

const useStyles = makeStyles((theme) => ({
	containerThanks: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		height:'47rem',
	}
}));

const Congrats = ({resetStore}) => {
	const classes = useStyles();
	const history = useHistory();
	
	const handleCongrats = () => {
		resetStore();
		history.push('/');
	}
	
	return (
		<div className={classes.containerThanks}>
			<Typography variant="h3">{'Thanks for your purchase'}</Typography>
			<Typography variant="h6">{'We have created your order #YGBJ23AC. Your items will be soon at your door'}</Typography>
			<Button onClick={handleCongrats} variant="contained" color="primary"> Start Again</Button>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		resetStore: () => dispatch(resetStore())
	};
};

export default connect(null, mapDispatchToProps)(Congrats);