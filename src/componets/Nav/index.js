import React from "react";

function Nav(props) {
    const {
      setCurrentPage
    } = props;
  
  return (
  
<header>
<h1>
<a data-testid="link" href="/">
</a>
</h1>
<nav>
    <ul>
        <li>
            <a data-testid="#about" onClick={() => setCurrentPage('About')}>
            About Me    
            </a>
        </li>
        <li>
            <a data-testid="#food-projects" onClick={() => setCurrentPage('Food-Projects')}>
               Food Recipes 
            </a>
        </li>
        <li>
            <a data-testid="projects" onClick={() => setCurrentPage('Projects')}>
                My Projects
            </a>
        </li>
        <li>
            <a data-testid="contact" onClick={() => setCurrentPage('Contact')}>
                Contact Me
            </a>
        </li>
    </ul>
</nav>
</header>  
  );
}




export default Nav;