import mainPicK9 from "/images/K9/main.jpg"
import k9create from "/images/K9/k9-create.jpg"
import k9detail from "/images/K9/k9-detail.jpg"
import k9filter from "/images/K9/k9-filter.jpg"
import mainPicScusi from "/images/scusi/main.jpg"

export const projects = [
  {
    image: mainPicK9,
    title: "K9 App",
    gallery: [mainPicK9, k9create, k9detail, k9filter],
    description: "I made this individual project for soyHenry's bootcamp. It consist of a SPA (Single Page Application) that consumes an API for existing breeds and allows you to create new ones. It also allows you to combine filtering and ordering for a better search",
    techs: ["React", "Redux", "Javascript", "CSS Module", "Node.js", "Express", "PostgreSQL", "Sequelize", "Vercel", "Render"],
    deploy: "https://pi-dogs-main-client-yras.vercel.app/",
    github: "https://github.com/jRicaud11/Pi-Dogs-main"
  },
  {
    image: mainPicScusi,
    title: "Mi Scusi Books",
    gallery: [],
    description: "This was the final group project for soyHenry's bootcamp. It consisted of 4 weeks of work under the SCRUM methodology, developing a book e-commerce. My rol was as a fullstack developer but focused mainly on routes development and database modeling.",
    techs: ["React", "Redux Toolkit", "MaterialUI", "Node.js", "Express", "MongoDB", "Mongo Atlas", "Mongoose", "PayPal", "Google OAuth2", "Ant Desing", "CSS", "Node Mailer", "JWT"],
    deploy: "https://mi-scusi-books.vercel.app/",
    github: "https://github.com/jRicaud11/Mi-Scusi-Books"
  }
]
