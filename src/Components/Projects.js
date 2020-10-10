import React from 'react';
import ProjectItem from './ProjectItem'

function Projects(props) {
    let projectItems;
    if(props.projects) {
        projectItems = props.projects.map(project => {
            console.log("inside Map", project.title);
            // return 0;
            return (
                <ProjectItem key = {project.title} project = {project}/>
            );
        });
    }
    console.log(projectItems);
    // console.log(projectItems);
    // console.log(props);
    return (
        <div className="Projects">
            <ul>
                {projectItems}
            </ul>
            

        <br></br>
        {/* {props.test[0].title} */}
        </div>
    );
}

export default Projects;
