import { Song } from "../components"
import { playlistData } from "../data"

const Playlists = () => {
	return (
		<section className='pt-2 px-6 relative bg-gradient-to-b from-neutral-800 to-70%'>
			<h2 className='font-bold text-2xl mb-3 '>Spotify Playlists</h2>
			<div className='flex flex-wrap justify-between'>
				{playlistData.map((song) => (
					<Song key={song.id} {...song} />
				))}
			</div>
		</section>
	)
}

export default Playlists
