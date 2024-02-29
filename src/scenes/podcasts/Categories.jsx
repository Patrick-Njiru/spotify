import { Card } from "../../components"
import { allPodcastCategories } from "../../data"

const categories = () => (
	<section>
		<h1 className='text-7xl bg-gradient-to-b from-zinc-800 to-zinc-900 font-extrabold pt-14 pb-6 mb-8 ps-6 '>
			All podcast categories
		</h1>
		{Object.entries(allPodcastCategories).map(([title, podcasts]) => (
			<div key={title}>
				<h1 className='ps-6 mt-12 mb-1 text-2xl font-bold'>{title}</h1>
				<div className='px-6 flex flex-wrap justify-between'>
					{podcasts.map((podcast, index) => (
						<Card key={index} podcast={podcast} />
					))}
				</div>
			</div>
		))}
	</section>
)

export default categories
