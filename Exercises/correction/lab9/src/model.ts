export interface ShowInterface {
  id: number
  title: string
  genres: string[]
  images: {
    poster: string
  }
  seasons: string
  user: {
    favorited: boolean
  }
  description: string
  creation: string
  status: string
}
