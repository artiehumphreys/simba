package spotifyapi

import (
	"net/http"

	"simba/go-service/pkg/models"
)

func fetchFeaturedSongs(playlists []models.Playlist, client *http.Client) ([]models.Song, error)
