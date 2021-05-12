import Bugs from './components/Bugs';
import BugsList from './components/BugsList';
import configureStore from './store/configureStore';
// import StoreContext from './contexts/storeContext';
import { Provider } from 'react-redux';

import './App.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      {/* <Bugs/> */}
      <BugsList/>
    </Provider>
  );
}

export default App;
