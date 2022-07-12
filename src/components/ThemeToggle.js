import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import React, { useContext } from 'react'
import changeMode from '../config/spaghetti'
import { ThemeContext } from '../config/ThemContext'




function ThemeToggle() {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <button>


                {theme === 'dark' ? (
                    <SunIcon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer h-6 w-6"
                    />
                ) : (
                    <MoonIcon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer h-6 w-6"
                    />
                )}
            </button>
        </div>

    )
}

export default ThemeToggle