# ZEROSECUIRTY Website

A responsive static website for ZEROSECUIRTY, a cybersecurity training institute in Belagavi, Karnataka. Built with HTML, CSS, and JavaScript for easy GitHub Pages hosting.

## Included

- `index.html` — homepage, course pricing, training modes, practical learning, career guidance form, FAQs, and contact section
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and enquiry form behavior
- `config.js` — editable contact configuration
- `privacy.html` and `terms.html` — starter policy pages; review before publishing
- `404.html` — simple not-found page
- `assets/favicon.svg` — site icon

## 1. Configure contact details first

Open `config.js` and replace the empty values:

```js
window.ZEROSECUIRTY_CONFIG = {
  whatsappNumber: "919876543210",
  contactEmail: "hello@example.com",
  instituteAddress: "Your confirmed address, Belagavi, Karnataka, India"
};
```

Use your real number and email. For WhatsApp, use country code plus digits only, with no `+`, spaces, or hyphens. You can configure WhatsApp, email, or both.

The forms validate entries and prepare a message to send via WhatsApp or an email application. They do not save submissions to a database and do not automatically confirm bookings. For database-backed submissions, use a secure backend or form service.

## 2. Preview locally

You can open `index.html` directly in a browser. For a more realistic local preview, use VS Code with the Live Server extension. This site has no build step and does not require Node.js.

## 3. Publish on GitHub Pages

1. Sign in to https://github.com.
2. Click **New repository**.
3. Name it `zerosecuirty-website`.
4. Choose **Public** (or confirm that your GitHub plan supports Pages for the repository visibility you choose).
5. Create the repository.
6. In the new repository, click **Add file → Upload files**.
7. Upload the *contents* of this project folder (including `index.html`, `styles.css`, `script.js`, `config.js`, `assets`, and `.nojekyll`). Do not upload only the ZIP file.
8. Commit the files to the `main` branch.
9. Open **Settings → Pages**.
10. Under **Build and deployment**, choose **Deploy from a branch**.
11. Select branch `main` and folder `/(root)`, then click **Save**.
12. Wait a few minutes and refresh the Pages section. GitHub will show the published URL, usually:
    `https://YOUR-GITHUB-USERNAME.github.io/zerosecuirty-website/`

If the repository is named `YOUR-GITHUB-USERNAME.github.io`, the site URL is instead `https://YOUR-GITHUB-USERNAME.github.io/`.

## 4. Updating the website

Edit a file on GitHub by opening it and choosing the pencil icon, or upload the changed files. Commit the changes. GitHub Pages will republish the static site automatically.

## Before launch checklist

- [ ] Add real WhatsApp number and/or email in `config.js`
- [ ] Confirm the full institute address and course schedules
- [ ] Test all links and forms after publishing
- [ ] Review privacy and terms pages for your actual business
- [ ] Remove or replace any information that is not accurate
- [ ] Verify authorization before claiming EC-Council Authorized Training Center status
- [ ] Do not claim placement outcomes, trainer credentials, or exam inclusions unless verified

## Notes

- This is a static website; GitHub Pages does not run server-side code or store form submissions.
- Fonts load from Google Fonts. If the external service is unavailable, the site falls back to system fonts.
- The site does not process payments, enrol students, or confirm appointments.
