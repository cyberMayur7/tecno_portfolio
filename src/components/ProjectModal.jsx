const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-xl max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-gray-400 mt-4">{project.desc}</p>

        <p className="text-sm text-gray-500 mt-4">
          Tech: {project.tech}
        </p>

        <a
          href={project.github}
          target="_blank"
          className="inline-block mt-6 text-blue-400"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
