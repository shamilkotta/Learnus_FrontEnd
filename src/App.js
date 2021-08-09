import React, { useEffect, useState, createContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import useWindowResize from './hooks/useWindowResize';
import { useScrollToTopOnRoute } from './hooks/useScrollToTop';
import './App.scss';

import ScrollToTop from './components/ScrollToTop';
import MobileNavbar from './components/Menu/MobileNavbar';
import Navbar from './components/Menu/Navbar';

import GuestLayout from './layouts/GuestLayout';
import UserLayout from './layouts/UserLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

export const MenubarToggler = createContext()

function App() {

	const [isPopUp, setIsPopUp] = useState(false)
	const { search } = useLocation()
	useEffect(() => {
		if (search) {
			const queryValue = new URLSearchParams(search).get('popup')
			queryValue === 'logIn' ? setIsPopUp(true) : setIsPopUp(false)
		} else { setIsPopUp(false) }
	}, [search])
	
	const [isMobileNav, setIsMobileNav] = useState(false)
	const toggleNavbar = () => { setIsMobileNav(!isMobileNav) }
	const matchMediaNavbar = useWindowResize('max-width: 768px')
	
	const [isSidebar, setIsSidebar] = useState(true)
    const toggleSidebar= ()=> { setIsSidebar(!isSidebar) }
	
	useScrollToTopOnRoute()

	return (
		<div>
			{isPopUp && <AuthLayout />}
			{matchMediaNavbar && <MobileNavbar toggleNavbar={toggleNavbar} style={isMobileNav ? { top: 0 } : { top: '-100%' }} />}
			<Navbar toggleNavbar={toggleNavbar} toggleSidebar={toggleSidebar} />
			<MenubarToggler.Provider value={ [isSidebar, setIsSidebar] } >
				<Switch>
					<Route path='/user' component={UserLayout} />
					<Route path='/admin' component={AdminLayout} />
					<Route path='/' component={GuestLayout} />
				</Switch>
			</MenubarToggler.Provider>
			<ScrollToTop />
		</div>
	);
}

export default App;
