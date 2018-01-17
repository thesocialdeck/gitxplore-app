import React from 'react';
import PropTypes from 'prop-types';
import {
	MultiDropdownList,
	SingleDropdownRange,
	RangeSlider,
} from '@appbaseio/reactivesearch';

const SearchFilters = ({ currentTopics, setTopics, visible }) => (
	<div className={`flex column filters-container ${!visible ? 'hidden' : ''}`}>
		<div className="child m10">
			<MultiDropdownList
				componentId="category"
				dataField="Category.raw"
				placeholder="Select Category"
				title="Category"
				filterLabel="Category"
			/>
		</div>
		<div className="child m10">
			<MultiDropdownList
				componentId="topics"
				dataField="Type.raw"
				placeholder="Select type"
				title="Type"
				filterLabel="Type"
				size={1000}
				queryFormat="and"
				defaultSelected={currentTopics}
				onValueChange={setTopics}
			/>
		</div>

		<div className="child m10">
			<MultiDropdownList
				componentId="country"
				dataField="Country.raw"
				placeholder="Select country"
				title="Country"
				filterLabel="Country"
			/>
		</div>

	</div>
);

SearchFilters.propTypes = {
	currentTopics: PropTypes.arrayOf(PropTypes.string),
	setTopics: PropTypes.func,
	visible: PropTypes.bool,
};

export default SearchFilters;
