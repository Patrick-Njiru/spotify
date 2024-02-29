import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { NavLink, useLocation } from "react-router-dom"
import { BiSearch } from "react-icons/bi"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Header = ({ onSearch }) => {
	const { pathname } = useLocation()
	const [displaySearch, setDisplaySearch] = useState("hidden")

	useEffect(() => {
		setDisplaySearch(pathname == "/search" ? "block " : "hidden ")
	}, [pathname])

	return (
		<header className='sticky top-0 bg-inherit z-10 flex justify-between items-center p-3 px-6'>
			<div className='space-x-2'>
				<button className='group cursor-pointer'>
					<FaChevronLeft className='inline text-3xl p-1 bg-zinc-950 rounded-full group-disabled:fill-gray-500 group-disabled:cursor-not-allowed' />
				</button>
				<button className='group cursor-pointer'>
					<FaChevronRight className='inline text-3xl p-1 bg-zinc-950 rounded-full group-disabled:fill-gray-500 group-disabled:cursor-not-allowed' />
				</button>
			</div>
			{/* Search input */}
			<div className={displaySearch + "absolute start-28"}>
				<input
					type='search'
					className='p-2 ps-10 bg-zinc-800 truncate border border-gray-500 rounded-full w-40 md:w-44 lg:w-64 xl:w-96'
					onChange={(e) => onSearch(e.target.value)}
					placeholder='What do you want to play?'
				/>
				<BiSearch className='text-xl inline fill-gray-400 absolute  top-3 start-3 hover:fill-white' />
			</div>
			<div className='flex items-center space-x-10'>
				<NavLink
					to='/signup'
					className='text-gray-400 font-medium hover:text-white hover:text-lg'
				>
					Sign up
				</NavLink>
				<NavLink
					id='btn-header'
					to='/login'
					className='bg-white text-black rounded-full p-2 pt-3 px-8 font-semibold hover:bg-slate-50 hover:font-extrabold hover:shadow-lg'
				>
					Log in
				</NavLink>
			</div>
		</header>
	)
}

Header.propTypes = { onSearch: PropTypes.func.isRequired }

export default Header
