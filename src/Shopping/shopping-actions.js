import * as actionTypes from './shopping-types';

export const addToCart = (id) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: id
		}
	}
}

export const removeToCart = (id) => {
	return {
		type: actionTypes.REMOVE_TO_CART,
		payload: {
			id: id
		}
	}
}

export const adjustQty = (id, newValue) => {
	return {
		type: actionTypes.ADJUST_QTY,
		payload: {
			id: id,
			qty: newValue,
		}
	}
}

export const resetStore = () => {
	return {
		type: actionTypes.RESET_STORE,
	}
}
