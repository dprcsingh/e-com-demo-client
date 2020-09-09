import React, { useState, useEffect } from 'react';

const ViewPort = React.createContext();

const ViewPortProvider = (props) => {

	const [viewPort, setViewPort] = useState({ width: window.innerWidth, height: window.innerHeight, pageYOffset: window.pageYOffset });
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.addEventListener('resize', () => handleResize);
		}
	}, [])
	const handleResize = () => {
		const { innerWidth, innerHeight } = window;
		setViewPort({ width: innerWidth, height: innerHeight })
	}
	return <ViewPort.Provider value={viewPort}>
		{props.children}
	</ViewPort.Provider>

};

export { ViewPort, ViewPortProvider };