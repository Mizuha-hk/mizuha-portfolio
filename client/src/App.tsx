import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Divider, FluentProvider, webDarkTheme } from "@fluentui/react-components"
import Header from "./components/header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/not-found',
      element: <NotFound />
    }
  ])

  return (
    <FluentProvider theme={webDarkTheme}>
      <Header />
      <Divider />
      <RouterProvider router={router} />
    </FluentProvider>  
  )
}

export default App
