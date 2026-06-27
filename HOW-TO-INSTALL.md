# Daily Brief – How to Install

## What you have
A Progressive Web App (PWA) — works like a real app on Android, iPhone, and Windows PC.
No app store needed. Free to host.

---

## Step 1 — Host it free on GitHub Pages (10 minutes)

1. Go to **github.com** and create a free account if you don't have one.
2. Click the **+** button (top right) → **New repository**
3. Name it: `daily-brief` (or anything you like)
4. Set it to **Public**, tick "Add README", click **Create repository**
5. Click **Add file** → **Upload files**
6. Upload ALL the files from this folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - The `icons` folder (both .png files inside it)
7. Click **Commit changes**
8. Go to **Settings** (tab at top) → **Pages** (left sidebar)
9. Under "Source", set branch to `main`, folder to `/ (root)`
10. Click **Save**
11. Wait 1–2 minutes, then your app will be live at:
    `https://YOUR-USERNAME.github.io/daily-brief/`

---

## Step 2 — Install on Android (feels like a native app)

1. Open Chrome on your Android phone
2. Go to your GitHub Pages URL above
3. Tap the **three dots menu** (top right)
4. Tap **"Add to Home screen"** or **"Install app"**
5. Tap **Install**

It now appears on your home screen with its own icon, opens fullscreen like a real app.

---

## Step 3 — Install on iPhone

1. Open **Safari** on your iPhone (must be Safari, not Chrome)
2. Go to your GitHub Pages URL
3. Tap the **Share button** (box with arrow at bottom)
4. Scroll down and tap **"Add to Home Screen"**
5. Tap **Add**

It now appears on your home screen.

---

## Step 4 — Install on Windows PC

1. Open **Chrome** or **Edge**
2. Go to your GitHub Pages URL
3. Look for the **install icon** in the address bar (a small computer/+ icon)
4. Click it and follow the prompt

Or in Edge: Menu → Apps → Install this site as an app

---

## Updating the app

To change news sources or anything else, just edit `index.html` and re-upload it to GitHub.
The app will update automatically for everyone within a few minutes.

---

## How the news fetching works

The app uses **rss2json.com** as a free middleman — it fetches RSS feeds from news sites
and converts them into a format your app can read. Free tier = 10,000 requests/day,
which is plenty for personal use.

Sources included:
- 🇮🇪 RTÉ News, The Journal, Irish Times, Irish Examiner, Newstalk
- 🌍 BBC World, The Guardian, Reuters, Al Jazeera
- ⚖️ Guardian Politics, BBC Politics, Politico EU
- 📈 Guardian Economics, Reuters Business, Irish Times Business

---

## Questions?
Ask Claude to modify anything — add sources, change colours, add categories, etc.
