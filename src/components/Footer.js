import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          Simply Recipes
        </a>
        . Built with{" "}
        <a href="https://gatsbyjs.com" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer
