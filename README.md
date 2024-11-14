# Fyrre - Art & Life Magazine Website

An arts and life magazine website build as an SPA(Single-Page-Application) using Next.js, TypeScript, TailwindCSS, Shadcn and incorporate E2E testing using Playwright.

The website is designed by [Pawel Gola](https://gola.io/) with [Webflow](https://webflow.com/templates/html/fyrre-magazine-website-template). Developed with inspiration from [Figma](https://www.figma.com/community/file/1136023191939170511) and [Youtube](https://www.youtube.com/watch?v=EcfBnDPZT6w).

<img src="https://i.ibb.co/K0scVL8/Screenshot-2024-11-14-131201.png" alt="Sample Image" width="80%">

Features:

- Dynamic rendering of podcast, article and author data
- Dynamic filtering of magazine articles based on categories
- [React Suspense](https://react.dev/reference/react/Suspense) for UI loading states until async fetched content is available
- React Context API to store data fetched at top level
- [Shadcn](https://ui.shadcn.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for mobile-first responsiveness
- E2E testing across multiple browsers using [Playwright](https://playwright.dev/)
- Husky to run lint and testing
- React Hook form with [Zod](https://zod.dev/) Schema validation for email subscription input

Website: [link](https://fyrre-magazine-puce.vercel.app/)

## Steps to reproduce:

### Clone the repo

```shell
git clone https://github.com/alvinle2901/Fyrre-Magazine.git
```

### Install dependencies

```shell
npm install
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm run dev
```

