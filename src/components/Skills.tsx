const skillsData = [
    { category: "Cloud", tools: "AWS (EC2, S3, VPC, IAM, RDS, EKS)" },
    { category: "Containers", tools: "Docker, Kubernetes (EKS), Helm" },
    { category: "CI/CD", tools: "Jenkins, GitHub Actions, SonarQube" },
    { category: "IaC & Config", tools: "Terraform, Ansible" },
    { category: "Monitoring", tools: "Prometheus, Grafana, Alertmanager, CloudWatch" },
    { category: "Scripting", tools: "Bash" },
    { category: "Source Control", tools: "Git, GitHub" },
    { category: "OS & Servers", tools: "Linux (RedHat, Ubuntu), Windows Server" },
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((skill) => (
              <div key={skill.category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">{skill.category}</h3>
                <p className="text-gray-700">{skill.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }