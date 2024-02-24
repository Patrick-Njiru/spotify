const CallToAction = () => {
	return (
		<section
			id='cta'
			className='w-full mt-1 p-2 px-4 flex justify-between items-center lg:mt-2'
		>
			<div className='text-white font-medium w-3/4'>
				<p className='text-sm'>Preview of Spotify</p>
				<p className=''>
					Sign up to get unlimited songs and podcasts with occassional ads. No credit card
					needed.
				</p>
			</div>
			<button className='bg-white text-black px-6 py-3 pt-4 font-bold rounded-full w-40'>
				Sign up for free
			</button>
		</section>
	)
}

export default CallToAction
