import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />

      <RouterProvider router={routes}>

      </RouterProvider>
    </>
  );
}

export default App;
