
// --- CONFIGURATION ---
const routes = {
    '/': 'terms_of_service.md',
    '/terms_of_service': 'terms_of_service.md',
    '/privacy_desktop_commander_mcp': 'mcp-privacy-policy.md',
    '/privacy_desktop_commander_app': 'desktop_commander_privacy_policy.md',
    '/website_privacy_policy': 'website_privacy_policy.md',
    '/404': '404.md'
};

const menuItems = [
    { "title": "Terms of Service", "url": "/terms_of_service" },
    { "title": "Privacy Policy for Desktop Commander MCP", "url": "/privacy_desktop_commander_mcp" },
    { "title": "Privacy Policy for Desktop Commander App", "url": "/privacy_desktop_commander_app" },
    { "title": "Website Privacy Policy", "url": "/website_privacy_policy" }
];

// --- DOM ELEMENTS ---
const contentEl = document.getElementById('content');
const navMenuEl = document.getElementById('navigation-menu');
const md = window.markdownit();


// --- FUNCTIONS ---

/**
 * Gets the current path from the URL hash.
 * @returns {string} The path (e.g., '/privacy_desktop_commander_mcp' from '#/privacy_desktop_commander_mcp')
 */
function getHashPath() {
    const hash = window.location.hash;
    return hash ? hash.substring(1) : '/'; // Remove the '#' prefix
}

/**
 * Loads and renders a markdown file into the content element.
 * @param {string} path The URL path to load content for.
 */
function loadContent(path) {
    const markdownFile = routes[path] || routes['/404'];
    const pageTitle = menuItems.find(item => item.url === path)?.title || "Document";
    document.title = `${pageTitle} | Legal Documents`;

    fetch(markdownFile)
        .then(response => {
            if (!response.ok) throw new Error(`File not found: ${markdownFile}`);
            return response.text();
        })
        .then(text => contentEl.innerHTML = md.render(text))
        .catch(err => {
            console.error(err);
            fetch(routes['/404'])
                .then(r => r.text())
                .then(t => contentEl.innerHTML = md.render(t));
        });
}

/**
 * Updates the navigation menu to highlight the current active page.
 * @param {string} path The current URL path.
 */
function updateNavigation(path) {
    const links = navMenuEl.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        const linkPath = href.startsWith('#') ? href.substring(1) : href;
        const isActive = (linkPath === path) || (path === '/' && linkPath === '/terms_of_service');
        link.className = `block text-lg ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`;
    });
}

/**
 * Builds the navigation menu from the `menuItems` array.
 */
function buildMenu() {
    navMenuEl.innerHTML = ''; // Clear loading text
    menuItems.forEach(item => {
        const link = document.createElement('a');
        link.href = '#' + item.url; // Use hash-based URLs
        link.textContent = item.title;
        link.onclick = (e) => {
            e.preventDefault();
            window.location.hash = item.url;
        };
        navMenuEl.appendChild(link);
    });
}


// --- INITIALIZATION ---

/**
 * Initializes the application.
 */
function initialize() {
    buildMenu();
    
    const initialPath = getHashPath();
    loadContent(initialPath);
    updateNavigation(initialPath);
}

// Listen for hash changes (including browser back/forward buttons)
window.onhashchange = () => {
    const path = getHashPath();
    loadContent(path);
    updateNavigation(path);
};

// Start the app!
initialize();
