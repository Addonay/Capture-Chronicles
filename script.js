// Navigation buttons
const homeButton = document.getElementById('homebtn');
const aboutButton = document.getElementById('aboutbtn');
const galleryButton = document.getElementById('gallerybtn');
const contactButton = document.getElementById('contactbtn');

homeButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

aboutButton.addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

galleryButton.addEventListener('click', () => {
  const gallerySection = document.getElementById('gallery');
  const gallerySectionOffset = gallerySection.offsetTop;
  window.scrollTo({ top: gallerySectionOffset, behavior: 'smooth' });
});

contactButton.addEventListener('click', () => {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

// Review buttons
const reviewButtons = document.querySelectorAll('.review-button');
const likeCounts = document.querySelectorAll('.like-count');
const dislikeCounts = document.querySelectorAll('.dislike-count');

// Initialize likes and dislikes array
let likes = Array.from({ length: reviewButtons.length }, () => 0);
let dislikes = Array.from({ length: reviewButtons.length }, () => 0);

// Function to update like and dislike counts
function updateCounts(index) {
  likeCounts[index].textContent = likes[index];
  dislikeCounts[index].textContent = dislikes[index];
}

// Add event listeners to review buttons
reviewButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('liked') && !button.classList.contains('disliked')) {
      // If the button is not already liked or disliked
      button.classList.add('liked');
      likes[index]++;
      updateCounts(index);
    } else if (button.classList.contains('liked')) {
      // If the button is already liked, remove like and add dislike
      button.classList.remove('liked');
      button.classList.add('disliked');
      likes[index]--;
      dislikes[index]++;
      updateCounts(index);
    } else if (button.classList.contains('disliked')) {
      // If the button is already disliked, remove dislike
      button.classList.remove('disliked');
      dislikes[index]--;
      updateCounts(index);
    }
  });
});

// Load likes and dislikes from localStorage
if (localStorage.getItem('likes')) {
  likes = JSON.parse(localStorage.getItem('likes'));
}

if (localStorage.getItem('dislikes')) {
  dislikes = JSON.parse(localStorage.getItem('dislikes'));
}

// Update initial like and dislike counts
for (let i = 0; i < reviewButtons.length; i++) {
  updateCounts(i);
}

// Save likes and dislikes to localStorage
window.addEventListener('beforeunload', () => {
  localStorage.setItem('likes', JSON.stringify(likes));
  localStorage.setItem('dislikes', JSON.stringify(dislikes));
});



// Social media icons
const appleIcon = document.getElementById('apple');
const twitterIcon = document.getElementById('twitter');
const facebookIcon = document.getElementById('facebook');
const githubIcon = document.getElementById('github');
const instagramIcon = document.getElementById('instagram');
const discordIcon = document.getElementById('discord');
const whatsappIcon = document.getElementById('whatsapp');

// Function to open the social media page in a new window/tab
function openSocialMedia(url) {
  window.open(url, '_blank');
}

// Function to open social media page for messaging
function openSocialMediaMessage(url) {
  window.open(url, '_blank');
}

// Add event listeners to social media icons
appleIcon.addEventListener('click', () => {
  openSocialMediaMessage('https://www.apple.com/');
});

twitterIcon.addEventListener('click', () => {
  openSocialMediaMessage('https://twitter.com/messages');
});

facebookIcon.addEventListener('click', () => {
  openSocialMediaMessage('https://www.facebook.com/messages');
});

githubIcon.addEventListener('click', () => {
  openSocialMediaMessage('https://github.com/Addonay/Capture-Chronicles');
});

instagramIcon.addEventListener('click', () => {
  openSocialMediaMessage('https://www.instagram.com/direct/inbox');
});

discordIcon.addEventListener('click', () => {
  openSocialMediaMessage('https://discord.com/channels/@me');
});

whatsappIcon.addEventListener('click', () => {
  openSocialMediaMessage('https://web.whatsapp.com/send?phone=<+254711011011>');
});

// Fetch images from db.json and display in the gallery section
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const images = data.images;

    const fetchAndDisplayImages = () => {
      const gallerySection = document.getElementById('gallery');
      gallerySection.innerHTML = '';

      images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        gallerySection.appendChild(imgElement);
      });
    };

    fetchAndDisplayImages();

    galleryButton.addEventListener('click', () => {
      const gallerySection = document.getElementById('content');
      const gallerySectionOffset = gallerySection.offsetTop;
      window.scrollTo({ top: gallerySectionOffset, behavior: 'smooth' });
      fetchAndDisplayImages();
    });
  })
  .catch(error => {
    console.error('Error fetching images:', error);
  });
