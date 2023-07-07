// Function to fetch and display images from the db.json file
function fetchImagesFromDB() {
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      const dbImages = data.images;

      const gallerySection = document.querySelector('#gallery');
      gallerySection.innerHTML = '<h1>Gallery</h1>';

      dbImages.forEach(image => {
        const imageUrl = image.url;
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        gallerySection.appendChild(imageElement);
      });

      // Insert the review section code here
      gallerySection.innerHTML +=`<div class="review">
      <p class="review-text">The photos are of high quality and they look great!</p>
      <div class="review-actions">
        <button class="like-button"><img src="/pics/ThumbsUp.svg" alt="like"></button>
        <button class="dislike-button"><img src="/pics/ThumbsDown.svg" alt="dislike"></button>
      </div>
    </div>
    
    <div class="review">
      <p class="review-text">Great features and options. The support team responded quickly to my question.</p>  
      <div class="review-actions">
        <button class="like-button"><img src="/pics/ThumbsUp.svg" alt="like"></button>
        <button class="dislike-button"><img src="/pics/ThumbsDown.svg" alt="dislike"></button>
      </div>    
    </div>
    
    <div class="review">
      <p class="review-text">WOW!!! We took a whole hour watching our pics on the TV. Thanks Addonay!</p>
      <div class="review-actions">
        <button class="like-button"><img src="/pics/ThumbsUp.svg" alt="like"></button>
        <button class="dislike-button"><img src="/pics/ThumbsDown.svg" alt="dislike"></button>
      </div>
    </div>  
  
    <div class="review">
      <p class="review-text">The photos are absolutely amazing and so much more than I could have imagined!!!</p>
      <div class="review-actions">
        <button class="like-button"><img src="/pics/ThumbsUp.svg" alt="like"></button>
        <button class="dislike-button"><img src="/pics/ThumbsDown.svg" alt="dislike"></button>
      </div>
    </div> 
  
    <div class="review">
      <p class="review-text">Incredible work bruh!!.</p>
      <div class="review-actions">
        <button class="like-button"><img src="/pics/ThumbsUp.svg" alt="like"></button>
        <button class="dislike-button"><img src="/pics/ThumbsDown.svg" alt="dislike"></button>
      </div>
    </div`;
    })
    .catch(error => {
      console.error('Error fetching images from db.json:', error);
    });
}

// Get the sidebar buttons
const homeButton = document.getElementById('homebtn');
const aboutButton = document.getElementById('aboutbtn');
const galleryButton = document.getElementById('gallerybtn');
const contactButton = document.getElementById('contactbtn');

// Get the content section
const contentSection = document.querySelector('.content');

// Add event listeners to the buttons
homeButton.addEventListener('click', () => {
  contentSection.innerHTML = '<p>Welcome to Capture Chronicles, where every photo tells a story!</p><p>Step into a world of stunning imagery, where the beauty of life is captured and preserved forever. Our photography portfolio is a window into the world through the lens of our skilled photographers, who have a passion for capturing the essence of every moment.</p><p>At Capture Chronicles, we believe that photography is an art form that should celebrate the beauty of life. Whether it\'s the magnificence of nature, the joy of a wedding, the excitement of a sporting event, or the love between family members, our photographers have an eye for detail and a talent for capturing the essence of every moment.</p><p>Our portfolio is a collection of images that showcase our unique style and ability to capture the heart of every moment. From breathtaking landscapes to intimate portraits, our photography tells a story that will inspire, uplift, and captivate you.</p><p>Whether you\'re looking for a photographer to capture your special day or simply seeking inspiration, our portfolio is a must-see. So come on in and experience the world through our lens - we guarantee you\'ll be captivated by what you see!</p>';
});

aboutButton.addEventListener('click', () => {
  contentSection.innerHTML = `
    <h1>About Us</h1>
    <p>Capture-Chronicles was founded in 2023 by two friends who wanted to create a simple and easy-to-use way for people to share their memories.</p>
    <p>Since then, Capture-Chronicles has grown to become one of the most popular photo and video sharing websites in the world.</p>
    <p>We are committed to providing our users with the best possible experience. We offer a variety of features to help you create beautiful photo albums and videos.</p>
    <p>We also have a team of dedicated support staff who are available to help you with any questions or problems you may have.</p>
    <p>If you are looking for a simple and easy-to-use way to share your memories, then Capture-Chronicles is the perfect place for you.</p>
  
    
     
  `;
});

// Add event listener to the gallery button
galleryButton.addEventListener('click', () => {
  fetchImagesFromDB(); // Call the fetchImagesFromDB function to fetch and display the images
});

contactButton.addEventListener('click', () => {
  contentSection.innerHTML = `
    <h2 class="w3-text-light-grey">Contact Me</h2>
    <hr style="width:200px">
    <div class="contact section">
      <p><i class="location"></i> Nairobi, KE</p>
      <p><i class="phone"></i> Phone: <a href="Tel:+254711011011">+254711011011</a></p>
      <p><i class="email"> </i> Email: <a href="Email:addonay.osoro@student.moringaschool.com">addonay.osoro@student.moringaschool.com</a></p>
    </div><br>
    <p>Let's get in touch. Send me a message:</p>
    <form action="/action_page.php" target="_blank">
      <p><input class="textbox" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="textbox" type="text" placeholder="Email" required name="Email"></p>
      <p><input class="textbox" type="text" placeholder="Subject" required name="Subject"></p>
      <p><input class="textbox" id = "message" type="text" placeholder="Message" required name="Message"></p>
      <p>
        <button class="btnSubmit" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
    <div class="social-media">
      <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook fa-bounce"></i></a>
      <a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp fa-beat-fade"></i></a>
      <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram fa-bounce"></i></a>
      <a href="https://github.com/Addonay/Capture-Chronicles"><i class="fa-brands fa-github fa-beat-fade"></i></a>
    </div>
  `;
});
