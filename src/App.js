import './App.scss';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import lightImg from './assets/bg.jpg';
import darkImg from './assets/black-bg.jpg';
import { useContext } from 'react';
import { DarkLightTheme } from './contexts/ThemeContext';
function App() {

  //this context api for get the dark mode true or false.
  const { isDarkMode } = useContext(DarkLightTheme);
  console.log(isDarkMode);
  return (
    <div id='mainApp' style={{ background: `url('${isDarkMode ? darkImg : lightImg}') no-repeat center center fixed` }}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />

      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
