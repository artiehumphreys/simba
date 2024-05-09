package main

import (
	"context"
	"encoding/json"
	"log"
	"os"

	"net/http"

	spotifyapi "simba/go-service/pkg/spotifyAPI"

	"github.com/joho/godotenv"
	"github.com/julienschmidt/httprouter"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
	"golang.org/x/oauth2/clientcredentials"
)

func main() {
	router := httprouter.New()
	router.GET("/api/playlists", PlaylistsHandler)

	log.Println("Server starting on http://localhost:8080/")
	http.ListenAndServe(":8080", router)
}

func spotifyClient() (*http.Client, error) {
	if err := godotenv.Load("../../../../.env"); err != nil {
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
