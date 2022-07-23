import React from 'react'
import Header from '../components/Header'
import { ThemeProvider } from '../config/ThemContext'

function about() {
    return (
        <>
            <ThemeProvider>
                <Header />

                <main>
                    <title>About Me</title>
                    <h1>About Me page</h1>
                    <p>
                        Hi My name is Mohamed the creator of this web site
                    </p>
                </main>
            </ThemeProvider>
        </>
    )
}

export default about