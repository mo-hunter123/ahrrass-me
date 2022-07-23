import * as React from "react"
import Figure from "../components/Figure"
import Header from "../components/Header"
import Technologies from "../components/Technologies"
import Welcome from "../components/Welcome"
import { ThemeProvider } from "../config/ThemContext"
import "../styles/index.css"

// markup
const IndexPage = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className="dark:bg-slate-800">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{padding: 46}}>
            <title>Home Page</title>

            {/* <h1 className="text-3xl font-bold underline">This is my portfolio</h1> */}
            {/* <Figure /> */}
            <Welcome />

            <Technologies /> 
          </main>
        </div>

      </ThemeProvider>
    </>

  )
}

export default IndexPage
