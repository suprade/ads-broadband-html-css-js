# ADS Broadband — HTML/CSS/JS/Bootstrap version

This is the ADS Broadband website rebuilt without React or Vite.

## Stack
- HTML
- CSS (original project styling preserved)
- Vanilla JavaScript
- Bootstrap 5.3 CDN
- Netlify Function for `/api/leads`

## Important
- The visual design and content are carried over from the supplied React/Vite project.
- Internal navigation uses the History API, so buttons/links do not perform full-page reloads.
- Pincode availability uses the supplied `data/pincodes.json` data.
- Lead forms continue to POST to `/api/leads`.
- For Netlify, set the existing `GOOGLE_SHEET_WEBHOOK` environment variable.
- Run with a static server (for example VS Code Live Server) rather than opening `index.html` with `file://`.
