package models

type TracksResponse struct {
	Items []TrackItem `json:"items"`
	Next  string      `json:"next"`
}

type TrackItem struct {
	Track Track `json:"track"`
}

type Track struct {
	Album       Album    `json:"album"`
	ID          string   `json:"id"`
	Href        string   `json:"href"`
	Name        string   `json:"name"`
	Artists     []Artist `json:"artists"`
	DurationMS  int      `json:"duration_ms"`
	Explicit    bool     `json:"explicit"`
	Popularity  int      `json:"popularity"`
	PreviewURL  string   `json:"preview_url"`
	TrackNumber int      `json:"track_number"`
	ReleaseDate string   `json:"release_date"`
}
