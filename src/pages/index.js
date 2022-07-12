import * as React from "react"
import Figure from "../components/Figure"
import Header from "../components/Header"
import { ThemeProvider } from "../config/ThemContext"
import "../styles/index.css"

// markup
const IndexPage = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <main>
          <title>Home Page</title>

          {/* <h1 className="text-3xl font-bold underline">This is my portfolio</h1> */}
          {/* <Figure /> */}
        </main>
      </ThemeProvider>
    </>

  )
}

export default IndexPage
