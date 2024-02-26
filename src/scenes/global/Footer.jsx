import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
	return (
		<footer className='flex flex-wrap justify-between px-6 mt-6'>
			<div className='flex flex-wrap justify-between w-full space-y-12 lg:space-y-0 lg:w-3/4'>
				<div className='flex flex-col space-y-2 w-full lg:w-1/4'>
          <h4 className="font-bold">Company</h4>
					<a href='#' className='text-gray-400'>
						About
					</a>
					<a href='#' className='text-gray-400'>
						Jobs
					</a>
					<a href='#' className='text-gray-400'>
						For the Record
					</a>
				</div>
				<div className='flex flex-col space-y-2 w-full lg:w-1/4'>
          <h4 className="font-bold">Communities</h4>
					<a href='#' className='text-gray-400'>
						For Artists
					</a>
					<a href='#' className='text-gray-400'>
						Developers
					</a>
					<a href='#' className='text-gray-400'>
						Advertising
					</a>
					<a href='#' className='text-gray-400'>
						Investors
					</a>
					<a href='#' className='text-gray-400'>
						Vendors
					</a>
				</div>
				<div className='flex flex-col space-y-2 w-full lg:w-1/4'>
          <h4 className="font-bold">Useful links</h4>
					<a href='#' className='text-gray-400'>
						Support
					</a>
					<a href='#' className='text-gray-400'>
						Free Mobile App
					</a>
					<a href='#' className='text-gray-400'>
						Consumer rights
					</a>
				</div>
			</div>
			{/* socials */}
			<div className='flex space-x-3 w-full mt-12 lg:mt-0 lg:w-1/4 lg:justify-end'>
				<FaInstagram className='text-3xl p-2 bg-neutral-800 rounded-full' />
				<FaTwitter className='text-3xl p-2 bg-neutral-800 rounded-full' />
				<FaFacebook className='text-3xl p-2 bg-neutral-800 rounded-full' />
			</div>
			<div className="w-full mt-12 space-y-12">
				<div className="h-1 bg-neutral-800"></div>
				<p className="text-gray-400">&copy; 2024 Spotify AB </p>
			</div>
		</footer>
	)
}

export default Footer
