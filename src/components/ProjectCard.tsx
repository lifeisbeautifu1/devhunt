import { IProject } from '../interfaces';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-md overflow-hidden shadow flex flex-col min-w-[300px] max-w-[370px] align-center w-full">
      <div className="h-[200px]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="py-4 px-6">
        <Link
          className="text-indigo-500 text-sm font-[500] hover:underline "
          to={project.link}
        >
          {project.author.split(' ')[0]}'s project
        </Link>
        <h1 className="text-xl font-[600]">{project.title}</h1>
        <p className="text-gray-500 mt-2">{project.description}</p>
      </div>
      <div className="flex py-4 px-6 gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Link to={project.link}>
            <img
              src={project.authorPicture}
              className="w-full h-full object-cover"
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <Link to={project.link} className="text-sm font-[500]">
            {project.author}
          </Link>
          <p className="text-sm text-gray-500">{project.date}</p>
        </div>
        <div className="flex justify-center items-center ml-auto">
          <button className="bg-indigo-100 hover:bg-indigo-200 font-[500] text-sm text-indigo-600 py-2 px-4 rounded-md">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
