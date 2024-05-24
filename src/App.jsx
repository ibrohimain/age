import React from 'react';
import { Provider } from 'react-redux';
import store from './page/reducpage/store';
import Ages from './page/reducpage/Ages';
import './App.css'

const App = () => (
  <div className='w-[100%] h-[100vh] mx-auto flex items-center justify-center'>
    <Provider store={store}>
      <Ages />
    </Provider>
  </div>
);

export default App;
