/// <reference types="styled-jsx" />
/// <reference types="vite/client" />

import React from 'react'
import ReactDOM from 'react-dom/client'
import { IndexPage } from '.'
import { RedactedFont, MainFont } from './components/typography'

function Main() {
    return (
        <>
            <IndexPage />
            <RedactedFont />
            <MainFont />
        </>
    )
}

const rootElement = document.getElementById('root')

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>,
    )
}
