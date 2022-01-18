import React, {useState} from 'react';
import './content-pagination.scss';

export interface IContentPagination {
	currentPage: number;
	pageChangeHandler: (pageNumber: number) => void
}

const ContentPagination = (props: IContentPagination) => {
	const [currentPage, setCurrentPage] = useState<number>(props.currentPage);
	const previousHandler = () => {
		const page = currentPage - 1;
		props.pageChangeHandler(page);
		setCurrentPage(page);
	}

	const nextHandler = () => {
		const page = currentPage + 1;
		props.pageChangeHandler(page);
		setCurrentPage(page);
	}
	return (
		<div className="content-pagination-component">
			<div className="pag-centre">
				<div className="pag-expander"></div>
				<div className="pag-actions">
					<button disabled={currentPage === 0} onClick={() => previousHandler()} className="pag-prev"><i className="fa fa-backward"/>
					</button>
					<div className="pag-val">{currentPage}</div>
					<button onClick={() => nextHandler()} className="pag-next"><i className="fa fa-forward"/></button>
				</div>
			</div>
		</div>
	);
};

export default ContentPagination;
