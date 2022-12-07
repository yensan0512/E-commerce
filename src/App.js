import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, createBrowserRouter,RouterProvider} from "react-router-dom";
import Checkout from './Checkout';

const router = createBrowserRouter([
  {
    path: "/checkout",
    element: (
      <>
        <Header/>
        <Checkout />
      </>
    ),
  },
  {
    path: "/",
    element: (
    <div>
      <Header/>
      <Home />
    </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
