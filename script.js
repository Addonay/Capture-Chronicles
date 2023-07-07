// Add event listeners to the navigation buttons
document.getElementById("home-button").addEventListener("click", loadHomePage);
document.getElementById("about-button").addEventListener("click", loadAboutPage);
document.getElementById("gallery-button").addEventListener("click", loadGalleryPage);
document.getElementById("contact-button").addEventListener("click", loadContactPage);

// Function to load the Home page
function loadHomePage() {
    // Clear the content area
    const content = document.querySelector('.content');
    content.innerHTML = '';
  
    // Create the home section
    const homeSection = document.createElement('section');
    homeSection.classList.add('home');
  
    // Create and append the home content
    const welcomeMessage = document.createElement('h2');
    welcomeMessage.textContent = 'Welcome to Capture-Chronicles!';
    homeSection.appendChild(welcomeMessage);
  
    const highlightText = document.createElement('p');
    highlightText.textContent = 'Explore the world through my lens.';
    homeSection.appendChild(highlightText);
  
    // Append the home section to the content area
    content.appendChild(homeSection);
}  
function loadAboutPage() {
    const loadingIndicator = document.createElement('p');
    loadingIndicator.textContent = 'Loading...';
    contentContainer.appendChild(loadingIndicator);
  
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about');
  
    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Me';
  
    const aboutText = document.createElement('p');  
    aboutText.textContent = `Welcome to my photography portfolio! My name is Addonay Osoro, and I'm a passionate photographer based in Kenya. I specialize in Wedding Photography, capturing stunning images that tell a story and evoke emotion.
  Photography has been a part of my life for as long as I can remember. My love for the art form began when I was a child, and I would spend hours flipping through my family's photo albums, marveling at the power of a single image to capture a moment in time.
  As I grew older, I began to experiment with photography myself, first with a point-and-shoot camera and later with more advanced equipment. I quickly realized that photography was more than just a hobby - it was a way to express my creativity and connect with the world around me.`;
  
    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);
  
    contentContainer.appendChild(aboutSection);
  
    loadingIndicator.remove();
}
  
// Function to load the Gallery page
function loadGalleryPage() {
    // Clear the content area
    const content = document.querySelector('.content');
    content.innerHTML = '';
  
    // Create the gallery section
    const gallerySection = document.createElement('section');
    gallerySection.classList.add('gallery');
  
    // Fetch images from Cloudinary API
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/capture-chronicles/image/list/wedding.json';
    const imageTag = 'wedding';
    const apiKey = '868576761468562';
    const apiScret = '1QvUg34AMZnSUMmZJ3Y5_uJ7lk4'
    fetch(`https://api.cloudinary.com/v1_1/capture-chronicles/image/list/wedding.json`)
      .then(response => response.json())
      .then(data => {
        // Iterate through the fetched images
        data.resources.forEach(image => {
          // Create and append image elements to the gallery section
          const img = document.createElement('img');
          img.src = image.secure_url;
          img.alt = image.public_id;
          gallerySection.appendChild(img);
        });
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  
    // Append the gallery section to the content area
    content.appendChild(gallerySection);
}
// Function to load the Contact page
function loadContactPage() {
    // Clear the content area
    const content = document.querySelector('.content');
    content.innerHTML = '';
  
    // Get the existing contact section from the HTML
    const contactSection = document.getElementById('contact');
  
    // Append the contact section to the content area
    content.appendChild(contactSection);
}
  