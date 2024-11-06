import KhalidImage from '../img/me.jpg';
import KhalidCoding from '../img/me-coding.jpg'

const introData = {
    Welcome: {
        title: "Welcome!",
        subtitle: "Thank you for visiting my little corner of the web :)",
        description: "This site showcases my DevOps-driven approach to web dev, where I used React to build a simple but scalable app. " +
                    "I’ve adopted the TDD approach to ensure reliability and set up a CI/CD pipeline with GitHub workflows for seamless updates. " +
                    "Reusable components and dynamic JSON data make content adaptable, while a GitHub Kanban board keeps me organized and agile. " +
                    "Feel free to explore the source code, and let me know if you spot anything I could improve!",
   links: [
            { label: "Source Code", url: "https://github.com/khalidkanaan/kk-website" },
        ]
    },
    KhalidInDesert: {
        description: "Picture of Khalid Kana'an trekking through the vast martian deserts of Wadi Rum, Jordan.",
        image: KhalidImage,
        imageAlt: "me-wadi-rum",
    },
    AboutMe: {
        title: "About Me",
        description: "My name Khalid Kana’an, I am a passionate Software Engineer with experience in " +
                    "DevOps, cloud infrastructure, and full-stack development. I enjoy working in collaborative " +
                    "settings, continually advancing my technical skills, and taking on new challenges that drive " +
                    "impactful results.",
    },
    Links: {
        title: "Links", 
        links: [
            { label: "GitHub", url: "https://github.com/khalidkanaan" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/khalid-kanaan-2308b0192/" },
            { label: "Resume", url: "https://github.com/khalidkanaan/kk-resumes/blob/main/Khalid-Kana'an-Resume-DevOps.pdf" }
        ]
    },
    Tools: {
        title: "Tools & Technologies",
        description: [
            "Languages: Java, Python, C++, C#, JavaScript, Typescript, HTML, CSS, PHP, C, Bash, Ruby, PowerShell, Racket, MATLAB, Groovy, Go, SQL, NoSQL",
            "Frameworks & Libraries: .NET, Node, Express, React, Jest, Angular, Spring Boot, Hibernate, Flask, PyTorch, scikit-learn, virtualenv, PostgreSQL, MySQL, SQLite, MongoDB, JDBC, Tomcat, Apache HTTP, nginx, Web Experience Toolkit (WET)",
            "Concepts: Agile and DevOps Methodologies, CI/CD, IaC, Containerization, Orchestration, Configuration Management, Scripting & Automation, Cloud Computing (Azure), Networking fundamentals, Cryptography, Machine Learning, Object-Oriented Programming, Algorithms and Data Structures, RESTful Design, Cloud Native, UX/UI design",
            "Developer Tools: Git, SVN, GitHub, Bitbucket, Jenkins, Ansible, Terraform, Docker, Helm, Kubernetes, Jira API, Confluence API, Docker, Azure Services, AWS, VS Code, Visual Studio IDE, Eclipse, IntelliJ"
        ]
    },
    KhalidCoding: {
        description: "Caught in action: This is me in your office when I confidently merge a pull request, only to find out I forgot to Squash merge it 🥲",
        image: KhalidCoding,
        imageAlt: "me-when-code-is-bugged",
    },
};
  
export default introData;
