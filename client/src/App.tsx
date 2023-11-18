import React from "react"
import { Button, Divider, FluentProvider, Text, Title1, webLightTheme } from "@fluentui/react-components"
import Header from "./components/header";

function App() {

  const [count, setCount] = React.useState(0);

  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Divider />
      <Title1>Counter</Title1>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Text>{count}</Text>
    </FluentProvider>  
  )
}

export default App
