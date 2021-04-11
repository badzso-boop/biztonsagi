import Cikkek from './pages/Cikkek';
import CikkAdd from './components/cikkAdd';
import Forum from './pages/Forum';
import AdminPage from './pages/Adminpage';
import LoginPage from './pages/LoginPage';
import Sugo from './pages/Sugo';
import Letoltesek from './pages/Letoltesek';

import { Route, Switch } from 'react-router-dom';
import React from 'react';

var NAGY_USER_ADAT = [];

class App extends React.Component {
	constructor(props) {
	super(props);
	}

  render() {
    return (
      <Switch>
        <Route path='/log'>
          <LoginPage />
        </Route>
        <Route path='/cikk'>
          <Cikkek onBelepes={NAGY_USER_ADAT}/>
        </Route>
        <Route path='/cikkadd'>
          <CikkAdd className="mb-5" onBelepes={NAGY_USER_ADAT}/>
        </Route>
        <Route path='/forum'>
          <Forum user={this.props.adatok} onBelepes={NAGY_USER_ADAT}/>
        </Route>
        <Route path='/admin'>
          <AdminPage onBelepes={NAGY_USER_ADAT}/>
        </Route>
        <Route path='/help'>
          <Sugo />
        </Route>
        <Route path='/download'>
          <Letoltesek />
        </Route>
      </Switch>
    );
  }
}

export default App;
