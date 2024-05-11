package models

import (
	"time"
)

type Song struct {
	Album       Album     `json:"album"`
	ID          string    `json:"id"`
	Href        string    `json:"href"`
	Name        string    `json:"name"`
	Artists     []Artist  `json:"artists"`
	DurationMS  int       `json:"duration_ms"`
	Explicit    bool      `json:"explicit"`
	Popularity  int       `json:"popularity"`
	PreviewURL  string    `json:"preview_url"`
	TrackNumber int       `json:"track_number"`
	ReleaseDate time.Time `json:"release_date"`
}
