export default function ProjectList ( { projects } ) {
    return (
        <div className="container">
            {projects.map(project => {
                return <img src={project.img} key={project.img} className="img" />
            })}
        </div>
    );
}