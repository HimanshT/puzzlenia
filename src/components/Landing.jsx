import React from 'react'
import background from '../images/img2.png'
import { Outlet, Link } from "react-router-dom";
//This is the starting page it will be directing to login/signup with get started page
function Landing() {
  return (
    <div className='container'>
      <section className="px-2 py-4 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap py-5 items-center sm:-mx-3">
            <div className="w-full mb-10 mx-0 md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
                <img src={background} alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 mx-8 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline" style={{ color: '#d720c8' }}>What's worthy</span>
                  <span className="block text-indigo-600 xl:inline" style={{ color: '#68006c' }}> Would be a puzzle</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl" style={{ color: '#ff865d' }}>It's never never easy to crack the code without practice.</p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link to="/signin" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white rounded-md sm:mb-0 sm:w-auto" style={{ backgroundColor: '#242059' }}>
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  )
}

export default Landing
