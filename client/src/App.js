import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import User from './Component/getUser/User';
import Add from './Component/addUser/Add';
import Edit from './Component/updateUser/Edit';

function App() {

  const route=createBrowserRouter([
    {
      path:"/",
      element:<User></User>
    },
    {
      path:"/add",
      element:<Add></Add>
    },
    {
      path:"/edit/:id",
      element:<Edit></Edit>
    },
  ])
  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
