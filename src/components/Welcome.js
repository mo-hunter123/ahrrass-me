import { Disclosure, Tab } from '@headlessui/react'
import React from 'react'
import gitHubIcon from '../images/github.png'
import twitterIcon from '../images/twitter.png'
import linkedInIcon from '../images/linkedin.png'
import { Link } from 'gatsby'


const data = {
    'Heading': 'Hi My name is Mohamed AHRRASS!',
    'Desc': 'I am a software engineer, & Problems solver 👨‍💻.',
    'Resume': 'https://shorturl.at/fQ129'
}

const socialMedia = [
    { name: 'Github', icon: gitHubIcon, link: 'https://github.com/mo-hunter123' },
    { name: 'Linkedin', icon: linkedInIcon, link: 'https://www.linkedin.com/in/mohamed-ahrrass-1425a419a' },
    { name: 'Twitter', icon: twitterIcon, link: 'https://twitter.com/ahrrass_m' }
]


function Welcome() {
    return (
        <>
            <div>
                <div className='md:grid md:grid-cols-2 md:gap-6 dark:bg-slate-800'>
                    <div className='md:col-span-1'>
                        <div class="sm:text-center lg:text-left">

                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl ">
                                {data.Heading}
                            </h1>
                            <p className="mt-3 text-base text-gray-500 dark:text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {data.Desc}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href={data.Resume} target="_blank" rel="noreferrer">
                                        <button class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">View Resume</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 lg:right-0 sm:text-center">
                        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
                            <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
                                <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                                    <li>

                                        {
                                            socialMedia.map((social) => (
                                                <Link to={social.link} className="dark:fill-white block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "><img height={30} width={30} src={social.icon} /></Link>
                                               
                                            ))
                                        }

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Welcome