// import React from 'react'

function Footer() {
    return (
        <div className="bg-[#e2e8f0]">

            <footer className=" rounded-lg shadow  bg-[#e2e8f0]">
                <div className="lg:w-full lg:mx-auto max-w-screen-xl flex justify-center p-4 md:flex md:items-center md:justify-between ">
                    <span className="text-sm text-gray-500 sm:text-center  ">© 2023 <a className="hover:underline">Centa</a>. All Rights Reserved.
                    </span>
                    <div className="justify-center">


                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 bg-[#e2e8f0] dark:text-gray-400 sm:mt-0">
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
                </div>
            </footer>

        </div>
    )
}

export default Footer
