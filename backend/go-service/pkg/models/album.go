package models

type Album struct {
	AlbumType   string   `json:"album_type"`
	TotalTracks int      `json:"total_tracks"`
	Href        string   `json:"href"`
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	AlbumCover  []Image  `json:"images"`
	ReleaseDate string   `json:"release_date"`
	Artists     []Artist `json:"artists"`
}
