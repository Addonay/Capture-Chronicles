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

let totalLikes = 0;
let totalDislikes = 0;

likeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('liked')) {
      if (dislikeButtons[index].classList.contains('disliked')) {
        // Decrease the dislike count if it was previously disliked
        totalDislikes--;
        dislikeCounts[index].textContent = totalDislikes;
        dislikeButtons[index].classList.remove('disliked');
      }

      // Increase the like count
      totalLikes++;
      likeCounts[index].textContent = totalLikes;
      button.classList.add('liked');
    } else {
      // Decrease the like count if it was previously liked
      totalLikes--;
      likeCounts[index].textContent = totalLikes;
      button.classList.remove('liked');
    }
  });
});

dislikeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('disliked')) {
      if (likeButtons[index].classList.contains('liked')) {
        // Decrease the like count if it was previously liked
        totalLikes--;
        likeCounts[index].textContent = totalLikes;
        likeButtons[index].classList.remove('liked');
      }

      // Increase the dislike count
      totalDislikes++;
      dislikeCounts[index].textContent = totalDislikes;
      button.classList.add('disliked');
    } else {
      // Decrease the dislike count if it was previously disliked
      totalDislikes--;
      dislikeCounts[index].textContent = totalDislikes;
      button.classList.remove('disliked');
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
