import {generatePath, Link} from 'react-router-dom';
import {PROJECT} from '../config/routes';

const projects = [
  {
    id: 1,
    name: 'Proyecto 1'
  },
  {
    id: 2,
    name: 'Proyecto 2'
  },
  {
    id: 3,
    name: 'Proyecto 3'
  }
];

function ProjectsList() {
  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={generatePath(PROJECT, {id: project.id})}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsList;
