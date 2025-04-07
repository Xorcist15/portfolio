// src/components/ProjectCard.jsx
const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
    </div>
  );
};

export default ProjectCard;
