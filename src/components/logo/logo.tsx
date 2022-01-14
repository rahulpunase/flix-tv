import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
/**
 * In pixels
 */
export interface ILogo {
	height: number;
	width: number;
}

const Logo = (props: ILogo) => {
	return (
		<div className="logo-component">
			<NavLink to={'home'}><img width={props.width} height={props.height} src={logo} alt=""/></NavLink>
		</div>
	);
};

export {Logo};
