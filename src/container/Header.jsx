// import React from 'react'
import logo from '../../public/logo (2).png';
function  Header() {
  return (
    <>
      <header aria-label="Site Header" className="bg-white py-2  ">
        <div className="mx-auto max-w-screen-xl  sm:px-6 lg:px-1 ">
          <div className="flex h-16 items-center ">
            <img className='lg' src={logo} alt="" />

            <div
              className="flex h-screen  items-center  -ml-1">
              <div className="group relative cursor-pointer py-2 hidden lg:block">
                <div className="flex items-center justify-between bg-white px-4">
                  <a
                    className="menu-hover my-2 hover:bg-sky-700 lg:mx-4 rounded-md bg-sky-600/80 px-5 py-2.5 text-sm font-medium text-white shadow flex items-center"
                    onClick=""
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-3 w-6 ml-2 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  className="invisible absolute flex flex-row  bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                  onClick=""
                >

                  <div aria-label="Site Footer" className="bg-white mt-2">
                    <div className='mt-1'>
                      <h1 className='text-lg font-bold text-[#64748b]'> Learn with Centa</h1>
                      <a className='mt-1 text-[#64748b]' href=""> Self paced courses | Expert Masterclasses | Live Training | Webinars</a>
                    </div>
                    <div className="mt-2 grid  w-[900px] gap-8 sm:grid-cols-2 lg:grid-cols-3 px-1 py-1 ">
                      <div className="text-center sm:text-left col-span-1 ">
                        <p className="text-lg font-medium text-[#64748b]">Courses</p>
                        <hr />
                        <nav aria-label="Footer About Nav" className="mt-8">
                          <ul className="space-y-4 text-sm">
                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Self Paced course
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                Getting Started with Active Learning
                              </a>

                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Self Paced course
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                Getting Started with Active Learning
                              </a>

                            </li>
                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Self Paced course
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                Getting Started with Active Learning
                              </a>

                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Self Paced course
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                Getting Started with Active Learning
                              </a>

                            </li>
                          </ul>
                        </nav>
                        <button className="mt-2 bg-white hover:bg-blue-500 hover:text-white text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded shadow">
                          View all Courses
                        </button>
                      </div>

                      <div className="text-center sm:text-left col-span-1">
                        <p className="text-lg font-medium text-gray-900">Certificate Programs</p>
                        <hr />
                        <nav aria-label="Footer Services Nav" className="mt-8">
                          <ul className="space-y-4 text-sm">
                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                By Centa
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                CENTA Teaching Profeccionals Olympiad
                              </a>

                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                By Centa
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                CENTA Teaching Profeccionals Olympiad
                              </a>

                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                By Centa
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                CENTA Teaching Profeccionals Olympiad
                              </a>

                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                By Centa
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                CENTA Teaching Profeccionals Olympiad
                              </a>

                            </li>
                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                By Centa
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                CENTA Teaching Profeccionals Olympiad
                              </a>

                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                By Centa
                              </a>
                              <br />
                              <a
                                className="text-[#64748b]transition font-semibold hover:text-gray-700/75"
                                href="/"
                              >
                                Content Development
                              </a>

                            </li>
                          </ul>
                        </nav>
                        <button className="mt-1 bg-white hover:bg-blue-500 text-blue-500  hover:text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">
                          View all Certificate Programs
                        </button>
                      </div>

                      <div className="text-center sm:text-left col-span-1">
                        <p className="text-lg font-medium text-gray-900">Popular Subjects</p>
                        <hr />
                        <nav aria-label="Footer Resources Nav" className="mt-8">
                          <ul className="space-y-4 text-sm">
                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Online Guides
                              </a>
                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Conference Notes
                              </a>
                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Forum
                              </a>
                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Downloads
                              </a>
                            </li>

                            <li>
                              <a
                                className="text-[#64748b]transition hover:text-gray-700/75"
                                href="/"
                              >
                                Upcoming Events
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <button className="mt-1 bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">
                          View all Subjects
                        </button>
                      </div>


                    </div>
                  </div>
                </div>
              </div>


              <div className="flex items-center gap-4 -ml-3  ">
                <form>
                  <label htmlFor="default-search" className="lg:mx-4  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Courses" required />
                  </div>
                </form>
              </div>

            </div>


            <div className="hidden md:block px-8">
              <div
                className="gap-2 flex h-screen w-full items-center justify-center "
              >
                <div className="group relative cursor-pointer ">
                  <div className="flex items-center justify-between flex-row  bg-white ">
                    <a
                      className="menu-hover my-2 py-2 text-base font-medium text-black "
                      onClick=""
                    >
                      Jobs
                    </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        // strokeWidth="1.0"
                        stroke="currentColor"
                        className="h-3 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className="invisible absolute z-50 flex w-[180px] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                    onClick=""
                  >
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >JOBS
                    </a
                    >

                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Find a new career </a
                    >
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Search for Jobs
                    </a>
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Post a Job
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block ">
              <div
                className="gap-0 flex h-screen w-full items-center justify-center "
              >
                <div className="group relative cursor-pointer ">
                  <div className="flex items-center justify-between flex-row  bg-white ">
                    <a
                      className="menu-hover my-2 py-2 text-base font-medium text-black "
                      onClick=""
                    >
                      Teaching Professionals`Olympiad
                    </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        // strokeWidth="1.0"
                        stroke="currentColor"
                        className="h-3 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>

                  </div>
                  <div
                    className="invisible absolute z-50 flex w-[300px] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                    onClick=""
                  >
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >TEACHING PROFESSIONALS`S OLYMPAID</a
                    >

                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >About Teaching Professionals Olympaid</a
                    >
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Get your CENTA Tq Score
                    </a>
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >What`s happening LIVE ?
                    </a>
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Syllabus
                    </a>
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Syllabus
                    </a>
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Syllabus
                    </a>
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Past Events
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block ml-2 ">
              <div
                className="gap-1 flex h-screen w-full items-center justify-center "
              >
                <div className="group relative cursor-pointer ">
                  <div className="flex items-center justify-between flex-row  bg-white ">
                    <a
                      className="menu-hover my-2 py-2 text-base font-medium text-black "
                      onClick=""
                    >
                      The Future of Teaching
                    </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        // strokeWidth="1.0"
                        stroke="currentColor"
                        className="h-3 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>

                  </div>
                  <div
                    className="invisible absolute z-50 flex w-[300px] flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                    onClick=""
                  >
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >THE FUTURE OF TEACHING </a
                    >

                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >About the Global initiate </a
                    >
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Conversation with Global Leaders
                    </a>
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Events
                    </a>
                    <a
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >CENTA Ambassadors
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 ml-2">
              <button id="theme-toggle" type="button" className="text-black dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                {/* <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> */}
              </button>
              <button className="mt-1 bg-white hover:bg-black text-black font-semibold py-2 px-4 border border-black hover:text-white rounded shadow">
                Sign in
              </button>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
