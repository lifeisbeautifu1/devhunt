import projects from '../projects';
import { ProjectCard } from './';

const Featured = () => {
  return (
    <div className="px-8 lg:px-28 mt-8 flex flex-col gap-16 ">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-4xl font-[800]">Featured Projects</h1>
        <p className="text-xl text-gray-500">
          Check out some of these more recent projects submitted by our
          community.
        </p>
      </div>
      <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-4 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
