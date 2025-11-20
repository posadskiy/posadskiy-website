import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setNavigate } from './History';

// Component to initialize navigation for History utility
export const NavigationProvider = ({ children }) => {
	const navigate = useNavigate();

	useEffect(() => {
		setNavigate(navigate);
	}, [navigate]);

	return <>{children}</>;
};

