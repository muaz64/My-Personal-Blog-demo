// Example blog posts data
const blogPosts = [
    {
        title: "Post 1: Introduction to Blogging",
        description: "Learn the basics of blogging and how to get started in this exciting world of content creation.",
        date: "September 25, 2024"
    },
    {
        title: "Post 2: The Power of Personal Branding",
        description: "Discover how personal branding can elevate your blog and help you build a loyal audience.",
        date: "October 5, 2024"
    },
    {
        title: "Post 3: Top 5 Blogging Tools in 2024",
        description: "Explore the must-have tools for bloggers to stay productive and create stunning content.",
        date: "October 15, 2024"
    }
];

// Function to display blog posts dynamically
function displayBlogPosts() {
    const postList = document.getElementById('post-list');
    blogPosts.forEach(post => {
        const postCard = `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <p class="card-text"><small class="text-muted">${post.date}</small></p>
                </div>
            </div>
        </div>
        `;
        postList.innerHTML += postCard;
    });
}

// Call the function to display blog posts on page load
document.addEventListener('DOMContentLoaded', displayBlogPosts);

// Form Submission Logic for Contact (Dummy for now)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
