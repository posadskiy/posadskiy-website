// Navigation utility for react-router-dom v7
// Stores navigate function from React Router
let navigateFunction = null;

export const setNavigate = (navigate) => {
	navigateFunction = navigate;
};

export const push = (url) => {
	if (navigateFunction) {
		navigateFunction(url);
	} else {
		// Fallback: use window.location if navigate not set yet
		window.location.href = url;
	}
};

export const goBack = () => {
	if (navigateFunction) {
		navigateFunction(-1);
	} else {
		window.history.back();
	}
};

export const getLocation = () => {
	return {
		pathname: window.location.pathname,
		search: window.location.search,
		hash: window.location.hash
	};
};

// For backward compatibility
export const history = {
	push: push,
	goBack: goBack,
	get location() {
		return getLocation();
	}
};
