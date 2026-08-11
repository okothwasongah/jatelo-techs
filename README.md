# Jatelo Technologies — Portfolio Site

Single-page portfolio for Jatelo Technologies Limited, served as a static
site behind a tiny Express server (so it runs cleanly on Railway).

## Project structure

```
.
├── public/
│   └── index.html      # the full portfolio page (self-contained)
├── server.js            # Express static server
├── package.json
├── railway.json          # Railway build/deploy config
├── Procfile               # fallback start command
└── .gitignore
```

## Deploy to Railway from GitHub

1. **Push this folder to a new GitHub repo.**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Jatelo Technologies portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Create a new Railway project**
   - Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**.
   - Select the repo you just pushed.
   - Railway will detect `package.json`, install dependencies with Nixpacks,
     and run `npm start` automatically (also defined in `railway.json` /
     `Procfile` as a safety net).

3. **Set the port (optional)**
   - Railway injects `PORT` automatically — `server.js` already reads
     `process.env.PORT`, so no configuration is needed.

4. **Custom domain (e.g. jatelo-techs.com)**
   - In Railway: your service → **Settings** → **Networking** → **Custom Domain**.
   - Add the domain, then create the CNAME/TXT records Railway gives you at
     your DNS provider (Host Africa, per your existing setup).

## Local development

```bash
npm install
npm start
# visit http://localhost:3000
```

## Updating the site

Edit `public/index.html` directly (it's a single self-contained file — logo,
fonts, and scripts are all inline), commit, and push. Railway will
auto-redeploy on every push to `main`.
