import React from "react";
import Fade from "react-reveal/Fade";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function MMImages() {
        document.title='Mac Motors Database';
    return (
        <Fade>
        <div id="projectStyle">
            <p>This personal project saw me creating a establishing a car dealership database, which 
            involved creating an Entity Relationship diagram in order to define the relationships between tables, their 
            attributes and how different users would interact with the database. I used XAMPP, which implemented myphpAdmin 
            and MariaDB to create the SQL database. I then connented to the database using the web server scripting language, 
            PHP. After I had successfully established a connection, I set about writing code that would allow PHP to create 
            an SQL query to display the desired table in the database in a table layout on a webpage, and subsequently 
            queries that would allow the user to add, delete and edit information within the tables of the database.</p>
            
            <SRLWrapper>
            <div id="gallery">
                <a /*Main Image*/href="./images/mm/entity_diagram.jpg " data-attribute="SRL">
                    <img /*Thumbnail*/src="./images/mm/entity_diagram_s.jpg" alt="Database Entity Diagram"/>
                </a>
                <a href="./images/mm/entity_diagram2.png" data-attribute="SRL" className="hidden">
                    <img src="./images/mm/entity_diagram2.png" alt="Simplified Entity Diagram"/>
                </a>
                <a href="./images/mm/drop_down_desktop.png" data-attribute="SRL">
                    <img src="images/mm/drop_down_s.jpg" alt="Mac Motors Homepage" />
                </a>
                <a href="./images/mm/hamburger_dropdown.jpg" data-attribute="SRL" className="hidden">
                    <img src="./images/mm/hamburger_dropdown.jpg" alt="Hamburger Dropdown Menu" />
                </a>
                <a href="./images/mm/selectAllcode.png" data-attribute="SRL">
                    <img src="./images/mm/selectAllcode_s.png" alt="PHP code to select and display all employees" />
                </a>
                <a href="./images/mm/viewAll.png" data-attribute="SRL">
                    <img src="./images/mm/viewAll_s.png" alt="Output of select all employees code" />
                </a>
                <a href="./images/mm/addEmployee.png" data-attribute="SRL">
                    <img src="images/mm/addEmployee_s.png" alt="Add employee table." />
                </a>
                <a href="./images/mm/addEmployee_responsive.png" data-attribute="SRL" className="hidden" >
                    <img src="./images/mm/addEmployee_responsive.png" alt="Add employee table responsive." />
                </a>
            </div>

            <div id="video">
                <h3>Mac Motors Car Dealership Database demo.</h3>
                <iframe title="Mac Motors Car Dealership Database demo YouTube video" src="https://www.youtube.com/embed/26Fg4ZxeZLQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0"></iframe>
            </div>

            <div id="links">
                <a href="https://github.com/CoreyDennison/Car-Dealership-w-SQL-php" target="_blank" rel="noopener noreferrer">Project source code on GitHub.</a>
                <a href="https://coreydennison.wordpress.com/2020/06/22/car-dealership-database/" target="_blank" rel="noopener noreferrer">Wordpress Blog article on this project.</a>
            </div>
            </SRLWrapper> 
        </div>
        </Fade>
    );
}

export default MMImages;