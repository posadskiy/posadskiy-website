const getWidth = (responsiveMinWidth) => {
	const isSSR = typeof window === 'undefined';

	return isSSR ? responsiveMinWidth : window.innerWidth
};

export {
	getWidth,
}
