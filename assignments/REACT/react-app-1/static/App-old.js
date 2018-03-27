
const contentNode = document.getElementById('contents');
const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];const message = continents.map(c => `Hello ${c}!`).join(' ');
const component = React.createElement(
  'p',
  null,
  message
); // A simple JSX component ReactDOM.render(component, contentNode);  // Render the component inside the content Node