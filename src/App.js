import { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import './App.scss';

import GuestLayout from './layouts/GuestLayout'
import UserLayout from './layouts/UserLayout'
import AdminLayout from './layouts/AdminLayout'
import Authentication from './components/Authentication';

function App() {

  const [isPopUp, setIsPopUp] = useState(false)
  const query = useLocation().search
  useEffect(() => {
    if (query) {
      const queryValue = new URLSearchParams(query).get('popup')
      queryValue === 'logIn' ? setIsPopUp(true) : setIsPopUp(false)
    } else {
      setIsPopUp(false)
    }

  }, [query])

  return (
    <div>
      {isPopUp && <Authentication/>}
      <Switch>
        <Route path='/user' component={UserLayout} />
        <Route path='/admin' component={AdminLayout} />
        <Route path='/' component={GuestLayout} />
      </Switch>
    </div>
  );
}

export default App;
