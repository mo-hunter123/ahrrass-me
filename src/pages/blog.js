import React from 'react'
import Header from '../components/Header'
import { ThemeProvider } from '../config/ThemContext'

function blog() {
    return (
        <>
            <ThemeProvider>
                <Header />

                <main>
                    <title>Blog page</title>
                    <h1>Blog page</h1>
                    <p>
                        Hi My name is Mohamed the creator of this web site
                    </p>
                </main>
            </ThemeProvider>
        </>
    )
}

export default blog