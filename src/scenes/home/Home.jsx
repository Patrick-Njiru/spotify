import { NavLink } from "react-router-dom"
import { SongCard } from "../../components"
import { homeData } from "../../data"

const Home = () => (
	<section className='pt-2 px-6 relative bg-gradient-to-b from-neutral-800 to-70%'>
		<div className='flex justify-between mb-3'>
			<NavLink to='/playlists' className='font-bold text-2xl hover:underline'>
				Spotify Playlists
			</NavLink>
			<NavLink to='/playlists' className='text-gray-400 hover:underline'>
				Show all
			</NavLink>
		</div>
		<div className='flex flex-wrap justify-between'>
			{homeData.map((song) => (
				<SongCard key={song.id} {...song} />
			))}
		</div>
	</section>
)

export default Home
