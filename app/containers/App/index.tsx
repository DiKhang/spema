import React, {type PropsWithChildren} from 'react';
import {LogBox} from 'react-native';
import {SheetProvider} from 'react-native-actions-sheet';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from '../../redux';
import Router from '../Router';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SheetProvider>
          <Router />
        </SheetProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
