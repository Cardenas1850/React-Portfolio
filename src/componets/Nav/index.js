import React from "react";

function Nav(props) {
    const {
      setCurrentPage
    } = props;
  
  return (
  
<header>
<h1>
<button data-testid="link" href="/">
</button>
</h1>
<nav>
    <ul>
        <li>
            <button data-testid="#about" onClick={() => setCurrentPage('About')}>
            About Me    
            </button>
        </li>
        <li>
            <button data-testid="#food-projects" onClick={() => setCurrentPage('Food-Projects')}>
               Food Recipes 
            </button>
        </li>
        <li>
            <button data-testid="projects" onClick={() => setCurrentPage('Projects')}>
                My Projects
            </button>
        </li>
        <li>
            <button data-testid="contact" onClick={() => setCurrentPage('Contact')}>
                Contact Me
            </button>
        </li>
    </ul>
</nav>
</header>  
  );
}




export default Nav;