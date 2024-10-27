# Photofolio

[🔗 Live Preview](https://adityab-photofolio.netlify.app/)

Photofolio is a photo album management application that allows users to create and view albums with images in real-time. Built with React functional components, hooks, and Firebase, it provides a dynamic and interactive experience for organizing and displaying images.

## Features

- **Real-Time Album Display**: See all albums fetched in real-time from Firebase.
- **Add Album**: Easily create new albums. A toast message confirms successful addition.
- **Dynamic Image Gallery**: Select an album to view its images and use interactive features like editing, deleting, and carousel view.
- **Add Images**: Add images to an album by providing a title and URL.
- **Image Card Actions**: Hover over an image card to reveal edit and delete options.
- **Image Carousel**: Open an image in a carousel view with next/previous navigation arrows and a close button.

## Screens and Navigation

1. **Home Page**:
   - **Navbar**: Displays the brand logo and name.
   - **AlbumContainer**: Shows all albums with real-time updates from Firebase.
   - **Add Album**: Click the "Add Album" button to display a form for entering an album name.

2. **Album View**:
   - Upon selecting an album, the `AlbumContainer` is replaced by the `ImageContainer`.
   - **ImageContainer**: Displays images from the selected album and includes an "Add Image" button for adding new images.
   - **Image Actions**: Hover over images to display edit and delete options.

3. **Image Carousel**:
   - Click on an image to open a carousel.
   - Navigate through images using the arrow buttons.
   - Close the carousel by clicking the button on the top right corner.

## Technologies Used

- **React** (functional components and hooks)
- **Firebase** (for real-time database and storage)
- **JavaScript, HTML, and CSS**

## Usage

- Navigate to the homepage to view all albums in real time.
- Create a new album by clicking "Add Album" and filling out the form.
- Select an album to view its images and add images using the "Add Image" button.
- Hover over image cards to access the edit and delete icons.
- Click on an image to open the carousel, where you can navigate between images or close the carousel.

## Installation

To set up the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AdityaBheke/Photofolio.git
   cd Photofolio
2. Install the dependencies:
    ```bash
    npm install
3. Configure Firebase:
    - Set up a Firebase project.
    - Add your Firebase configuration details in a .env file or directly within the project’s Firebase initialization script.

4. Start the development server:
    ```bash
    npm start 
