package main

import (
	"context"
	"io"
	"log"
	"os"

	"github.com/joho/godotenv"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
	"golang.org/x/oauth2/clientcredentials"
)

func main() {
	if err := godotenv.Load("../../../../.env"); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}
	authConfig := &clientcredentials.Config{
		ClientID:     os.Getenv("SPOTIFY_CLIENT_ID"),
		ClientSecret: os.Getenv("SPOTIFY_CLIENT_SECRET"),
		TokenURL:     spotifyauth.TokenURL,
	}
	token, err := authConfig.Token(context.Background())
	if err != nil {
		log.Fatalf("Couldn't get token: %v", err)
	}
	httpClient := spotifyauth.New().Client(context.Background(), token)
	//client := spotify.New(httpClient)
	fetchedPlaylists, err := httpClient.Get("https://api.spotify.com/v1/browse/featured-playlists")
	if err != nil {
		log.Fatalf("error retrieving playlist data: %v", err)
	}
	defer fetchedPlaylists.Body.Close()
	bodyBytes, err := io.ReadAll(fetchedPlaylists.Body)
	if err != nil {
		log.Fatalf("Failed to read response body: %v", err)
	}
	bodyString := string(bodyBytes)
	log.Println("featured playlists:", bodyString)
	log.Println("featured playlists:", string(bodyBytes))
}
