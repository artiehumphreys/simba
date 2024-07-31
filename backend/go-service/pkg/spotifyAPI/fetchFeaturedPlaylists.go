package spotifyapi

import (
	"io"
	"net/http"

	"encoding/json"
	"fmt"
	"simba/go-service/pkg/models"
)

func FetchFeaturedPlaylists(client *http.Client) ([]models.Playlist, error) {
	fetch, err := client.Get("https://api.spotify.com/v1/browse/featured-playlists")
	if err != nil {
		return nil, fmt.Errorf("error retrieving playlist data: %v", err)
	}
	defer fetch.Body.Close()

	bodyBytes, err := io.ReadAll(fetch.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %v", err)
	}

	var playlists models.FeaturedPlaylistsResponse
	if err := json.Unmarshal(bodyBytes, &playlists); err != nil {
		return nil, fmt.Errorf("error unmarshalling JSON: %v", err)
	}

	return playlists.Playlists.Items, nil
}
