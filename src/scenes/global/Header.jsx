import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { NavLink, useLocation } from "react-router-dom"
import { BiSearch } from "react-icons/bi"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Header = ({ onSearch, setModalDisplay }) => {
	const { pathname } = useLocation()
	const [displaySearch, setDisplaySearch] = useState("hidden")
	const [title, setTitle] = useState("")

	useEffect(() => {
		setDisplaySearch(pathname == "/search" ? "block " : "hidden ")
		setTitle(pathname == "/playlists" ? "PlayLists" : pathname == "/podcasts" ? "Podcasts" : "")
	}, [pathname])

	return (
		<header
			onClick={() => setModalDisplay({ modal: "hidden", smallModal: "hidden" })}
			className='sticky top-0 bg-inherit z-10 flex justify-between items-center p-3 px-6'
		>
			<div className='space-x-2'>
				<button
					className='group cursor-pointer'
					onClick={() => {
						window.history.pushState({ back: true }, "")
						window.history.back()
					}}
				>
					<FaChevronLeft className='inline text-3xl p-1 bg-zinc-950 rounded-full group-disabled:fill-gray-500 group-disabled:cursor-not-allowed' />
				</button>
				<button
					className='group cursor-pointer'
					onClick={() => {
						window.history.pushState({}, "")
						window.history.forward()
					}}
				>
					<FaChevronRight className='inline text-3xl p-1 bg-zinc-950 rounded-full group-disabled:fill-gray-500 group-disabled:cursor-not-allowed' />
				</button>
			</div>
			{/* page title */}
			{title && <h1 className='text-3xl font-extrabold text-gray-400'>{title}</h1>}
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
					className='bg-white text-black rounded-full p-2 pt-3 px-8 font-semibold hover:bg-slate-100 hover:font-extrabold'
				>
					Log in
				</NavLink>
			</div>
		</header>
	)
}

Header.propTypes = {
	onSearch: PropTypes.func.isRequired,
	setModalDisplay: PropTypes.func.isRequired,
}

export default Header
