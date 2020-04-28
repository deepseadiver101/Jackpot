import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css'

import Error404 from './component/errors/404error';
import tableView from './component/Abhinav/tableView';
import LoginPage from './component/Abhinav/loginPage';
import MainMenu from './component/Abhinav/mainMenu';
import EditJobLinks from './component/Abhinav/editJobLinks';
import uploadXMl from './component/Abhinav/uploadXMl';
import ComparisionTolerance from './component/Abhinav/comparisionTolerance';
import CustomTable from './component/customTable'
import SelectSource from './component/trowe/SelectSource';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/mainmenu" component={MainMenu} />
        <Route path="/scenarios" component={tableView} />
        <Route path="/transfer" component={EditJobLinks} />
        <Route path="/compare" component={CustomTable} />
        <Route path="/upload" component={uploadXMl} />
        <Route path="*" component={Error404} />
        }
      </Switch>
    </Router>

  );
}

export default (App);
