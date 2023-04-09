import React, { memo } from 'react'
import { useRecoilState } from 'recoil';
import navAtom from "@/store";
import Link from "next/link";

const NavBar = memo(() => {
    const [nav, setNav] = useRecoilState(navAtom);

    return (
        <div className='flex justify-center'>
            {
                nav.map((item,index) => {
                    return (
                      <div className='mx-[20px]' key={item.name}>
                          <Link href={item.path}>
                              {item.name}
                          </Link>
                      </div>
                    )
                })
            }
        </div>
    )
})

export default NavBar
NavBar.displayName = 'NavBar'