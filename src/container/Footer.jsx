// import React from 'react'

function Footer() {
    return (
        <div>

            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">Centa</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Privacy


                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Terms</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Feedback</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Support</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}

export default Footer
