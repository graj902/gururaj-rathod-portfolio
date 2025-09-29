import Link from 'next/link';

const projectsData = [
  {
    title: "The Serverless Static Website",
    description: "Hosted a static portfolio website on AWS S3, served globally with low latency via CloudFront, and secured with a free SSL/TLS certificate via ACM. Implemented a CI/CD pipeline with GitHub Actions to automate deployments on every git push.",
    tech: ["AWS S3", "CloudFront", "ACM", "GitHub Actions", "CI/CD"],
    liveLink: "#", // Add link to the live portfolio itself later
    repoLink: "https://github.com/graj902/gururaj-rathod-portfolio",
  },
  {
    title: "OBMR - DevOps Project (Techcamgateway)",
    description: "Built a complete CI/CD pipeline for microservices using Jenkins and GitHub Actions. Containerized services with Docker and deployed to Kubernetes (EKS), managing deployments and rollbacks with Helm charts. Provisioned infrastructure using Terraform and implemented a full monitoring stack with Prometheus & Grafana.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Helm", "Terraform", "Prometheus"],
    liveLink: null, // No live link for this internal project
    repoLink: "#", // Add a link if you have a public repo for it
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                {project.repoLink && (
                  <Link href={project.repoLink} target="_blank" className="text-blue-600 hover:underline mr-4">
                    View Code
                  </Link>
                )}
                {project.liveLink && (
                  <Link href={project.liveLink} target="_blank" className="text-blue-600 hover:underline">
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}