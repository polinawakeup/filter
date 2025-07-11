import React from "react";
import Toolbar from "./Toolbar";
import projects from '../assets/projects';
import ProjectList from "./ProjectList";

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "All"
        };
    }

    render () {

        const filteredProjects = this.state.selected === "All"
        ? projects
        : projects.filter(project => project.category === this.state.selected);

        return(
            <div className="portfolio">
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selected}
                    onSelectFilter={(filter) => this.setState( {selected: filter} )}
                />
                <ProjectList
                    projects={filteredProjects}
                />
            </div>
        )
    }
}