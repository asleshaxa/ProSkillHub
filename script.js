// Course Interaction Script
document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        {
            id: 'intro_programming',
            title: 'Introduction to Programming',
            description: 'Learn the foundations of programming in an easy-to-follow course.',
            category: 'Programming',
            difficulty: 'Beginner'
        },
        {
            id: 'business_strategies',
            title: 'Advanced Business Strategies',
            description: 'Master business techniques to enhance your strategic planning.',
            category: 'Business',
            difficulty: 'Intermediate'
        },
        {
            id: 'creative_writing',
            title: 'Creative Writing for Beginners',
            description: 'Express yourself and improve your writing with practical tips.',
            category: 'Writing',
            difficulty: 'Beginner'
        },
        {
            id: 'web_development',
            title: 'Web Development Masterclass',
            description: 'Build modern websites with cutting-edge tools and techniques.',
            category: 'Programming',
            difficulty: 'Advanced'
        }
    ];

    // Create course search and filter functionality
    function createCourseInterface() {
        const coursesSection = document.querySelector('.courses');
        if (!coursesSection) return;

        // Create search and filter container
        const filterContainer = document.createElement('div');
        filterContainer.innerHTML = `
            <div class="course-filters" style="text-align: center; margin-bottom: 20px;">
                <input type="text" id="course-search" placeholder="Search courses..." 
                    style="padding: 10px; width: 300px; margin-right: 10px;">
                <select id="category-filter" style="padding: 10px;">
                    <option value="">All Categories</option>
                    <option value="Programming">Programming</option>
                    <option value="Business">Business</option>
                    <option value="Writing">Writing</option>
                </select>
                <select id="difficulty-filter" style="padding: 10px;">
                    <option value="">All Difficulties</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
        `;
        coursesSection.insertBefore(filterContainer, coursesSection.firstChild);

        // Get filter elements
        const searchInput = document.getElementById('course-search');
        const categoryFilter = document.getElementById('category-filter');
        const difficultyFilter = document.getElementById('difficulty-filter');

        // Render courses
        function renderCourses(filteredCourses) {
            // Remove existing courses
            const existingCourses = document.querySelectorAll('.course');
            existingCourses.forEach(course => course.remove());

            // Create course elements
            filteredCourses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.classList.add('course');
                courseElement.innerHTML = `
                    <h3 style="color: orangered;">#${course.title}</h3>
                    <p style="color: bisque;">${course.description}</p>
                    <div class="course-details" style="color: bisque; font-size: 0.8em;">
                        <span>Category: ${course.category}</span>
                        <span>Difficulty: ${course.difficulty}</span>
                    </div>
                `;
                coursesSection.appendChild(courseElement);
            });
        }

        // Filter function
        function filterCourses() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const selectedDifficulty = difficultyFilter.value;

            const filteredCourses = courses.filter(course => {
                const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                                      course.description.toLowerCase().includes(searchTerm);
                const matchesCategory = !selectedCategory || course.category === selectedCategory;
                const matchesDifficulty = !selectedDifficulty || course.difficulty === selectedDifficulty;

                return matchesSearch && matchesCategory && matchesDifficulty;
            });

            renderCourses(filteredCourses);
        }

        // Add event listeners
        searchInput.addEventListener('input', filterCourses);
        categoryFilter.addEventListener('change', filterCourses);
        difficultyFilter.addEventListener('change', filterCourses);

        // Initial render
        renderCourses(courses);
    }

    // Initialize course interface
    createCourseInterface();
});






// Form Validation and Submission Script
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate Name
            const nameInput = document.getElementById('name');
            const nameError = document.createElement('div');
            nameError.style.color = 'red';
            nameError.style.fontSize = '0.8em';
            
            if (nameInput.value.trim().length < 2) {
                nameError.textContent = 'Please enter a valid name';
                nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
                return;
            } else {
                const existingError = nameInput.nextSibling;
                if (existingError && existingError.style.color === 'red') {
                    existingError.remove();
                }
            }
            
            // Validate Email
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailError = document.createElement('div');
            emailError.style.color = 'red';
            emailError.style.fontSize = '0.8em';
            
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);
                return;
            } else {
                const existingError = emailInput.nextSibling;
                if (existingError && existingError.style.color === 'red') {
                    existingError.remove();
                }
            }
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.color = 'green';
            successMessage.style.fontWeight = 'bold';
            contactForm.appendChild(successMessage);
            
            // Clear form
            contactForm.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }

    // Enrollment Form Validation
    const enrollForm = document.querySelector('.enroll form');
    if (enrollForm) {
        enrollForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate Name
            const nameInput = document.getElementById('name');
            const nameError = document.createElement('div');
            nameError.style.color = 'red';
            nameError.style.fontSize = '0.8em';
            
            if (nameInput.value.trim().length < 2) {
                nameError.textContent = 'Please enter a valid name';
                nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
                return;
            } else {
                const existingError = nameInput.nextSibling;
                if (existingError && existingError.style.color === 'red') {
                    existingError.remove();
                }
            }
            
            // Validate Email
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailError = document.createElement('div');
            emailError.style.color = 'red';
            emailError.style.fontSize = '0.8em';
            
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);
                return;
            } else {
                const existingError = emailInput.nextSibling;
                if (existingError && existingError.style.color === 'red') {
                    existingError.remove();
                }
            }
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Enrollment submitted successfully!';
            successMessage.style.color = 'green';
            successMessage.style.fontWeight = 'bold';
            enrollForm.appendChild(successMessage);
            
            // Clear form
            enrollForm.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }
});





//chatbot
document.addEventListener('DOMContentLoaded', function() {
    // Chat Bot Responses
    const chatResponses = {
        greetings: [
            "Hello! How can I help you today?",
            "Welcome to ProSkill Hub support. What can I assist you with?",
            "Hi there! Ready to answer your questions about our courses."
        ],
        courses: [
            "We offer courses in Programming, Business, Writing, and Web Development.",
            "Our courses range from beginner to advanced levels.",
            "Each course comes with a certificate of completion."
        ],
        pricing: [
            "We have flexible pricing plans starting from $9.99 per month.",
            "Check out our Professional plan for the best value.",
            "Enterprise plans offer unlimited course access."
        ],
        default: [
            "I'm not sure about that. Could you please rephrase?",
            "Let me connect you with a human representative .",
            "I'm still learning. Can you provide more details?"
        ]
    };

    // Create Chat Widget
    function createChatWidget() {
        // Chat Widget Container
        const chatWidget = document.createElement('div');
        chatWidget.id = 'chat-widget';
        chatWidget.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            display: none;
            flex-direction: column;
            z-index: 1000;
        `;

        // Chat Header
        const chatHeader = document.createElement('div');
        chatHeader.style.cssText = `
            background-color: #FF6F61;
            color: white;
            padding: 10px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        chatHeader.innerHTML = `
            <span>ProSkill Hub Support</span>
            <button id="close-chat" style="background:none; border:none; color:white; font-size:20px;">&times;</button>
        `;

        // Chat Messages Container
        const chatMessages = document.createElement('div');
        chatMessages.id = 'chat-messages';
        chatMessages.style.cssText = `
            flex-grow: 1;
            overflow-y: auto;
            padding: 10px;
            max-height: 300px;
        `;

        // Chat Input Area
        const chatInput = document.createElement('div');
        chatInput.style.cssText = `
            display: flex;
            padding: 10px;
            border-top: 1px solid #eee;
        `;
        chatInput.innerHTML = `
            <input type="text" id="chat-text-input" placeholder="Type your message..." style="flex-grow: 1; padding: 5px;">
            <button id="send-message" style="background-color: #4A90E2; color: white; border: none; padding: 5px 10px;">Send</button>
        `;

        // Assemble Chat Widget
        chatWidget.appendChild(chatHeader);
        chatWidget.appendChild(chatMessages);
        chatWidget.appendChild(chatInput);
        document.body.appendChild(chatWidget);

        // Chat Launcher Button
        const chatLauncher = document.createElement('button');
        chatLauncher.id = 'chat-launcher';
        chatLauncher.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #FF6F61;
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 30px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            z-index: 1000;
            cursor: pointer;
        `;
        chatLauncher.innerHTML = '💬';
        document.body.appendChild(chatLauncher);

        // Add Event Listeners
        const closeChatBtn = document.getElementById('close-chat');
        const chatTextInput = document.getElementById('chat-text-input');
        const sendMessageBtn = document.getElementById('send-message');

        // Toggle Chat Widget
        chatLauncher.addEventListener('click', () => {
            chatWidget.style.display = 'flex';
            chatLauncher.style.display = 'none';
            addChatMessage('bot', chatResponses.greetings[Math.floor(Math.random() * chatResponses.greetings.length)]);
        });

        // Close Chat
        closeChatBtn.addEventListener('click', () => {
            chatWidget.style.display = 'none';
            chatLauncher.style.display = 'block';
        });

        // Send Message
        function sendMessage() {
            const message = chatTextInput.value.trim();
            if (message) {
                // User Message
                addChatMessage('user', message);
                chatTextInput.value = '';

                // Simulate Bot Response
                setTimeout(() => {
                    const response = generateBotResponse(message);
                    addChatMessage('bot', response);
                }, 1000);
            }
        }

        // Send on Button Click
        sendMessageBtn.addEventListener('click', sendMessage);

        // Send on Enter Key
        chatTextInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // Generate Bot Response
        function generateBotResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase();
            
            if (lowerMessage.includes('course') || lowerMessage.includes('learn')) {
                return chatResponses.courses[Math.floor(Math.random() * chatResponses.courses.length)];
            }
            
            if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
                return chatResponses.pricing[Math.floor(Math.random() * chatResponses.pricing.length)];
            }
            
            return chatResponses.default[Math.floor(Math.random() * chatResponses.default.length)];
        }

        // Add Message to Chat
        function addChatMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.style.cssText = `
                margin: 10px 0;
                padding: 10px;
                border-radius: 10px;
                max-width: 80%;
                clear: both;
            `;

            if (sender === 'user') {
                messageElement.style.backgroundColor = '#4A90E2';
                messageElement.style.color = 'white';
                messageElement.style.alignSelf = 'flex-end';
                messageElement.style.marginLeft = 'auto';
            } else {
                messageElement.style.backgroundColor = '#f1f0f0';
                messageElement.style.color = 'black';
                messageElement.style.alignSelf = 'flex-start';
            }

            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Initialize Chat Widget
    createChatWidget();
});