import { NavLink } from "react-router-dom"

const CallToAction = () => {
	return (
		<section
			id='cta'
			className='absolute -bottom-20 -left-3 right-0  p-2 px-4 flex justify-between items-center space-x-2'
		>
			<div className='text-white font-medium me-2'>
				<p className='text-sm'>Preview of Spotify</p>
				<p className=''>
					Sign up to get unlimited songs and podcasts with occassional ads. No credit card
					needed.
				</p>
			</div>
			<NavLink
				to='/signup'
				id='btn-cta'
				className='bg-white text-black px-6 py-3 pt-4 font-semibold rounded-full min-w-40 hover:bg-slate-50 hover:font-extrabold hover:shadow-lg'
			>
				Sign up for free
			</NavLink>
		</section>
	)
}

export default CallToAction
