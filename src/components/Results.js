import React from 'react';
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';
const onResultStats = (results, time) => (
  <div className="flex justify-end">
    {results} results found in {time}ms
  </div>
);
const onData = (data) => (
	<div className="result-item" key={data.Case_study}>
		<div className="flex justify-center align-center result-card-header">
			<img className="avatar" src={data.Image} alt="User avatar" />
			<a className="link" href={data.Link} target="_blank" rel="noopener noreferrer">
				<div className="flex wrap">
					<div>{data.Case_study}</div>
				</div>
					</a>
					<div className="m10-0">{data.Description}</div>
					<div className="flex">
			<div><div className="btn card-btn"><i className="card-icon fas fa-tags" />{data.Category}</div></div>
			<div><div className="btn card-btn"><i className="card-icon fas fa-id-badge" />{data.Type}</div></div>
			<div><div className="btn card-btn"><i className="card-icon fas fa-globe" />{data.Country}</div></div>
		</div>

		</div>
	</div>
);
const Results = () => (
  <div className="result-list">
    <SelectedFilters className="m1" />
    <ReactiveList
      componentId="results"
      dataField="Case_study"
      onData={onData}
      onResultStats={onResultStats}
      react={{
        and: ['repo','category', 'topics', 'country'],
      }}
      pagination
      innerClass={{
        list: 'result-list-container',
        pagination: 'result-list-pagination',
        resultsInfo: 'result-list-info',
        poweredBy: 'powered-by',
      }}
      size={6}
    />
  </div>
);
export default Results;
