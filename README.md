# Portfolio

Personal portfolio site for Arvinder Mundra: experience, education, skills and projects on a single page.

## Run locally

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Requires Node.js 20 or newer.

## Project structure

```
index.html
src/
  App.jsx              page layout
  components/          one component per section (Hero, About, Experience,
                       Education, Skills, Projects, Leadership, Contact, Footer)
  index.css, App.css   global styles; each component has its own CSS module
vercel.json            single-page rewrite rule for Vercel
```

Project cards are defined in `src/components/Projects.jsx`. Each card links to a public repository.

## Tech stack

JavaScript, React 19, Vite, Framer Motion, CSS modules. Deployed on Vercel.

## Author

Arvinder Mundra · [LinkedIn](https://www.linkedin.com/in/arvinder-mundraa) · [GitHub](https://github.com/arvindermundraa)
