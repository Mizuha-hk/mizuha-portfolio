import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Divider, FluentProvider, webLightTheme } from "@fluentui/react-components"
import Header from "./components/header";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

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
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Divider />
      <RouterProvider router={router} />
    </FluentProvider>  
  )
}

export default App
