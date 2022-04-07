import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    
      <Link to="/" className="ml-3 text-xl">NewsEagle</Link>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-white">General</Link>
      
      <Link to="/business" className="mr-5 hover:text-white">Business</Link>
      <Link to="/entertainment" className="mr-5 hover:text-white">Entertainment</Link>
      <Link to="/health" className="mr-5 hover:text-white">Health</Link>
      <Link to="/science" className="mr-5 hover:text-white">Science</Link>
      <Link to="/sports" className="mr-5 hover:text-white">Sports</Link>
      <Link to="/technology" className="mr-5 hover:text-white">Technology</Link>
      
    </nav>
    
  </div>
</header>
    )
  }
}

export default Navbar