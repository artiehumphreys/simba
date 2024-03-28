package main

import (
	"context"
	"io"
	"log"
	"os"

	"encoding/json"
	"fmt"

	"simba/backend/go-service/pkg/models"

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
	var playlistObject models.Playlist
	error := json.Unmarshal(bodyBytes, &playlistObject)
	if err != nil {
		fmt.Println("Error:", error)
		return
	}
	log.Println(playlistObject, playlistObject.Description)
	// bodyString := string(bodyBytes)
	// for x, playlist := range bodyString {
	// 	log.Println(x, ":", playlist)
	// }
	// log.Println("featured playlists:", bodyString)
}
