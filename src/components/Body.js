import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter} from "react-router-dom";




const Body = () => {
  //write hooks always on top
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

 
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
