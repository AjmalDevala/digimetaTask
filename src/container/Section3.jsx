// import React from 'react'
import cal from '../../public/bookmark.svg';
function Section3() {
    return (
        <div className="p-20 bg-[#e2e8f0]">
            <h1 className="  ml-8 mt-6 text-2xl font-semibold">Related Courses</h1>
            <div className="flex lg:flex-row flex-col gap-5 p-8 ">
                <div className="max-w-sm w-[300px] rounded overflow-hidden shadow-lg hover:shadow-zinc-400 bg-white">
                    <img className="w-full" src="	https://mycenta-dev.netlify.app/images/course/course-javascript.jpg" alt="Card Image" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Card Title</div>
                        <p className="text-gray-700 text-base">Card description goes here.</p>
                    </div>

                    <div className="px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>
                    <div className=" border-t-2 p-3 w-full flex">
                        <img
                            className="w-8 rounded-full"
                            src="	https://mycenta-dev.netlify.app/images/avatar/avatar-1.jpg"
                            alt=""
                        />
                        <p className=" ml-2">Jenny Wilson</p>
                        <img  className='ml-20 text-end' src={cal} alt="" />
                    </div>
                </div>
                <div className="max-w-sm w-[300px] rounded overflow-hidden shadow-lg hover:shadow-zinc-400 bg-white">
                    <img className="w-full" src="	https://mycenta-dev.netlify.app/images/course/course-javascript.jpg" alt="Card Image" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Card Title</div>
                        <p className="text-gray-700 text-base">Card description goes here.</p>
                    </div>

                    <div className="px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>
                    <div className=" border-t-2 p-3 w-full flex">
                        <img
                            className="w-8 rounded-full"
                            src="	https://mycenta-dev.netlify.app/images/avatar/avatar-1.jpg"
                            alt=""
                        />
                        <p className=" ml-2">Jenny Wilson</p>
                        <img  className='ml-20 text-end' src={cal} alt="" />
                    </div>
                </div>
                <div className="max-w-sm w-[300px] rounded overflow-hidden shadow-lg hover:shadow-zinc-400 bg-white">
                    <img className="w-full" src="	https://mycenta-dev.netlify.app/images/course/course-javascript.jpg" alt="Card Image" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Card Title</div>
                        <p className="text-gray-700 text-base">Card description goes here.</p>
                    </div>

                    <div className="px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>
                    <div className=" border-t-2 p-3 w-full flex">
                        <img
                            className="w-8 rounded-full"
                            src="	https://mycenta-dev.netlify.app/images/avatar/avatar-1.jpg"
                            alt=""
                        />
                        <p className=" ml-2">Jenny Wilson</p>
                        <img  className='ml-20 text-end' src={cal} alt="" />
                    </div>
                </div>
                <div className="max-w-sm w-[300px] rounded overflow-hidden shadow-lg hover:shadow-zinc-400 bg-white">
                    <img className="w-full" src="	https://mycenta-dev.netlify.app/images/course/course-javascript.jpg" alt="Card Image" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Card Title</div>
                        <p className="text-gray-700 text-base">Card description goes here.</p>
                    </div>

                    <div className="px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                            <svg className="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.31 6.91 1l-5 4.86 1.18 6.88L12 17.73l-6.18 3.32L7 11.17l-5-4.86 6.91-1L12 2zm0 2.81L8.66 9.28 4.82 10.1l4.13 4.02-.98 5.68L12 17.94l5.03 2.87-.98-5.68 4.13-4.02-3.84-.82L12 4.81zM12 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>
                    <div className=" border-t-2 p-3 w-full flex">
                        <img
                            className="w-8 rounded-full"
                            src="	https://mycenta-dev.netlify.app/images/avatar/avatar-1.jpg"
                            alt=""
                        />
                        <p className=" ml-2">Jenny Wilson</p>
                        <img  className='ml-20 text-end' src={cal} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section3
