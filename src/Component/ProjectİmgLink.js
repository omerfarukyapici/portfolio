import './Projects.css';

const ProjectİmgLink = ({
    projectİmg,
    projectAddress
}) => {
    return (
        <div className="ProjectİmgLink">
            <div>
                <div className='imgParent'>
                    <img src={projectİmg} alt='' /> {/* Project img be like full screen in the parent div */}
                </div>
                <div>
                    <a  href={projectAddress} target="_blank" > console.log("Show_Project"); </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectİmgLink;