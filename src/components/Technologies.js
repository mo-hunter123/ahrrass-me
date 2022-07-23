import { CodeIcon } from '@heroicons/react/outline'
import React from 'react'

const technologies = [
    'C++/C', 'JavaScript', 'PostgreSQL', 'NodeJS', 'NestJS', 'Web Development', 'Shell | Bash'
]

const Technologies = () => {
    return (
        <section className='pt-6'>
            <ul className='bg-slate-50 dark:bg-gray rounded p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6'>
                {technologies.map((techno) => (
                    <li>
                        <div className='hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm'>
                            <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                                <div>
                                    <dt className="sr-only">Title</dt>
                                    <dd className="group-hover:text-white font-semibold text-slate-900">
                                        <CodeIcon className="block h-6 w-6"  /> {techno}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </li>
                ))}

            </ul>
        </section>
    )
}

export default Technologies