
const contentNode = document.getElementById('contents');

class IssueList extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'This is a placeholder for the issue list.'
			)
		);
	}
}

ReactDOM.render(React.createElement(IssueList, null), contentNode);