import React from 'react';

function ProjectItems(props) {
    console.log(props);
    return (
        <li className="Project">
            
        {/* <br></br> */}
        {/* {props.test[0].title} */}
            <strong>{props.project.title} - {props.project.category}</strong>
        
        </li>
    );
}

export default ProjectItems;
