import HC from '../img/hc.jpg';
import Interac from '../img/interac.jpg';
import CPost from '../img/cpost.jpg';

const introData = {
    HealthCanada: {
        image: HC,
        imageAlt: "health-canada",
        subtitle: "DevOps Software Developer Sep 2022 - May 2024 (1 Year 8 Months)",
        description: [
            "Developed the Health Canada ‘JiraCSV Genie’ WPF application using .NET framework and C#, enabling seamless automation of Jira tasks through user-controlled PowerShell script execution and CSV generation.",
            "Led research and initial deployment of Azure Kubernetes Service (AKS) cluster using Terraform and Azure DevOps, optimizing resource usage and exploring networking options for seamless connectivity and secure access.",
            "Integrated Terraform release steps into Azure DevOps YAML pipeline, exploring ManualValidation@0 task as a workaround for approval and validation limitations.",
            "Configured Docker installation in Azure DevOps pipeline, optimized Docker socket permissions for streamlined command execution in order to achieve seamless interaction with Artifactory Docker registry.",
            "Employed secure file feature in Azure DevOps pipeline for managing pipeline secrets.",
            "Authored the comprehensive Employee and Student onboarding documentation within the DevOps Internal Confluence space, providing clear guidance for new hires through our organization's onboarding process.",
            "Enhanced Company's DevOps Jenkinsfile template to include Health Canada mandatory elements, specified agent types, explained credential retrieval, documented post-condition blocks, and integrated logic for Docker image cleanup.",
            "Spearheaded the development, testing, and deployment phases of a React application utilizing CI/CD tools for streamlined delivery.",
            "Authored Dockerfiles for frontend, backend, and proxy applications, ensuring efficient containerization and deployment processes.",
            "Wrote terraform scripts to automate Dockerfile execution and facilitate the seamless uploading of Docker images to the Artifactory Docker repository.",
            "Established a robust CI/CD workflow, leveraging Jenkins to orchestrate automated pipelines, optimizing project efficiency and reliability.",
        ],
        links: [
        { label: "Health Canada", url: "https://www.canada.ca/en/health-canada.html" },
        ]
    },
    Interac: {
        image: Interac,
        imageAlt: "interac-corp",
        subtitle: "Junior DevOps Engineer Dec 2021 - Aug 2022 (9 months)",
        description: [
            "Wrote the Conceptual Solution Design (CSD) for implementing and migrating the company's internal Docker registry to Artifactory.",
            "Developed Jinja2 templates to generate application configurations and extract TLS certificates from the Ansible vault, seamlessly integrating them into the operational Docker containers of internal applications.",
            "Utilized Bamboo for continuous integration and deployment, automating application deployment to different environments.",
            "Streamlined deployment processes for internal services by leveraging Ansible for containerized deployment, updating ansible playbooks to align with company provisioning and deployment standards.",
            "Transformed internal Python Flask MSS web application, leveraging Consul API for configuration file ID retrieval and decoding to allow authenticated users to view configuration file contents.",
            "Introduced internal account overview in internal Flask web app for management and streamlined GC account revocation process, culminating in enhanced user experience and efficiency.",
            "Utilized Jira to create test cycles and comprehensive test cases for Python Flask internal application.",
        ],
        links: [
        { label: "Interac", url: "https://www.interac.ca/en/" },
        ]
    },
    CanadaPost: {
        image: CPost,
        imageAlt: "canada-post",
        subtitle: "Post Office Clerk Feb 2020 - Feb 2022 (2 years 1 month)",
        description: [
            "Submitted daily post office reports, ensuring accuracy and compliance with company protocols.",
            "Provided customer service, answering phone calls and assisting customers with inquiries.",
            "Processed all types of parcels, handled MoneyGram transactions, and issued money orders efficiently.",
            "Actively contributed to fraud prevention by implementing anti-money laundering procedures.",
            "Trained new recruits, demonstrating leadership and teamwork skills.",
        ]
    },
};
  
export default introData;
