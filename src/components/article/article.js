import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Technology from "../technology/technology"

import bgMini from "../../images/article-background-mini.svg"
import "./article.css"

const Article = props => {
  return (
    <Link to={props.path}>
      <div className="shadow-md article p-6 pl-8 pr-8 mt-6 relative hover:shadow-xl transition-shadow duration-200 ease-in-out">
        <img
          src={bgMini}
          className="absolute bg-mini"
          alt="background-article"
        />
        <h1 className="text-2xl font-extrabold mt-1 mb-2">{props.title}</h1>
        <div className="mt-1 mb-1 flex items-center">
          {props.technologies &&
            props.technologies.map(technology => (
              <Technology name={technology} key={technology} />
            ))}
          {props.timeToRead && <span>{props.timeToRead} min read</span>}
        </div>
        <p>{props.description}</p>
      </div>
    </Link>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
}

export default Article
