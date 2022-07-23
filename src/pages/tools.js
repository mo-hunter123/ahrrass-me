import React from 'react'
import Header from '../components/Header'
import { ThemeProvider } from '../config/ThemContext'

function tools() {
    return (
        <>
            <ThemeProvider>
                <Header />

                <main>
                    <title>My tools</title>
                    <h1>Used tools</h1>
                    <p>
                        Hi My name is Mohamed the creator of this web site
                    </p>
                </main>
            </ThemeProvider>
        </>
    )
}

export default tools