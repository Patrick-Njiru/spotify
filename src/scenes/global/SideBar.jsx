// import React from 'react'
import { NavLink } from "react-router-dom"
import { FaGlobe, FaSpotify } from "react-icons/fa"
import { BiHome, BiLibrary, BiSearch } from "react-icons/bi"

const SideBar = () => {
	return (
		<aside id='sidebar' className='p-2'>
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
					className='transition-all duration-300 font-bold text-gray-400 flex items-center space-x-5 hover:text-white'
				>
					<BiSearch className='text-3xl' />
					<span>Search</span>
				</NavLink>
			</section>

			{/* library, create playlist and browse podcasts. */}
			<section className='mt-2 pe-2 bg-neutral-900 rounded'>
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
					<div className='space-y-6 h-16'>
						<div className='mt-2 p-3 mx-2 space-y-3 bg-neutral-800 rounded-xl text-white'>
							<p className='font-bold'>Create your first playlist</p>
							<p className='text-xs font-medium'>
								It&apos;s easy, we&apos;ll help you
							</p>
							<button className='text-gray-950 bg-white rounded-full p-2 px-4 font-bold text-xs hover:text-sm'>
								Create playlist
							</button>
						</div>

						<div className='mt-2 mx-2 p-3 space-y-3 bg-neutral-800 rounded-xl text-white'>
							<p className='font-bold'>Let&apos;s find some podcasts to follow</p>
							<p className='text-xs font-medium'>
								We&apos;ll keep you updated on new episodes
							</p>

							<button className='text-gray-950 bg-white rounded-full p-2 px-4 font-bold text-xs hover:text-sm'>
								Browse podcasts
							</button>
						</div>
					</div>
				</div>

				<div className='flex-col text-gray-400 p-5 pt-10'>
					<div className='h-20 flex flex-wrap text-xs'>
						<a href='#unknown'>Legal</a>
						<a href='#unknown' className='mx-3'>
							Safety & Privacy Center
						</a>
						<a href='#unknown'>Privacy Policy</a>
						<a href='#unknown'>Cookies Settings</a>
						<a href='#unknown' className='mx-3'>
							About Ads
						</a>
						<a href='#unknown'>Accessibility</a>
						<a href='#unknown'>Cookies</a>
					</div>
					<button
						type='button'
						className='text-white p-2 px-3 border border-gray-500 font-extrabold text-xs rounded-full flex space-x-1 my-3 group hover:border-white'
					>
						<FaGlobe className='text-base group-hover:text-lg' />
						<span>English</span>
					</button>
				</div>
			</section>
		</aside>
	)
}

export default SideBar
