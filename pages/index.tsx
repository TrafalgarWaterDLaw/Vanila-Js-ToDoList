import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import LandingPage from '../components/LandingPage';
import Loading from '../components/Ui/Loading';

const Home: NextPage = () => {
	//FIXME:
	useEffect(() => {
		console.log('Component mounted');
	}, []);

	return <LandingPage />;
};

export default Home;
