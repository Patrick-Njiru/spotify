import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
	return (
		<footer className='flex flex-wrap justify-between px-6 mt-6'>
			<div className='flex flex-wrap justify-between w-full space-y-12 lg:space-y-0 lg:w-3/4'>
				<div className='flex flex-col space-y-2 w-full lg:w-1/4'>
          <h4 className="font-bold">Company</h4>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						About
					</a>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						Jobs
					</a>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						For the Record
					</a>
				</div>
				<div className='flex flex-col space-y-2 w-full lg:w-1/4'>
          <h4 className="font-bold">Communities</h4>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						For Artists
					</a>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						Developers
					</a>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						Advertising
					</a>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						Investors
					</a>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						Vendors
					</a>
				</div>
				<div className='flex flex-col space-y-2 w-full lg:w-1/4'>
          <h4 className="font-bold">Useful links</h4>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						Support
					</a>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						Free Mobile App
					</a>
					<a href='#' className='text-gray-400 hover:underline hover:text-white'>
						Consumer rights
					</a>
				</div>
			</div>
			{/* socials */}
			<div className='flex space-x-3 w-full mt-12 lg:mt-0 lg:w-1/4 lg:justify-end'>
				<FaInstagram className='text-4xl p-2 bg-neutral-800 rounded-full hover:bg-neutral-500' />
				<FaTwitter className='text-4xl p-2 bg-neutral-800 rounded-full hover:bg-neutral-500' />
				<FaFacebook className='text-4xl p-2 bg-neutral-800 rounded-full hover:bg-neutral-500' />
			</div>
			<div className="w-full mt-12 space-y-12">
				<div className="h-1 bg-neutral-800"></div>
				<p className="text-gray-400">&copy; 2024 Spotify AB </p>
			</div>
		</footer>
	)
}

export default Footer
