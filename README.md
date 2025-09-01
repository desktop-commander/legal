
# Legal Documents Static Site

## Overview

This project is a simple, framework-free single-page application (SPA) designed to serve legal documents like a Privacy Policy and Terms of Use. It uses vanilla JavaScript for client-side routing and the `markdown-it` library to render Markdown files into a clean, styled HTML view.

The entire site is powered by a single `index.html` file, which dynamically loads and displays content based on the URL path. This approach allows for clean URLs (e.g., `/privacy`) without requiring a complex backend or server configuration.

### Core Technologies
- **HTML:** The basic structure of the application.
- **Tailwind CSS (CDN):** For modern, utility-first styling.
- **Vanilla JavaScript:** For all client-side logic, including routing and DOM manipulation.
- **markdown-it (CDN):** For converting Markdown files into HTML.
- **Markdown (`.md`):** As the source format for all legal documents.

---

## How It Works

### 1. Single-Page Application (SPA) Architecture
The entire user experience is contained within `/docs/index.html`. When a user navigates the site, the browser's page is never fully reloaded. Instead, JavaScript intercepts navigation events, fetches the appropriate content, and updates the view dynamically.

### 2. Client-Side Routing
The routing logic is handled by a small script inside `index.html`.
- A `routes` object maps URL paths (e.g., `/privacy`) to their corresponding Markdown files (e.g., `mcp-privacy-policy.md`).
- When a user clicks a link, `window.history.pushState()` is used to change the URL in the browser's address bar without triggering a page refresh.
- A `loadContent` function then finds the correct Markdown file based on the new URL path, fetches it, and renders its content into the main content area.
- The script also listens for the browser's back and forward button events (`onpopstate`) to handle history navigation correctly.

### 3. Navigation Menu
The navigation menu on the left is **hardcoded** as a JavaScript array named `menuItems` inside `index.html`. This array defines the title and URL for each link. The script dynamically generates the `<a>` tags from this array when the page loads.

### 4. GitHub Pages Hosting Strategy
To make the "pretty URLs" work on a static host like GitHub Pages, a special technique is used:
- GitHub Pages is configured to serve the `/docs` directory.
- When a request is made to a non-existent path like `your-site.com/privacy`, GitHub Pages serves the `/docs/404.html` file by default.
- Our `404.html` is an exact copy of `index.html`, but with an added script. This script captures the intended path (`/privacy`), stores it in `sessionStorage`, and immediately redirects the user to the root of the site (`index.html`).
- The `index.html` script checks `sessionStorage` on load. If it finds a redirected path, it immediately loads the content for that path. This happens seamlessly, making it appear as though the user landed directly on the correct page.

---

## How to Make Changes (Instructions for an LLM)

All configuration (routes and menu items) is located at the top of the `/docs/script.js` file. To add a new document, you only need to edit this one file and add the new Markdown (`.md`) file. The HTML files (`index.html` and `404.html`) will update automatically.

### Task: Add a New Document (e.g., "Cookie Policy")

1.  **Create the Markdown File:**
    -   Create a new file in the `/docs` directory (e.g., `/docs/cookie_policy.md`).
    -   Write the content for the Cookie Policy in Markdown format.

2.  **Update `script.js`:**
    -   Open `/docs/script.js`.
    -   At the top of the file, find the `routes` and `menuItems` constants.
    -   Add your new document to both constants.

    ```javascript
    // --- CONFIGURATION ---
    const routes = {
        '/': 'terms_of_use.md',
        '/terms_of_use': 'terms_of_use.md',
        '/privacy': 'mcp-privacy-policy.md',
        '/cookie_policy': 'cookie_policy.md', // <-- ADD THIS
        '/404': '404.md'
    };

    const menuItems = [
        { "title": "Terms of Service", "url": "/terms_of_use" },
        { "title": "Privacy Policy", "url": "/privacy" },
        { "title": "Cookie Policy", "url": "/cookie_policy" } // <-- AND ADD THIS
    ];
    ```
    - Save the file. The changes will be live.

### Task: Edit an Existing Document

-   To edit the content of a document, simply open the corresponding Markdown file in the `/docs` directory (e.g., `/docs/mcp-privacy-policy.md`) and make your changes.

### Task: Change the Styling
-   **Layout:** Modify the Tailwind CSS classes directly in the `<body>` of `/docs/index.html` and `/docs/404.html`.
-   **Rendered Markdown:** The styles for the rendered content are located in `/docs/style.css`. Modify this file to change the appearance.
