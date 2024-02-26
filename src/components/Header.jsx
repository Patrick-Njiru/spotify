import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<header className='sticky top-0 bg-inherit z-10 flex justify-between items-center p-3 px-6'>
      <div className='space-x-2'>
        <button className=" group cursor-pointer" disabled>
				<FaChevronLeft className='inline text-3xl p-1 bg-zinc-950 rounded-full group-disabled:fill-gray-500 group-disabled:cursor-not-allowed' />
        </button>
        <button className="group cursor-pointer">
        <FaChevronRight className='inline text-3xl p-1 bg-zinc-950 rounded-full group-disabled:fill-gray-500 group-disabled:cursor-not-allowed' />

        </button>
      </div>
      <div className="flex items-center space-x-10">
        <NavLink to='signup' className='text-gray-400 font-medium hover:text-white hover:text-lg'>Sign up</NavLink>
        <NavLink to='/login' className='bg-white text-black rounded-full p-2 pt-3 px-8 font-semibold hover:bg-slate-50 hover:font-extrabold hover:shadow-lg'>Log in</NavLink>
      </div>
		</header>
	)
}

export default Header
