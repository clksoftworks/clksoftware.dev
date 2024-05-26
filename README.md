This is a [Next.js](https://nextjs.org/) project bootstrapped with [`c3`](https://developers.cloudflare.com/pages/get-started/c3).

## Getting Started
### System Requirements

* Node.js 18.17 or later.
* macOS, Windows (including WSL), and Linux are supported.

### Start Development Server
```bash
# Install dependencies
npm i

# Start local development server
# https://localhost:3000
npm run dev

# Start Cloudflare Pages preview server
# Preview your application on the Cloudflare Pages platform using `npm run pages:preview` to ensure compatibility.
npm run pages:preview
```

## Deployment
Any time you push to `main` a [GitHub Action builds](https://github.com/chrislkeefer/clksoftware.dev/actions/workflows/publish.yml) the application and deploys it to Cloudflare Pages.

![clksoftware dev-deployment-lifecycle](https://github.com/clksoftworks/clksoftware.dev/assets/42353349/ee333d29-386d-4119-951a-c9cd48dc5d7e)

## To Do
- [x] Setup continuous deployment
- [x] Create a placeholder screen using images
- [x] Update favicon 
- [x] Setup project desgin system
  - [x] Install fonts & configure Tailwind fonts
  - [ ] Setup Tailwind colors
- [ ] Export raw resources
  - [x] Map
  - [x] Lines
  - [x] Logo
  - [x] American Heart
- [ ] Write HTML
