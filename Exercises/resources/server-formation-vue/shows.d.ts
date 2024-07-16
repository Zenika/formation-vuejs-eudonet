export interface Show {
  id: number
  thetvdb_id: number
  imdb_id: string
  title: string
  original_title: string
  description: string
  seasons: string
  seasons_details: any
  episodes: string
  followers: string
  comments: string
  similars: string
  characters: string
  creation: string
  genres: string[]
  length: string
  network: string
  rating: string
  status: string
  language: string
  notes: any
  in_account: boolean
  images: {
    show?: string
    banner?: string
    box?: string
    poster?: string
  }
  aliases: any
  social_links: any[]
  next_trailer: any
  resource_url: string
  user: {
    favorited: boolean
    archived: boolean
    remaining: number
    status: number
    last: string
    tags: any
    next: any
    friends_watching: any[]
  }
}
declare const shows: Show[]
export default shows
