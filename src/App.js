import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';

import Header from './components/Header';
import Results from './components/Results';

import theme from './theme';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTopics: [],
		};
	}

	setTopics = (currentTopics) => {
		this.setState({
			currentTopics: currentTopics || [],
		});
	}

	toggleTopic = (topic) => {
		const { currentTopics } = this.state;
		const nextState = currentTopics.includes(topic)
			? currentTopics.filter(item => item !== topic)
			: currentTopics.concat(topic);
		this.setState({
			currentTopics: nextState,
		});
	}

	render() {
		return (
			<section className="container">
				<ReactiveBase
					app="asfas"
					credentials="pYkzCEJSR:bebd7486-1dae-4efb-b419-00d0d7472885"
					type="case_study"
					theme={theme}
				>
					<div className="flex row-reverse app-container">
						<Header currentTopics={this.state.currentTopics} setTopics={this.setTopics} />
						<div className="results-container">
							<DataSearch
								componentId="repo"
								filterLabel="Search"
								dataField={['Case_study', 'Description', 'Case_study.raw', 'Type']}
								placeholder="Search EDDIE"
								iconPosition="left"
								autosuggest={false}
								URLParams
								className="data-search-container results-container"
								innerClass={{
									input: 'search-input',
								}}
							/>
							<Results currentTopics={this.state.currentTopics} toggleTopic={this.toggleTopic} />
						</div>
					</div>
				</ReactiveBase>
			</section>
		);
	}
}

export default App;
