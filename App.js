import React from 'react';
import { Provider } from 'mobx-react';
import HomeScreen from './src/screens/homeScreen';
import Store from './src/stores/store';

const App = () => {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
