import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function MMImages() {
        document.title='Mac Motors Database';
    return (
        
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
                <a /*Main Image*/href="images/artist/abmm.jpg" data-attribute="SRL">
                    <img /*Thumbnail*/src="images/artist/abmm_s.jpg" alt="Spotify Battle App mindmap" />
                </a>
                <a href="images/artist/app_wireframe.png" data-attribute="SRL">
                    <img src="/images/artist/app_wireframe_s.jpg" alt="App wireframe" />
                </a>
                <a href="images/artist/login.png" data-attribute="SRL">
                    <img src="/images/artist/login_s.jpg" alt="App login" />
                </a>
                <a href="images/artist/battle3.png" data-attribute="SRL">
                    <img src="/images/artist/artist_battle.jpg" alt="Spotify Battle App Demo" />
                </a>
            </div>

            <div id="links">
                <a href="https://github.com/CoreyDennison/theJoyOfCha">Source code on GitHub.</a>
            </div>
            </SRLWrapper> 
        </div>
    );
}

export default MMImages;