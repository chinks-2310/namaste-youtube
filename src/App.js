import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/demo",
          element: (
            <>
              <Demo />
              <Demo2 />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
        {/**
         * Header
         * Body
         *    Sidebar
         *      MenuItems
         *    Main Container
         *      Buttons List
         *      Video Container
         *        Video Cards
         */}
      </div>
    </Provider>
  );
}

export default App;
