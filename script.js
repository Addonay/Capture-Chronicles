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

// Like and dislike buttons
const likeButtons = document.querySelectorAll('.like-button');
const dislikeButtons = document.querySelectorAll('.dislike-button');
const likeCounts = document.querySelectorAll('.like-count');
const dislikeCounts = document.querySelectorAll('.dislike-count');

let liked = Array.from({ length: likeButtons.length }, () => false);
let disliked = Array.from({ length: dislikeButtons.length }, () => false);

likeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!liked[index] && !disliked[index]) {
      likeCounts[index].textContent = parseInt(likeCounts[index].textContent) + 1;
      liked[index] = true;
    } else if (disliked[index]) {
      dislikeCounts[index].textContent = parseInt(dislikeCounts[index].textContent) - 1;
      likeCounts[index].textContent = parseInt(likeCounts[index].textContent) + 1;
      disliked[index] = false;
      liked[index] = true;
    }
  });
});

dislikeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!disliked[index] && !liked[index]) {
      dislikeCounts[index].textContent = parseInt(dislikeCounts[index].textContent) + 1;
      disliked[index] = true;
    } else if (liked[index]) {
      likeCounts[index].textContent = parseInt(likeCounts[index].textContent) - 1;
      dislikeCounts[index].textContent = parseInt(dislikeCounts[index].textContent) + 1;
      liked[index] = false;
      disliked[index] = true;
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
  // You can also use other methods like window.location.href = url; to navigate to the messaging page in the same tab
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
  openSocialMediaMessage('https://web.whatsapp.com/send?phone=<PHONE_NUMBER>');
  // Replace <PHONE_NUMBER> with the actual phone number to pre-fill the message
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
