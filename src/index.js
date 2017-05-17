import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import KiraWrapper from './pages/KiraWrapper';
import KiraTab from './pages/KiraTab';
import { BrowserRouter, Route } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <BrowserRouter>
		<Route path="/" component={KiraWrapper}>
			<Route path="/component/:components" component={KiraTab}/>
		</Route>
     </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
