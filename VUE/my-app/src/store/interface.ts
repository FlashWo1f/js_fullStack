export interface State {
  movieList: moive[]
}
export interface moive {
  name: string
  genres: []
  title: string
  id: string
  alt: string
  image: []
  year: string
  directors: []
  subtype: string
  original_title: string
  collect_count: number
  casts: star[]
  rating: rating
}
export interface star {
  name: string
  id: string
  avatars: []
  alt: string
}
export interface rating {
  max: number
  average: string
  stars: number
  min: number
}