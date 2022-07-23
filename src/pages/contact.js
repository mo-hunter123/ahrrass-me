import React from 'react'
import Header from '../components/Header'
import { ThemeProvider } from '../config/ThemContext'

function contact() {
    return (
        <>
            <ThemeProvider>
                <Header />

                <main>
                    <title>Contact Me</title>
                    <h1>Contact page</h1>
                    <p>
                        Hi My name is Mohamed the creator of this web site
                    </p>
                </main>
            </ThemeProvider>
        </>
    )
}

export default contact