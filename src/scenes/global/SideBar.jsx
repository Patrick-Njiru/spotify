// import React from 'react'
import { NavLink } from "react-router-dom"
import { FaGlobe, FaSpotify } from "react-icons/fa"
import { BiHome, BiLibrary, BiSearch } from "react-icons/bi"

const SideBar = () => {
	return (
		<aside id='sidebar' className='w-1/3 flex flex-col justify-between'>
			{/* Home and Search Links*/}
			<section className='p-5 bg-neutral-900 rounded-lg flex-col space-y-5'>
				<NavLink
					href='/'
					className='font-medium flex items-center space-x-1 w-fit pe-5'
					title='Spotify'
				>
					<FaSpotify className='text-2xl' />
					<span>Spotify</span>
				</NavLink>
				<NavLink
					to='/'
					className='transition-all duration-300 font-bold text-gray-400 flex items-center space-x-5 hover:text-white'
				>
					<BiHome className='text-3xl' />
					<span>Home</span>
				</NavLink>

				<NavLink
					to='/search'
					className='group relative transition-all duration-300 font-bold text-gray-400 flex items-center space-x-5 hover:text-white'
				>
					<BiSearch className='text-3xl' />
					<span className="invisible p-1 bg-white absolute rounded-full -left-3 top-2"></span>
					<span>Search</span>
				</NavLink>
			</section>

			{/* library, create playlist and browse podcasts. */}
			<section className='mt-2 pe-2 bg-neutral-900 rounded-lg'>
				<div className='p-4 flex justify-between items-center'>
					<NavLink
						to='library'
						className='transition-all duration-300 font-bold text-gray-400 flex hover:text-white'
						title='Collapse Your Library'
					>
						<BiLibrary className='text-3xl mr-2' />{" "}
						<span className='mt-1'>Your Library</span>
					</NavLink>

					<button
						title='Create playlist or folder'
						className='transition-all duration-300 text-3xl font-light text-gray-400 flex rounded-3xl hover:text-white hover:bg-neutral-800 px-1'
					>
						+
					</button>
				</div>

				{/* Overflowing Content */}
				<div className='overflow-hidden hover:overflow-auto'>
					<div className='space-y-6 h-20'>
						<div className='mt-2 p-3 mx-2 space-y-3 bg-neutral-800 rounded-xl text-white'>
							<p className='font-bold'>Create your first playlist</p>
							<p className='text-xs font-medium'>
								It&apos;s easy, we&apos;ll help you
							</p>
							<button className='text-gray-950 bg-white rounded-full p-2 px-4 font-semibold text-xs hover:font-extrabold hover:shadow-lg'>
								Create playlist
							</button>
						</div>

						<div className='mt-2 mx-2 p-3 space-y-3 bg-neutral-800 rounded-xl text-white'>
							<p className='font-bold'>Let&apos;s find some podcasts to follow</p>
							<p className='text-xs font-medium'>
								We&apos;ll keep you updated on new episodes
							</p>

							<button className='text-gray-950 bg-white rounded-full p-2 px-4 font-semibold text-xs hover:font-extrabold hover:shadow-lg'>
								Browse podcasts
							</button>
						</div>
					</div>
				</div>

				<div className='flex-col text-gray-400 p-5 pt-10'>
					<div className='min-h-24 flex flex-wrap text-xs'>
						<a href='#unknown' className="me-3">Legal</a>
						<a href='#unknown' className="me-3">
							Safety & Privacy Center
						</a>
						<a href='#unknown' className="me-3">Privacy Policy</a>
						<a href='#unknown' className="me-3">Cookies Settings</a>
						<a href='#unknown' className='me-3'>
							About Ads
						</a>
						<a href='#unknown' className="me-3">Accessibility</a>
						<a href='#unknown'>Cookies</a>
					</div>
					<button
						type='button'
						className='text-white p-2 px-3 border border-gray-500 font-semibold text-xs rounded-full flex space-x-1 my-2 group hover:border-white hover:font-extrabold'
					>
						<FaGlobe className='text-base' />
						<span>English</span>
					</button>
				</div>
			</section>
		</aside>
	)
}

export default SideBar
