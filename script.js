// Project Data
const projectsData = {
    p1: {
        title: "RAG Q&A Assistant",
        category: "AI & Gen AI",
        gradient: "linear-gradient(45deg, #2563eb, #06b6d4)",
        description: `Developed a robust Retrieval-Augmented Generation (RAG) pipeline using LangChain, FAISS, and Large Language Models to deliver accurate and context-aware answers. <br><br>
        Integrated semantic search with keyword-based retrieval to improve question-answering precision across structured and unstructured datasets. Implemented Reciprocal Rank Fusion (RRF) to combine multiple retrieval signals, significantly enhancing response relevance. Evaluated the system on enterprise-style datasets, achieving faster response times and more relevant answers compared to baseline LLM approaches.`,
        tech: ["Python", "LangChain", "FAISS", "LLMs", "RRF", "Semantic Search"],
        links: {
            demo: "#",
            github: "https://github.com/Saty290501"
        }
    },
    p2: {
        title: "Brain Tumor Detection",
        category: "Deep Learning",
        gradient: "linear-gradient(45deg, #059669, #10b981)",
        description: `Developed a deep learning-based brain tumor classification system using VGG16 CNN on MRI datasets to classify MRI images into glioma, meningioma, pituitary tumor, and no tumor categories.<br><br>
        Performed extensive data preprocessing including resizing, normalization, and data augmentation to improve model robustness. Evaluated model performance using accuracy, precision, recall, and F1-score, achieving 95% training accuracy and 87% validation accuracy. Deployed the model using Gradio to enable real-time predictions.`,
        tech: ["Python", "TensorFlow", "Keras", "VGG16", "Gradio", "OpenCV"],
        links: {
            demo: "#",
            github: "https://github.com/Saty290501"
        }
    },
    p3: {
        title: "Cloud Image Processing",
        category: "Cloud Native",
        gradient: "linear-gradient(45deg, #7c3aed, #db2777)",
        description: `Designed and worked on cloud-native pipelines for real-time image processing utilizing AWS services (EC2, Lambda, Rekognition, S3).<br><br>
        Implemented event-driven architectures using Apache Kafka for real-time data streaming and managed the data layer using MongoDB for efficient storage and retrieval. Automated workflows using Python and Shell scripting.`,
        tech: ["AWS", "Lambda", "Kafka", "MongoDB", "Python", "Docker"],
        links: {
            demo: "#",
            github: "https://github.com/Saty290501"
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // --- Clock Functionality ---
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        const dateString = now.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });

        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.textContent = `${timeString}, ${dateString.toUpperCase()}`;
        }
    }
    setInterval(updateTime, 1000);
    updateTime();

    // --- Elements ---
    const navPills = document.querySelectorAll('.nav-pill');
    const sections = document.querySelectorAll('.content-section');
    const headerTitle = document.querySelector('.content-header h2');

    // Elements for Project Details
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-section');
    const filterBar = document.querySelector('.filter-bar');
    const detailView = document.getElementById('project-details-view');
    const backBtn = document.getElementById('back-to-projects');

    // --- Project Detail Functions ---
    function showProjectDetails(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        // Populate Data
        document.getElementById('detail-title').textContent = project.title;
        document.getElementById('detail-category').textContent = project.category;
        document.getElementById('detail-desc').innerHTML = project.description;

        // Update Banner Image
        const bannerImg = document.getElementById('detail-img-placeholder');
        if (bannerImg && project.gradient) {
            bannerImg.style.background = project.gradient;
        }

        // Tech Tags
        const techContainer = document.getElementById('detail-tech');
        techContainer.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');

        // Links
        document.getElementById('detail-demo').href = project.links.demo;
        document.getElementById('detail-github').href = project.links.github;

        // Animate View Switch
        projectsGrid.style.display = 'none';
        filterBar.style.display = 'none';

        // Ensure detail view is visible and display flex
        detailView.classList.remove('project-details-hidden');
        detailView.classList.add('project-details-visible');
    }

    function hideProjectDetails() {
        detailView.classList.remove('project-details-visible');
        detailView.classList.add('project-details-hidden');

        // Wait for animation or immediate switch
        setTimeout(() => {
            projectsGrid.style.display = 'grid';
            filterBar.style.display = 'flex';
        }, 50);
    }

    // --- Event Listeners: Project Cards ---
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const pid = card.getAttribute('data-id');
            showProjectDetails(pid);
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', hideProjectDetails);
    }

    // --- Navigation Logic ---
    navPills.forEach(nav => {
        nav.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Update Active Nav State
            navPills.forEach(n => n.classList.remove('active'));
            nav.classList.add('active');

            // 2. Get Target Section
            const targetId = nav.getAttribute('href').substring(1); // remove '#'

            // If navigating away from portfolio, ensure detail view is closed
            if (targetId !== 'portfolio' && detailView) {
                hideProjectDetails();
            }

            // 3. Update Content View
            sections.forEach(section => {
                section.style.display = 'none';
                if (section.id === targetId) {
                    section.style.display = 'block';
                }
            });

            // 4. Update Header Title
            const navText = nav.querySelector('span').textContent;
            headerTitle.textContent = navText;
        });
    });

    // --- Filter Pills Interaction ---
    const filterPills = document.querySelectorAll('.filter-pill');

    // Map filter text to category keys used in index.html/data setup
    // Actually, looking at index.html, we didn't add data-category to cards yet.
    // Let's rely on the projectsData object for categories or add data-attrs in index.html
    // For simplicity, let's filter by the project ID which maps to the data.

    // Better approach: Add data-category to cards in index.html first? 
    // Or just use the already defined projectsData to check category.

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // 1. UI Active State
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // 2. Filter Logic
            const filterText = pill.innerText.trim(); // "ALL", "AI/ML", "CLOUD"

            projectCards.forEach(card => {
                const pid = card.getAttribute('data-id');
                const project = projectsData[pid];

                if (!project) return;

                // Text Matching Logic
                let shouldShow = false;
                if (filterText === 'ALL') {
                    shouldShow = true;
                } else if (filterText === 'AI/ML') {
                    // Check if category includes AI or Deep Learning
                    if (project.category.includes('AI') || project.category.includes('Deep Learning')) {
                        shouldShow = true;
                    }
                } else if (filterText === 'CLOUD') {
                    if (project.category.includes('Cloud')) {
                        shouldShow = true;
                    }
                }

                // Toggle Visibility
                if (shouldShow) {
                    card.style.display = 'flex';
                    // Restore animation/layout if needed
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
