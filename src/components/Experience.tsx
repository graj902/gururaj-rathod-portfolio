const experienceData = [
    {
      role: "DevOps Engineer",
      company: "Techcamgateway – Bangalore",
      period: "Aug 2022 – Present",
      tasks: [
        "Designed CI/CD pipelines using Jenkins and GitHub Actions to automate builds, testing, and deployment.",
        "Managed containerized microservices using Docker and deployed on Kubernetes clusters (EKS, OpenShift).",
        "Created reusable Terraform modules to provision VPCs, EC2, IAM, and S3 buckets.",
        "Wrote Helm charts for microservices and handled release promotion between environments.",
        "Integrated monitoring and alerting via Prometheus, Grafana, and Alertmanager.",
        "Collaborated with cross-functional teams to implement DevSecOps practices (SonarQube, Trivy).",
      ],
    },
    {
      role: "AWS Cloud Engineer",
      company: "Techcamgateway – Bangalore",
      period: "Aug 2020 – Aug 2022",
      tasks: [
        "Provisioned AWS infrastructure using Terraform and CloudFormation (EC2, S3, RDS, IAM, ALB, VPC).",
        "Automated backup policies for EC2 and RDS using Lambda and EventBridge.",
        "Built secure VPC networks with public/private subnets, NAT gateways, and security groups.",
        "Migrated legacy applications to AWS with minimal downtime, improving reliability and scaling.",
        "Managed AMIs and golden images using Packer and shell automation scripts.",
      ],
    },
    {
      role: "Cloud Support Engineer",
      company: "Deluxe Entertainment Pvt, Ltd – Bangalore",
      period: "Apr 2019 – Jul 2020",
      tasks: [
        "Supported AWS production workloads (EC2, S3, RDS, IAM) in a 24x7 environment.",
        "Used Ansible for server provisioning, updates, and patching across multiple environments.",
        "Created shell scripts to automate S3 syncs, EC2 backups, and log analysis workflows.",
        "Resolved infrastructure tickets, participated in on-call support rotations, and led RCAs.",
      ],
    },
    {
      role: "Linux Administrator",
      company: "You Broadband Pvt ltd – Mumbai",
      period: "Feb 2016 – Aug 2018",
      tasks: [
        "Maintained Linux servers (RedHat, Ubuntu), user access, file systems, and backup schedules.",
        "Automated admin tasks using Bash scripts and scheduled via cron jobs.",
        "Troubleshot network connectivity, routing, and firewall issues.",
        "Monitored server performance and disk usage to prevent downtime.",
      ],
    },
  ];
  
  
  export default function Experience() {
    return (
      <section id="experience" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Professional Experience
          </h2>
          <div className="relative max-w-3xl mx-auto">
            {/* The vertical timeline bar */}
            <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>
  
            {experienceData.map((job, index) => (
              <div key={index} className="mb-8 flex justify-between items-center w-full">
                {/* Left or Right side content based on index */}
                {index % 2 === 0 ? (
                  <>
                    <div className="w-5/12"></div> {/* Empty spacer */}
                    <div className="w-1/12 flex justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
                    </div>
                    <div className="w-5/12 bg-gray-100 p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-semibold text-gray-800">{job.role}</h3>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{job.period}</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12 bg-gray-100 p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-semibold text-gray-800">{job.role}</h3>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{job.period}</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                      </ul>
                    </div>
                    <div className="w-1/12 flex justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
                    </div>
                    <div className="w-5/12"></div> {/* Empty spacer */}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }