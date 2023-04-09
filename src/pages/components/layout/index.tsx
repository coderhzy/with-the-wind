import React, { memo } from 'react'
import Header from './Header'
import Footer from './Footer'

interface IProps {
    children: React.ReactNode
}

const Layout = memo(({ children }: IProps) => {
    return (
        <>
            <Header>
                Header
            </Header>
            {children}
            <Footer />
        </>
    )
})

export default Layout
Layout.displayName = 'Layout'