// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Include the main Main Component
import MainRouter from './components/MainRouter';

// React-Foundation
import 'foundation-sites/dist/css/foundation.min.css';

// This code here allows us to render our main component (in this case Main)
ReactDOM.render(<MainRouter />, document.getElementById("app"));
