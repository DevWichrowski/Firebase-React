import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

export const Navbar = () => {
	return (
		<div className="Navbar">
			<nav className="nav-wrapper grey darken-3">
				<div className="container">
					<Link to="/" className="brand-logo">
						Firebase React
					</Link>
					<SignedInLinks />
                    <SignedOutLinks />
				</div>
			</nav>
		</div>
	);
};
