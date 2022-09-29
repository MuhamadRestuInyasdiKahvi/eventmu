import React, { useState, useCallback } from 'react'

import Link from 'next/link'

export default function Header() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = useCallback(
        () => {
            setMenu(prev => !prev)
        },
        [setMenu],
    )

    return (
        <header className='max-w-full lg:max-w-7xl mx-auto px-4'>
            <div className='flex lg:justify-center lg:items-center justify-end'>
                <button onClick={toggleMenu} className={['w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50',
                    menu ? 'text-white fixed right-4' : 'relative text-inherit'].join(" ")}>
                    <span className='material-icons text-white'>{menu ? "close" : "menu"}</span>
                </button>
                <div className={['lg:flex w-auto lg:opacity-100 lg:visible z-20',
                    menu ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black'
                        : 'hidden opacity-0 h-0 invisible'].join(" ")}>
                    <ul className='flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0'>
                        <li className='group hover:scale-110 transform transition duration-300'>
                            <Link href='/'>
                                <a className='px-9 text-white group-hover:text-purple-1'>Beranda</a>
                            </Link>
                        </li>
                        <li className='group hover:scale-110 transform transition duration-300'>
                            <Link href='#event'>
                                <a className='px-9 text-white group-hover:text-purple-1'>Event</a>
                            </Link>
                        </li>
                        <li className='group hover:scale-110 transform transition duration-300'>
                            <Link href='#tentang'>
                                <a className='px-9 text-white group-hover:text-purple-1'>Tentang</a>
                            </Link>
                        </li>
                        <li className='group hover:scale-110 transform transition duration-300'>
                            <Link href='#kontak'>
                                <a className='px-9 text-white group-hover:text-purple-1'>Kontak</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
