package main

import (
	"context"
	"encoding/json"
	"log"
	"os"

	"net/http"

	spotifyapi "simba/go-service/pkg/spotifyAPI"

	"simba/go-service/pkg/models"

	"github.com/joho/godotenv"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/cors"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
	"golang.org/x/oauth2/clientcredentials"
)

func main() {
	router := httprouter.New()
	router.GET("/api/playlists", PlaylistsHandler)
	router.GET("/api/playlists/:id/tracks", SongsHandler)

	log.Println("Server starting on http://localhost:8080/")
	corsHandler := cors.Default().Handler(router)

	http.ListenAndServe(":8080", corsHandler)
}

func spotifyClient() (*http.Client, error) {
	if err := godotenv.Load("../.env"); err != nil {
		log.Printf("Error loading .env file: %v", err)
		return nil, err
	}

	authConfig := &clientcredentials.Config{
		ClientID:     os.Getenv("SPOTIFY_CLIENT_ID"),
		ClientSecret: os.Getenv("SPOTIFY_CLIENT_SECRET"),
		TokenURL:     spotifyauth.TokenURL,
	}

	token, err := authConfig.Token(context.Background())
	if err != nil {
		log.Printf("Couldn't get token: %v", err)
		return nil, err
	}

	return spotifyauth.New().Client(context.Background(), token), nil
}

func PlaylistsHandler(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	client, err := spotifyClient()
	if err != nil {
		http.Error(w, "Failed to create Spotify client: "+err.Error(), http.StatusInternalServerError)
		return
	}
	playlists, err := spotifyapi.FetchFeaturedPlaylists(client)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(playlists)
}

func SongsHandler(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	client, err := spotifyClient()
	if err != nil {
		http.Error(w, "Failed to create Spotify client: "+err.Error(), http.StatusInternalServerError)
		return
	}

	playlistID := ps.ByName("id")
	playlist := models.Playlist{ID: playlistID}
	songs, err := spotifyapi.FetchPlaylistSongs(playlist, client)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(songs)
}
