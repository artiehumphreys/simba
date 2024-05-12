package models

type FeaturedPlaylistsResponse struct {
	Message   string    `json:"message"`
	Playlists Playlists `json:"playlists"`
}

type Playlists struct {
	Items []Playlist `json:"items"`
}

type Playlist struct {
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Href        string  `json:"href"`
	Images      []Image `json:"images"`
	Tracks      Tracks  `json:"tracks"`
	ID          string  `json:"id"`
}

type Image struct {
	URL string `json:"url"`
}

type Tracks struct {
	Href  string `json:"href"`
	Total int    `json:"total"`
}
