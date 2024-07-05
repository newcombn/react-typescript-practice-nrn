import React, {Component} from 'react';

type MainProps = {
	username?: string;
	password?: string;
}

type MainState = {
	customers: any[]
}

class Main extends Component<MainProps, MainState> {
	constructor(props: MainProps) {
		super(props);
		this.state = {
			customers: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3030/customers')
			.then(data => {
				return data.json();
			})
			.then(resolvedData => {
				this.setState({customers: resolvedData})
			})
	};

	render() {

		return (
			<main>
				<h2>Customers List</h2>
				{
					this.state.customers.map((customer, i) => (
					<div key={i}>
						{customer.username}&nbsp;
						{customer.password}
					</div>))
				}

			</main>
		)
	}

}

export default Main;