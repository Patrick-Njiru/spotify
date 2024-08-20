import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { SongCard } from "../../components"
import { homeData } from "../../data"

const Home = ({ setModalDisplay }) => (
	<section
		onClick={() => setModalDisplay({ modal: "hidden", smallModal: "hidden" })}
		className='pt-2 px-6 relative bg-gradient-to-b from-neutral-800 to-70%'
	>
		<div className='flex justify-between mb-3'>
			<NavLink to='/playlists' className='font-bold text-2xl hover:underline'>
				Spotify Playlists
			</NavLink>
			<NavLink to='/playlists' className='text-gray-400 hover:underline'>
				Show all
			</NavLink>
		</div>
		<div className='grid grid-cols-4 gap-8'>
			{homeData.map((song) => (
				<SongCard key={song.id} {...song} />
			))}
		</div>
	</section>
)

Home.propTypes = { setModalDisplay: PropTypes.func.isRequired }

export default Home
