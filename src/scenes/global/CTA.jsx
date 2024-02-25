const CallToAction = () => {
	return (
		<section
			id='cta'
			className='absolute bottom-2 -left-1 right-0 min-w-3.5 w-inherit p-2 px-4 flex justify-between items-center space-x-2'
		>
			<div className='text-white font-medium me-2'>
				<p className='text-sm'>Preview of Spotify</p>
				<p className=''>
					Sign up to get unlimited songs and podcasts with occassional ads. No credit card
					needed.
				</p>
			</div>
			<button className='bg-white text-black px-6 py-3 pt-4 font-semibold rounded-full min-w-40 hover:bg-slate-50 hover:text-lg'>
				Sign up for free
			</button>
		</section>
	)
}

export default CallToAction
