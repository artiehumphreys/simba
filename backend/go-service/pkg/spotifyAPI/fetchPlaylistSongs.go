package spotifyapi

import (
	"io"
	"net/http"

	"encoding/json"
	"fmt"
	"simba/go-service/pkg/models"
)

func fetchPlaylistSongs(playlist models.Playlist, client *http.Client) ([]models.Track, error) {
	var tracks []models.Track
	fetch, err := client.Get("https://api.spotify.com/v1/playlists/" + playlist.ID + "/tracks")
	if err != nil {
		return nil, fmt.Errorf("error retrieving playlist data: %v", err)
	}
	defer fetch.Body.Close()

	bodyBytes, err := io.ReadAll(fetch.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %v", err)
	}

	var trackItems models.TracksResponse
	if err := json.Unmarshal(bodyBytes, &trackItems); err != nil {
		return nil, fmt.Errorf("error unmarshalling JSON: %v", err)
	}

	for _, item := range trackItems.Items {
		tracks = append(tracks, item.Track)
	}

	return tracks, nil
}
