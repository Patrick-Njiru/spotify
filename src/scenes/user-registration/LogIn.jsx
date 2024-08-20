import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { FaApple, FaEyeSlash, FaFacebook, FaSpotify } from "react-icons/fa"
import { googleIcon } from "../../data/images"
import { useEffect } from "react"

const LogIn = ({ setModalDisplay }) => {
	useEffect(() => {
		setModalDisplay({ modal: "hidden", smallModal: "hidden" })
	}, [setModalDisplay])

	return (
		<div className='bg-zinc-950 from-zinc-800 to-zinc-950 md:bg-gradient-to-b'>
			{/* logo */}
			<NavLink
				to='/'
				className='flex items-center font-bold p-10 py-8 bg-zinc-950 mb-0 md:text-2xl'
			>
				<FaSpotify className='inline me-2 text-2xl md:text-4xl' /> Spotify
			</NavLink>

			<div className='w-full rounded-xl text-center space-y-10 mx-auto bg-zinc-950 from-zinc-950 to-zinc-800 px-7 pt-8 md:w-7/12 md:bg-gradient-to-b md:my-8 md:pt-24 md:pb-16 md:px-40'>
				<h1 className='text-3xl font-extrabold text-start md:text-center md:mb-16 md:text-5xl'>
					Log in to Spotify{" "}
				</h1>
				{/* login options */}
				<div className=' space-y-2'>
					<button className='relative font-bold text-center text-lg text-gray-300 rounded-full py-2 w-full border border-gray-500 hover:border-white'>
						<img src={googleIcon} alt='' className='h-5 absolute start-10 top-1/4' />
						Continue with Google
					</button>
					<button className='relative font-bold text-center text-lg text-gray-300 rounded-full py-2 w-full border border-gray-500 hover:border-white'>
						<FaFacebook className='absolute start-10 top-1/4 text-xl bg-white rounded-full fill-blue-600' />
						Continue with facebook
					</button>
					<button className='relative font-bold text-center text-lg text-gray-300 rounded-full py-2 w-full border border-gray-500 hover:border-white'>
						<FaApple className='absolute start-10 top-1/5 text-2xl fill-white' />
						Continue with Apple
					</button>
					<button className='relative font-bold text-center text-lg text-gray-300 rounded-full py-2 w-full border border-gray-500 hover:border-white'>
						Continue with phone number
					</button>
				</div>
				<p className='h-0.5 bg-gray-700'></p>
				{/* form */}
				<form className='space-y-5 text-start md:text-center'>
					<div className='space-y-2'>
						<label htmlFor='user' className='font-bold text-sm'>
							Email or username
						</label>
						<input
							type='text'
							name='user'
							id='user'
							placeholder='Email or username'
							className='ps-3 py-2 bg-inherit w-full border border-gray-500 hover:border-white focus:border-2 focus:border-white'
						/>
					</div>
					<div className='space-y-2 relative'>
						<label htmlFor='password' className='font-bold text-sm'>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							className='ps-3 py-2 bg-inherit w-full border border-gray-500 hover:border-white focus:border-2 focus:border-white'
						/>
						<FaEyeSlash className='text-xl absolute end-4 bottom-3 fill-gray-400 hover:fill-white' />
					</div>
					<div>
						<div className='space-x-4 text-start'>
							<input type='checkbox' name='remember' id='remember' />
							<label htmlFor='remember' className='text-sm'>
								Remember me
							</label>
						</div>
					</div>

					{/* submit btn */}
					<button
						type='submit'
						onClick={(e) => {
							e.preventDefault()
							console.log("log in")
						}}
						className='w-full py-2 text-black text-center rounded-full bg-green-500 font-bold hover:bg-green-400 hover:font-extrabold'
					>
						Log In
					</button>
				</form>
				<div className='text-center space-y-5 md:space-y-8'>
					<a href='#' className='underline block font-medium hover:text-green-400'>
						Forgot your password?
					</a>
					<p className='hidden h-0.5 bg-gray-700 md:block'></p>
					<div className='space-y-5 justify-center md:space-y-0 md:flex md:space-x-3'>
						<p className='text-gray-400'>Don&apos;t have an account?</p>
						<NavLink
							to='/sign-up'
							className='underline block font-medium hover:text-green-400'
						>
							Sign up for spotify
						</NavLink>
					</div>
				</div>
			</div>
			<div className='my-8 mt-16 md:bg-zinc-800 md:mb-0 md:py-10 md:mt-6'>
				<p className='text-xs text-center text-gray-400 font-light'>
					This site is protected by reCAPTCHA and the Google{" "}
					<span className='inline underline cursor-pointer'>Privacy Policy</span> and{" "}
					<span className='inline underline cursor-pointer'>Terms of Service</span> apply
				</p>
			</div>
		</div>
	)
}

LogIn.propTypes = { setModalDisplay: PropTypes.func.isRequired }

export default LogIn
