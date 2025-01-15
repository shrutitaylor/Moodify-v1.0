# Moodify

Moodify is a simple yet innovative web application built with React that generates personalized playlists based on the user's mood. It's a fun and interactive way to discover music that matches how you're feeling.

## Features

- **Mood Selector**: Choose from a variety of moods (e.g., Happy, inLove, Sad, Angry) to get tailored playlists.
- **Playlist Display**: View song titles, artist names, and album covers in a visually appealing layout.
- **Random Mood Button**: Feeling adventurous? Let the app surprise you with a random mood and playlist.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Optional Features (For Future Enhancements)

- **Search Functionality**: Search for specific songs or artists within the generated playlist.
- **Mood-Based Color Scheme**: The app dynamically changes its theme based on the selected mood.
- **Save Playlist**: Save your favorite playlists locally using browser storage.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Mock Data/API**: Integration with Spotify API
- **Deployment**: Github GH Pages

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/moodify.git
   ```

2. Navigate to the project directory:
   ```bash
   cd moodify-v1
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the app.


```

## How It Works

1. **Mood Selection**: Users select a mood by clicking on a mood card or button.
2. **Playlist Generation**: The app fetches playlist data (from mock JSON or an API) based on the selected mood.
3. **Playlist Display**: The selected playlist is displayed with song details and album art.
4. **Random Mood**: Users can click the "Surprise Me" button to get a random mood and playlist.
5. **Dark/Light Mode**: Toggle the app's theme seamlessly.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

## Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React.js documentation: [https://reactjs.org/](https://reactjs.org/)
- Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
- Music APIs: Spotify

---

Enjoy using Moodify and let the music match your vibe! 🎵
