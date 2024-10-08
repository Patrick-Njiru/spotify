import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import { FaApple, FaFacebook, FaSpotify } from "react-icons/fa"
import { googleIcon } from "../../data/images"
import { useEffect } from "react"

const SignUp = ({ setModalDisplay }) => {
	useEffect(() => {
		setModalDisplay({ modal: "hidden", smallModal: "hidden" })
	})

	return (
		<div className='bg-zinc-950'>
			<NavLink to='/' className='inline-block font-bold m-6 mb-0'>
				<FaSpotify className='text-2xl inline' /> Spotify
			</NavLink>
			<div className='w-72 mx-auto space-y-6 my-3'>
				<h1 className='text-4xl font-bold'>Sign up to start listening</h1>
				<form className='space-y-3' onSubmit={(e) => e.preventDefault()}>
					<label htmlFor='email' className='text-xs font-medium'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='name@domain.com'
						className='ps-3 py-2 bg-inherit text-sm w-full border border-gray-500 hover:border-white'
					/>
					<button className='underline text-xs text-green-500'>
						use phone number instead.
					</button>
					{/* submit btn */}
					<button
						type='submit'
						className='w-full py-2 text-black text-center text-sm rounded-full bg-green-500 font-medium hover:bg-green-400'
					>
						Next
					</button>
				</form>
				<div className='flex items-center justify-between'>
					<span className='w-2/5 h-0.5 bg-gray-700'></span>
					<span className='w-1/5 text-center'>or</span>
					<span className='w-2/5 h-0.5 bg-gray-700'></span>
				</div>
				{/* Alternative sign-up options */}
				<div className=' space-y-2'>
					<button className='relative font-bold text-center text-sm rounded-full py-2 w-full border border-gray-500 hover:border-white'>
						<img src={googleIcon} alt='' className='h-4 absolute start-5 top-1/4 ' />
						Sign up with Google
					</button>
					<button className='relative font-bold text-center text-sm rounded-full py-2 w-full border border-gray-500 hover:border-white'>
						<FaFacebook className='absolute start-5 top-1/4 text-lg bg-white rounded-full fill-blue-600' />
						Sign up with facebook
					</button>
					<button className='relative font-bold text-center text-sm rounded-full py-2 w-full border border-gray-500 hover:border-white'>
						<FaApple className='absolute start-5 top-1/5 text-xl fill-white' />
						Sign up with Apple
					</button>
				</div>
				<p className='h-0.5 bg-gray-700'></p>
				<div className='flex justify-center space-x-2 text-xs'>
					<p className='text-gray-400 font-medium'>Already have an account?</p>
					<NavLink to='/login' className='underline font-medium'>
						Log in here.
					</NavLink>
				</div>

				<p className='text-xs text-center text-gray-400 font-light'>
					<span className='block'>
						This site is protected by reCAPTCHA and the Google
					</span>
					<a className='underline mx-1 cursor-pointer hover:underline'>Privacy Policy</a>{" "}
					and
					<a className='underline mx-1 cursor-pointer hover:underline'>
						Terms of Service
					</a>{" "}
					apply
				</p>
			</div>
		</div>
	)
}

SignUp.propTypes = { setModalDisplay: PropTypes.func.isRequired }

export default SignUp
