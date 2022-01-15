import React from 'react';
import {useSelector} from "react-redux";
import {IStore} from "../../redux/store/store";

export interface IBaseImage {
	src: string;
	imageSize: string;
}

const BaseImage = (props: IBaseImage) => {
	const store = useSelector((store: IStore) => store);
	const secure_base_url = store.appConfiguration.images.secure_base_url;
	return (
		<img src={`${secure_base_url}${props.imageSize}${props.src}`}
		     className={`base-image-component`}
		     alt=""/>
	);
};

export {BaseImage};
