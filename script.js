// Example blog posts data
const blogPosts = [
    
        { 
            title: "Getting Started with HTML, CSS, and JavaScript",
            description: "Dive into the basics of web development!",
            date: "September 1, 2024",
            content: "This post covers the essentials of HTML, CSS, and JavaScript, the foundational technologies behind any website. Learn what each one does, how they work together, and get hands-on with simple examples to start building your first webpage."
        },
        { 
            title: "Responsive Web Design – Making Websites Look Great on Any Device",
            description: "With users accessing websites on screens of all sizes, responsive design has become essential.",
            date: "September 15, 2024",
            content: "This post explains how to make your website adaptable to different devices using CSS and Bootstrap. Learn about media queries, flexible layouts, and other techniques for creating a seamless experience on desktop, tablet, and mobile."
        },
        { 
            title: "JavaScript Essentials: Functions, Objects, and DOM Manipulation",
            description: "Key JavaScript concepts explained.",
            date: "October 5, 2024",
            content: "JavaScript can be overwhelming, but this post breaks it down into manageable parts. We'll explore key JavaScript concepts like functions, objects, and DOM manipulation. By the end, you'll know how to add interactivity to your web pages and create a more engaging user experience."
        },
        { 
            title: "An Introduction to Frontend Frameworks: React, Vue, and Angular",
            description: "Compare popular frontend frameworks.",
            date: "October 20, 2024",
            content: "React, Vue, and Angular are among the most popular frontend frameworks, each offering unique strengths. In this post, we compare these frameworks, discuss their benefits, and guide you on choosing the right one for your project. Perfect for those looking to take their skills to the next level."
        },
        { 
            title: "CSS Grid and Flexbox – Building Modern Layouts with Ease",
            description: "New layout techniques with CSS.",
            date: "November 1, 2024",
            content: "Gone are the days of awkward floats and positioning hacks. CSS Grid and Flexbox offer powerful tools for creating complex, responsive layouts with minimal code. This post guides you through the basics of each and demonstrates how they can be used to structure your website layout effectively."
        }
   
];

// Function to display the first two blog posts statically
function displayStaticBlogPosts() {
    const staticPostsContainer = document.getElementById('static-posts');
    blogPosts.slice(4).forEach((post, index) => {
        const postCard = `
        <div class="col-md-12 mb-4">
            <div class="card" onclick="openModal(${index})" style="cursor: pointer;">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <p class="card-text"><small class="text-muted">${post.date}</small></p>
                </div>
            </div>
        </div>`;
        staticPostsContainer.innerHTML += postCard;
    });
}

// Function to display remaining blog posts in a carousel
function displayCarouselBlogPosts() {
    const carouselInner = document.querySelector('#carousel-posts .carousel-inner');
    const carouselPosts = blogPosts.slice(0); // Take remaining posts after first two

    carouselPosts.forEach((post, index) => {
        const isActive = index === 0 ? 'active' : ''; // Set first slide as active
        const carouselItem = `
        <div class="carousel-item ${isActive}">
            <div class="card mx-auto" style="max-width: 30rem;" onclick="openModal(${index + 2})" style="cursor: pointer;">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <p class="card-text"><small class="text-muted">${post.date}</small></p>
                </div>
            </div>
        </div>`;
        carouselInner.innerHTML += carouselItem;
    });
}

// Function to open the modal with blog post details
function openModal(index) {
    const post = blogPosts[index];
    document.getElementById('postModalLabel').innerText = post.title;
    document.getElementById('postModalContent').innerText = post.content; // Ensure this refers to the 'content' property
    document.getElementById('postModalDate').innerText = post.date;

    // Show the modal
    const postModal = new bootstrap.Modal(document.getElementById('postModal'));
    postModal.show();
}
// Call functions to display blog posts on page load
document.addEventListener('DOMContentLoaded', () => {
    displayStaticBlogPosts();
    displayCarouselBlogPosts();
});

// Form Submission Logic for Contact (Dummy for now)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
