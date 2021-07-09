import './App.scss';
import { Switch, Route } from 'react-router-dom'

import GuestLayout from './layouts/GuestLayout'
import UserLayout from './layouts/UserLayout'
import AdminLayout from './layouts/AdminLayout'
import Authentication from './pages/Guest/Authentication'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/user' component={UserLayout} />
        <Route path='/admin' component={AdminLayout} />
        <Route exact path='/login' component={Authentication} />
        <Route path='/' component={GuestLayout} />
      </Switch>
    </div>
  );
}

export default App;
