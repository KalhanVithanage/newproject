import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import 'antd/dist/antd.css';
import "../src/assets/SCSS/index.scss";
import store, { persistor } from './redux/store';
import Routes from './routes';
function App() {
  return (
    <>
    <Provider store={store}> 
    
    <PersistGate loading={null} persistor={persistor} >
    <Routes/>
      </PersistGate>
    </Provider>
    
    </>
  );
}

export default App;
