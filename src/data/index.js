import { playlistImgs } from "./images"

const playlistData = [
	{
		id: 1,
		title: "wake up gently",
		description: "Wake up at your own pace with gentle piano music.",
		image: playlistImgs[0],
	},
	{
		id: 2,
		title: "jazzy morning",
		description: "Start your day right and wake up with some calm...",
		image: playlistImgs[1],
	},
	{
		id: 3,
		title: "today's top hits",
		description: "Beyonce is on top of the Hottest 50!",
		image: playlistImgs[2],
	},
	{
		id: 4,
		title: "cozy accoustic morning",
		description: "Warm insturmental guitar to a gentle start.",
		image: playlistImgs[3],
	},
	{
		id: 5,
		title: "RapCaviar",
		description: "New music from 21 Savage, ye and Yeat.",
		image: playlistImgs[4],
	},
	{
		id: 6,
		title: "All out of 90s",
		description: "The biggest songs of the 1990s. Cover: Sheryl...",
		image: playlistImgs[5],
	},
	{
		id: 7,
		title: "Mellow Lofi Morning",
		description: "Laid-back beats for an easygoing morning",
		image: playlistImgs[6],
	},
	{
		id: 8,
		title: "Soft Rock",
		description: "It's like rock, but softer. Cover: Billy Joel",
		image: playlistImgs[7],
	},
	{
		id: 9,
		title: "Chill Hits",
		description: "Kick back to the best new and recent chill hits.",
		image: playlistImgs[8],
	},
	{
		id: 10,
		title: "Mega Hit Mix",
		description: "A mega mix of 75 favorites from the last few years!",
		image: playlistImgs[9],
	},
]

const homeData = playlistData.filter((item) => item.id < 5)

const PodcastData = [
	{
		id: 1,
		category: "Podcast Charts",
		image: "https://placehold.co/180",
	},
	{
		id: 2,
		category: "Comedy",
		image: "https://placehold.co/180",
	},
	{
		id: 3,
		category: "Educational",
		image: "https://placehold.co/180",
	},
	{
		id: 4,
		category: "True Crime",
		image: "https://placehold.co/180",
	},
	{
		id: 5,
		category: "Sports",
		image: "https://placehold.co/180",
	},
	{
		id: 6,
		category: "Stories",
		image: "https://placehold.co/180",
	},
	{
		id: 7,
		category: "Music",
		image: "https://placehold.co/180",
	},
	{
		id: 8,
		category: "Arts and Entertainment",
		image: "https://placehold.co/180",
	},
]

export { homeData, playlistData, PodcastData }
