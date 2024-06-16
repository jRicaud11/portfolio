import astro from "/images/astro.png";
import css from "/images/css.png";
import express from "/images/express.png";
import gitLogo from "/images/Git.png";
import github from "/images/github.png";
import html from "/images/html.png";
import javascript from "/images/javascript.png";
import material from "/images/materialui.png";
import mongo from "/images/mongodb.png";
import node from "/images/NodeJs.png";
import postgre from "/images/postgreSQL.png";
import react from "/images/React.png";
import redux from "/images/Redux.png";
import scrum from "/images/scrum.png";
import trello from "/images/trello.png";
import sequelize from "/images/sequelize.png";
import mongoose from "/images/mongoosejs.png";

export interface Techs {
  back: {
    name: string;
    img: string;
  }[];
  front: {
    name: string;
    img: string;
  }[];
  tools: {
    name: string;
    img: string;
  }[];
}

export const techs: Techs = {
  back: [
    { name: "NodeJS", img: node },
    { name: "Express", img: express },
    { name: "MongoDB", img: mongo },
    { name: "Mongoose", img: mongoose },
    { name: "PostgreSQL", img: postgre },
    { name: "Sequelize", img: sequelize },
  ],
  front: [
    { name: "JavaScript", img: javascript },
    { name: "Astro", img: astro },
    { name: "CSS", img: css },
    { name: "HTML", img: html },
    { name: "MaterialUI", img: material },
    { name: "ReactJs", img: react },
    { name: "Redux", img: redux },
  ],
  tools: [
    { name: "Git", img: gitLogo },
    { name: "Github", img: github },
    { name: "Scrum", img: scrum },
    { name: "Trello", img: trello },
  ],
};
