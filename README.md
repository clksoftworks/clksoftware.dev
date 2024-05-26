> [!IMPORTANT]
> Any time you push to `main` a [GitHub Action builds](https://github.com/chrislkeefer/clksoftware.dev/actions/workflows/publish.yml) the application and deploys it to Cloudflare Pages.

![clksoftware dev-deployment-lifecycle](https://github.com/clksoftworks/clksoftware.dev/assets/42353349/ee333d29-386d-4119-951a-c9cd48dc5d7e)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`c3`](https://developers.cloudflare.com/pages/get-started/c3).

## Getting Started

Install dependencies:
```bash
npm i
```

Start Development Server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> __Note:__ while the `npm run dev` command is optimal for local developmentm, you should preview your Pages application using `npm run pages:preview` before deploying to ensure compatibility.


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
