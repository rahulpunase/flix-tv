import React, {useState} from 'react';
import './content-tab.scss'

export interface ITabOption {
	name: string;
	tabIconClass: string;
	tabApiPath: string;
	selected: boolean;
}

export interface IContentTab {
	tabOptions: Array<ITabOption>;
	getActiveTabFromContent: (activeTab: ITabOption) => void
}

const ContentTab = (props: IContentTab) => {
	const [tabOptionState, setTabOptionState] = useState(props.tabOptions);
	const setTabActive = (index: number) => {
		if (tabOptionState[index].selected) {
			return;
		}
		const newState = tabOptionState.map((tabOption, tabIndex) => {
			return {
				...tabOption,
				selected: tabIndex === index
			}
		});
		setTabOptionState(newState);
		const activeTab = newState.find(tab => tab.selected);
		if (activeTab) {
			props.getActiveTabFromContent(activeTab);
		}
	}
	return (
		<div className="content-tab-component">
			{
				tabOptionState.map((option, index) => (
					<div key={index} onClick={() => setTabActive(index)} className={`tab-item ${option.selected ? 'selected' : ''}`}>
						<div className="tab-icon"><i className={option.tabIconClass}/></div>
						<div className="tab-name">{option.name}</div>
					</div>
				))
			}
		</div>
	);
};

export default ContentTab;
