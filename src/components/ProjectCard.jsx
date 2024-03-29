function ProjectCard({ title, url, description, githubUrl, deployedUrl }) {
  return (
    <div className='col-span-1 flex flex-col p-4 rounded shadow-lg'>
      <img className='w-full h-48 bg-nav object-cover' src={url} alt={title} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-200 text-base'>{description}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <a
          href={githubUrl}
          className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2'
        >
          GitHub
        </a>
        <a
          href={deployedUrl}
          className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2'
        >
          Deployed URL
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
