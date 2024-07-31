package spotifyapi

import (
	"io"
	"net/http"

	"encoding/json"
	"fmt"
	"simba/go-service/pkg/models"
)

func FetchPlaylistSongs(playlist models.Playlist, client *http.Client) ([]models.Track, error) {
	var tracks []models.Track
	url := "https://api.spotify.com/v1/playlists/" + playlist.ID + "/tracks"
	for url != "" {
		fetch, err := client.Get(url)
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
		url = trackItems.Next
	}

	return tracks, nil
}
