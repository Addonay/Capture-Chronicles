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

// Like and dislike buttons functionality
const likeButtons = document.querySelectorAll('.like-button');
const dislikeButtons = document.querySelectorAll('.dislike-button');
const likeCounts = document.querySelectorAll('.like-count');
const dislikeCounts = document.querySelectorAll('.dislike-count');

let totalLikes = 0;
let totalDislikes = 0;
const userVotes = {}; // Store user's votes

likeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const review = button.closest('.review');
    const reviewId = review.dataset.reviewId;

    // Check if the user has already voted for this review
    if (userVotes[reviewId] !== 'like') {
      // Decrease the dislike count if the user previously disliked this review
      if (userVotes[reviewId] === 'dislike') {
        totalDislikes--;
        const dislikeCount = review.querySelector('.dislike-count');
        dislikeCount.textContent = totalDislikes;
      }

      // Increase the like count
      totalLikes++;
      const likeCount = review.querySelector('.like-count');
      likeCount.textContent = totalLikes;

      // Store the user's vote
      userVotes[reviewId] = 'like';

      // Update the button classes
      button.classList.add('liked');
      const dislikeButton = review.querySelector('.dislike-button');
      dislikeButton.classList.remove('disliked');
    }
  });
});

dislikeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const review = button.closest('.review');
    const reviewId = review.dataset.reviewId;

    // Check if the user has already voted for this review
    if (userVotes[reviewId] !== 'dislike') {
      // Decrease the like count if the user previously liked this review
      if (userVotes[reviewId] === 'like') {
        totalLikes--;
        const likeCount = review.querySelector('.like-count');
        likeCount.textContent = totalLikes;
      }

      // Increase the dislike count
      totalDislikes++;
      const dislikeCount = review.querySelector('.dislike-count');
      dislikeCount.textContent = totalDislikes;

      // Store the user's vote
      userVotes[reviewId] = 'dislike';

      // Update the button classes
      button.classList.add('disliked');
      const likeButton = review.querySelector('.like-button');
      likeButton.classList.remove('liked');
    }
  });
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
