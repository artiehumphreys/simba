package models

type Playlist struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Href        string `json:"href"`
	Tracks      struct {
		Href  string `json:"href"`
		Total int    `json:"total"`
	} `json:"tracks"`
}
