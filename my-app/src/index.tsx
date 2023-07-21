import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './Redux/store'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const customTheme = extendTheme({
  components: {
    Menu: {
      baseStyle: {
        list: {
          bg: 'white', 
          color: 'black', 
        },
        item: {
          color: 'black',
          _hover: {
            bg: '#003d29',
            color:"white"
          },
          _focus: {
            bg: 'white',
          },
          bg:"white"
        },
      },
    },
  },
});
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
 </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
