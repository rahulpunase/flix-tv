
export const Utils = {
	getGenreList: (stateList: any[], genreIds: Array<number>): string => {
		const stringList: Array<string> = [];
		genreIds.forEach(id => {
			const listItem = stateList.find(listItem => listItem.id === id);
			if (listItem) {
				stringList.push(listItem.name);
			}
		});
		return stringList.join(", ");
	},
	setPageNoToAPIString: (apiString: string, pageNo: number): string => {
		const arrayOfStr = apiString.split('&');
		const indexToRemove = arrayOfStr.findIndex(p => p.indexOf('page=') > -1);
		arrayOfStr.splice(indexToRemove);
		arrayOfStr.push(`page=${pageNo}`);
		return arrayOfStr.join('&');
	}
}
