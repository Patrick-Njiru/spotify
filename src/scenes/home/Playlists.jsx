import PropTypes from "prop-types"
import { SongCard } from "../../components"
import { playlistData } from "../../data"

const Playlists = ({ setModalDisplay }) => (
	<section
		onClick={() => setModalDisplay({ modal: "hidden", smallModal: "hidden" })}
		className='pt-2 px-6 relative bg-gradient-to-b from-neutral-800 to-70%'
	>
		<h2 className='font-bold text-2xl mb-3 '>Spotify Playlists</h2>
		<div className='flex flex-wrap justify-between'>
			{playlistData.map((song) => (
				<SongCard key={song.id} {...song} />
			))}
		</div>
	</section>
)

Playlists.propTypes = { setModalDisplay: PropTypes.func.isRequired }

export default Playlists
