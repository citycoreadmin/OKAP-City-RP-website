# OKAP CITY RP

The public website for OKAP CITY RP, an original cinematic roleplay project currently in development. The cityscape is original conceptual artwork, not official game footage.

## Local development

Requires Node.js 20.19+ and npm. No environment variables, accounts, databases, or backend services are required.

```sh
npm install
npm run dev
```

The site supports Haitian Creole, English, French, and Arabic, with right-to-left layout for Arabic. The four regional Discord invitations are linked from the homepage and `/community`. Official TikTok, Instagram, X, and YouTube accounts link from the navigation, footer, and homepage. Game downloads, the official trailer, and game release information are clearly marked as coming soon; no release date or platform availability is implied.

## Validation

```sh
npm test
npm run build
```

The project is not deployed. Official game screenshots, trailer footage, and legal text should be supplied and reviewed before launch.

## Concept images

Promotional artwork is concept visuals, not official gameplay screenshots, and is labelled as such on the site. Place the supplied originals, unmodified, in `public/images/`: `hero-city.jpg` (homepage background), `police.jpg`, `army.jpg`, `medics.jpg`, and `fbi.jpg`. Next.js serves optimized responsive versions at high quality.
