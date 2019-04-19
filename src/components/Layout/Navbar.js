import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
	const { auth } = props;

	console.log(auth)
	return (
		<div className="Navbar">
			<nav className="nav-wrapper grey darken-3">
				<div className="container">
					<Link to="/" className="brand-logo">
						Firebase React
					</Link>
					{auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
				</div>
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	};
};

export default connect(mapStateToProps)(Navbar);
