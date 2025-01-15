import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
   <>
    <div className="min-h-screen bg-teal-900 text-white flex flex-col items-center justify-center">
    <main className="flex flex-col items-center text-center mt-20 px-4">
      <h1 className="text-6xl font-bold">YASH VARDHAN SINGH</h1>
      <p className="text-2xl font-semibold mt-4">WED DEVELOPER</p>
      <p className="mt-6 text-lg max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus hic id iusto nostrum provident, repellendus!
      </p>
      <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-700">
                <Link to="/contact" className="hover:text-teal-300">Contact</Link>
      </button>
    </main>
   </div>
   <About></About>
   <Contact></Contact>
   </>
  )
}

export default Home
