// import React from 'react'
import save from '../../public/check-circle.svg';
import play from '../../public/play.svg';
import cal from '../../public/calendar.svg';
// import clock from '../../public/clock.svg';
import set from '../../public/settings.svg';
// import video from '../../public/video.svg';
function Section2() {
    return (

        <>

            <div className="  flex lg:flex-row flex-col  p-4  bg-[#e2e8f0]">
                <div className=" bg-white  w-full h-[760px] border rounded-lg   lg:-mt-14 lg:ml-24 ">
                    <nav className="  flex border-b  border-gray-100 text-sm font-medium px-8  text-[#64748b]">
                        <a href="#" className="-mb-px border-b border-current p-4 text-cyan-500">
                            Description
                        </a>

                        <a href="#" className="-mb-px border-b border-transparent p-4 hover:text-cyan-500 hover:border-b">
                            Contents
                        </a>

                        <a href="#" className="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
                            Reviews
                        </a>

                        <a href="#" className="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
                            Transcript
                        </a>
                        <a href="#" className="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
                            FAQ
                        </a>
                    </nav>
                    <br />
                    <div className="px-3 text-[#64748b] bg-white overflow-hidden ">
                        <div className=" ">
                            <h2 className="text-XL font-medium sm:text-xl">Course Descriptions</h2>

                            <p className="mt-4 text-[#64748b] text ">
                                If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you'll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
                            </p>
                            <p className="mt-4 text-[#64748b]">
                                Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages. </p>
                        </div>
                        <h2 className="text-sm font-medium sm:text-lg mt-4"> What you’ll learn</h2>
                        <div className=" grid grid-cols-12 gap-8 md:mt-3 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            <ul className="col-span-6 flex items-center  text-sm">
                                <li className="flex items-center">
                                    <img src={save} alt="" className="mr-2" />
                                    Recognize the importance of understanding your objectives when addressing an audience.
                                </li>
                                <li className="flex items-center  text-sm ml-3">
                                    <img src={save} alt="" className="mr-2" />
                                    Recognize the importance of understanding your objectives when addressing an audience.
                                </li>
                            </ul>
                            <ul className="col-span-6 flex items-center  text-sm">
                                <li className="flex items-center">
                                    <img src={save} alt="" className="mr-2" />
                                    Recognize the importance of understanding your objectives when addressing an audience.
                                </li>
                                <li className="flex items-center  text-sm ml-3">
                                    <img src={save} alt="" className="mr-2" />
                                    Recognize the importance of understanding your objectives when addressing an audience.
                                </li>
                            </ul>
                            <ul className="col-span-6 flex items-center">
                                <li className="flex items-center  text-sm">
                                    <img src={save} alt="" className="mr-2" />
                                    Recognize the importance of understanding your objectives when addressing an audience.
                                </li>
                                <li className="flex items-center text-sm ml-3">
                                    <img src={save} alt="" className="mr-2" />
                                    Recognize the importance of understanding your objectives when addressing an audience.
                                </li>
                            </ul>

                        </div>
                        <p className="mt-5 text-[#64748b] text-Sm ">
                            Maecenas viverra condimentum nulla molestie condimentum. Nunc ex libero, feugiat quis lectus vel, ornare euismod ligula. Aenean sit amet arcu nulla.                            </p>
                        <p className="mt-5 text-[#64748b] text-sm ">
                            Duis facilisis ex a urna blandit ultricies. Nullam sagittis ligula non eros semper, nec mattis odio ullamcorper. Phasellus feugiat sit amet leo eget consectetur.                            </p>
                    </div>

                </div>
                <div className=" lg:mr-24 lg:ml-6 lg:-mt-36  ">
                    <div className="block rounded-lg p-2 bg-white px-2 pb-7 shadow-sm w-[450px] shadow-indigo-100    ">
                        <img
                            alt="Home"
                            src="https://mycenta-dev.netlify.app/images/course/course-javascript.jpg"
                            className="h-56 w-full rounded-md object-cover"
                        />



                        <div className="mt-2">
                            <dl>
                                <div>
                                    <span className=" text-black font-bold text-xl" >₹600   </span>
                                    <span className="text-sm text-gray-500  line-through ">₹700   </span>
                                </div>
                            </dl>
                        </div>
                        <button className=' mt-2 hover:bg-sky-700  rounded-md bg-sky-600/80 px-5 py-2.5 text-sm font-medium text-white shadow flex items-center justify-center lg:w-full mr-11' >
                            Purchase Now
                        </button>
                    </div>
                    <div className="block rounded-lg  lg:mt-6 p-4 shadow-sm bg-white shadow-indigo-100 relative w-[450px]">

                        <h1 className=' text-lg font-bold'>What’s included</h1>
                        <hr />
                        <div className="flex items-center">
                            <img src={play} alt="" className="mr-2" />
                            <p className="text-base text-[#64748b] mt-2 justify-center mb-2">12 hours video</p>
                        </div>
                        <hr />
                        <div className="flex items-center">
                            <img src={set} alt="" className="mr-2" />
                            <p className="text-base text-[#64748b] mt-2 justify-center mb-2">Certificate</p>
                        </div>
                        <hr />
                        <div className="flex items-center">
                            <img src={cal} alt="" className="mr-2" />
                            <p className="text-base text-[#64748b] mt-2 justify-center mb-2">12 Article</p>
                        </div>
                        <hr />
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            <p className="text-base text-[#64748b] ml-1 mt-2 justify-center mb-2">Watch Offline</p>
                        </div>
                        <hr />
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock   text-red-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <p className="text-base text-[#64748b] ml-1 mt-2 justify-center mb-2">Lifetime access</p>
                        </div>

                    </div>

                    <div className=" mt-6 p-4  bg-white  dark:text-white dark:bg-gray-700  w-[450px] rounded-md">
                        <div className="flex items-center">
                            <div className='flex'>
                                <img
                                    className="w-24 rounded-full"
                                    src="	https://mycenta-dev.netlify.app/images/avatar/avatar-1.jpg"
                                    alt=""
                                />
                                <img className='-ml-5 mt-3 h-8' src="https://mycenta-dev.netlify.app/images/svg/checked-mark.svg" alt="" />
                            </div>
                            <div className="ml-7">
                                <h4 className="text-lg font-semibold">Jenny Wilson</h4>
                                <p className="text-sm text-gray-500">
                                    Front-end Developer, Designer
                                </p>
                                <span className="text-sm  text-gray-500">
                                    <span className="text-orange-500 pr-2">4.5</span>Instructor
                                    Rating
                                </span>
                            </div>
                        </div>
                        <div className="flex mt-3 w-full divide-x divide-gray-300">
                            <div className="border-y px-2 w-4/12 py-4">
                                <h4 className="font-semibold text-sm">11,604</h4>
                                <span className="text-gray-500 text-sm">Students</span>
                            </div>
                            <div className="border-y px-2 w-4/12 py-4">
                                <h4 className="font-semibold text-sm">32</h4>
                                <span className="text-gray-500 text-sm">Courses</span>
                            </div>
                            <div className="border-y px-2 w-4/12 py-4">
                                <h4 className="font-semibold text-sm">12,230</h4>
                                <span className="text-gray-500 text-sm">Reviews</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-sm text-gray-500">
                                I am an Innovation designer focussing on UX/UI based in Berlin.
                                As a creative resident at Figma explored the city of the future
                                and how new technologies.
                            </p>
                            <button className="border border-black py-2 mt-2 text-xs px-3 rounded-md">
                                View Details
                            </button>
                        </div>
                    </div>

                </div>





            </div>
        </>
    )
}

export default Section2
