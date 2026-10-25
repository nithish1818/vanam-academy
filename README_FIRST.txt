VANAM ACADEMY — FIRST BUILD (FREE STARTER PROJECT)
==================================================

WHAT THIS IS
A working starter website for forestry learning, built with plain HTML, CSS and JavaScript. It includes:
- Responsive home page
- Searchable topic cards and subject filters
- Readable note pop-ups
- Five-question quiz with explanations and score
- Sample tree reference cards
- PWA manifest and service worker for install/offline app-shell support

IMPORTANT LIMITATIONS
- This is a starter prototype, not a finished commercial platform.
- The included notes and species descriptions are short examples. Review and expand them with standard forestry references and your syllabus.
- There is no user login, cloud database, admin dashboard, or live streaming yet.
- The Google Fonts import needs internet access; if offline, the browser uses fallback fonts.
- The PWA can be installed from a supported browser when served over HTTPS or localhost. Opening index.html by double-clicking will not enable service-worker/PWA features.
- GitHub Pages publishes public repository content. Do not put passwords, private student information, or copyrighted notes you do not have permission to distribute in the repository.

PART A — OPEN AND TEST ON WINDOWS
1. Download and extract vanam-academy.zip to a folder you can find, e.g. Desktop\vanam-academy.
2. Install Visual Studio Code from https://code.visualstudio.com/ if you do not have it.
3. In VS Code, choose File > Open Folder and open the extracted vanam-academy folder.
4. To test the ordinary page, double-click index.html. Search, notes and quiz should work.
5. To test the PWA/offline features, use a local web server. The easiest beginner route:
   a. Install Python from https://www.python.org/downloads/windows/ if it is not already installed. During setup, tick "Add Python to PATH" if that option appears.
   b. In VS Code, choose Terminal > New Terminal.
   c. If the terminal is not already in your project folder, type cd path-to-your-folder and press Enter. Example:
      cd "$HOME\Desktop\vanam-academy"
   d. Run:
      py -m http.server 8000
   e. Open http://localhost:8000 in Chrome.
   f. Keep the terminal open while testing. Press Ctrl+C in the terminal to stop the server.

PART B — PUBLISH FREE USING GITHUB PAGES
1. Create/sign in to a GitHub account: https://github.com/
2. Click + (top right) > New repository.
3. Repository name: vanam-academy
4. Choose Public. Do not upload private information. Click Create repository.
5. On the new repository page, choose "uploading an existing file" (or Add file > Upload files).
6. Upload the CONTENTS of the extracted vanam-academy folder: index.html, styles.css, app.js, manifest.json, sw.js, README_FIRST.txt, and the assets folder with both PNG icons. Do not upload only the ZIP.
7. Commit the files.
8. Open repository Settings > Pages.
9. Under Build and deployment, choose "Deploy from a branch"; select branch "main" and folder "/ (root)", then Save.
10. Wait for GitHub Pages to publish. Your site URL will look like:
    https://YOUR-GITHUB-USERNAME.github.io/vanam-academy/
   Replace YOUR-GITHUB-USERNAME with your actual username. This URL is an example pattern, not a verified live URL.
11. Open the published HTTPS site on your Android phone in Chrome. Use the browser menu and select "Install app" or "Add to Home screen" if available.

UPDATING CONTENT
- To edit notes, open app.js in VS Code.
- Find the "const notes = [" section. Each note has a title, summary, subject and sections array.
- Save, refresh the page and test.
- The quiz questions are in "const questions = [".
- Sample species are in "const species = [".
- Keep quotes and commas correctly formatted. If something breaks, undo the last edit and try again.

NEXT FEATURES TO ADD AFTER THIS WORKS
1. More thoroughly reviewed notes and diagrams
2. Topic-wise MCQs and previous-year questions used with permission
3. Admin dashboard and cloud database
4. User accounts and saved progress
5. Live classes/recordings
6. Optional packaged Android application

CONTENT QUALITY
Use your own writing, public-domain/openly licensed materials, or content you have permission to publish. Credit sources, keep references with each topic, and independently verify formulas, units and exam facts.

BRAND UPDATE
------------
This branded package replaces the placeholder app icons with the VANAM ACADEMY tree-and-book logo. Upload/commit the updated files to your existing GitHub repository to publish the logo changes.

PHOTO UPDATE
------------
The site header/footer use the exact photo supplied by the site owner, stored as assets/vanam-tree-photo.jpg. The PWA/browser icons use a square crop of that same photo because app icons require a square canvas. The original portrait photo is preserved in the assets folder.
