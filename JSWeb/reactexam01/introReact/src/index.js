
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

const rerender=ReactDOM.render;

ReactDOM.render(App(), document.getElementById('root'));
setInterval(()=>{ReactDOM.render(App(),document.getElementById('root'))}, 1000);

export default rerender;

