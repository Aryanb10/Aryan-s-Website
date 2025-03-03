document.addEventListener('DOMContentLoaded', function() {
    // Function to show specific page
    window.showPage = function(pageId) { // Make it global to access from inline onclick
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            // Optionally, scroll to top when navigating
            window.scrollTo(0, 0);
        } else {
            console.warn(`No page found with ID: ${pageId}`);
        }
    };

    // Projects data
    const projects = [
        { id: 1, title: "Women Safety Analysis", description: "A comprehensive analysis and solution for enhancing women's safety in urban environments." },
        { id: 2, title: "Presentation Controller using Gesture & Voice Detection", description: "An advanced interface that allows users to control presentations using hand gestures and voice commands." },
        { id: 3, title: "Lunar Landing using DQ Network", description: "A simulation of lunar landing using Deep Q-Learning Network for optimal control." },
        { id: 4, title: "Random Anime Generator", description: "A fun tool that generates random anime recommendations based on user preferences." }
    ];

    // Team members data
    const teamMembers = [
        { name: "Vabby", role: "Team Lead" },
        { name: "Xaneliar", role: "Software Developer" },
        { name: "Hyele", role: "UX Designer" },
        { name: "Nira", role: "Data Scientist" }
    ];

    // Populate projects
    function populateProjects() {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectList.appendChild(card);
        });

        // Populate recent projects in sidebar
        const recentProjects = document.getElementById('recent-projects');
        recentProjects.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#projects" onclick="showPage('projects')">${project.title}</a>`;
            recentProjects.appendChild(li);
        });
    }

    // Populate team members
    function populateTeam() {
        const teamGrid = document.querySelector('.team-grid');
        teamGrid.innerHTML = '';
        teamMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'team-member';
            memberCard.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            `;
            teamGrid.appendChild(memberCard);
        });
    }

    // Search functionality
    const projectSearchInput = document.getElementById('project-search');
    if (projectSearchInput) {
        projectSearchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProjects = projects.filter(project => 
                project.title.toLowerCase().includes(searchTerm) || 
                project.description.toLowerCase().includes(searchTerm)
            );
            const projectList = document.getElementById('project-list');
            projectList.innerHTML = '';
            filteredProjects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                projectList.appendChild(card);
            });

            // Optionally, update Recent Projects if needed
            // (This depends on desired behavior)
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
        });
    }

    // Form submissions
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality would be implemented here.');
            loginForm.reset();
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sign up functionality would be implemented here.');
            signupForm.reset();
        });
    }

    const forgotPasswordForm = document.getElementById('forgot-password-form');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Password reset instructions would be sent to the provided email.');
            forgotPasswordForm.reset();
        });
    }

    // Initialize projects and team
    populateProjects();
    populateTeam();

    // Optional: Handle navigation links dynamically
    const navLinks = document.querySelectorAll('nav ul li a, .sidebar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const pageId = href.substring(1); // Remove the '#' character
            showPage(pageId);
        });
    });
});
