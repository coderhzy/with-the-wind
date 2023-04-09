import React, { memo } from 'react'
import NavBar from '../NavBar'


interface IProps {
    children: React.ReactNode
}

const Header = memo(({ children }: IProps) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    )
})

export default Header
Header.displayName = 'Header'