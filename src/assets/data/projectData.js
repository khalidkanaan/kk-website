import Factory from '../img/factory.jpg';
import JiraWPF from '../img/jirawpf.gif'
import Bookstore from '../img/amazinbooks.jpg';
import Monopoly from '../img/monopoly.jpg';
import Elevators from '../img/elevators.jpg';
import MSP from '../img/msp.gif';
import Music from '../img/music.gif';
import Cybered from '../img/cybered.jpg';

const projectData = {
    ManufacturingSimulation: {
        title: "Simulation of a Manufacturing Facility’s Operational Efficiency",
        image: Factory,
        imageAlt: "manufacturing-simulation",
        subtitle: "Tools: Python, MATLAB, Statistical Modeling Tools",
        description: [
            "In this group project, I worked on conducting an in-depth simulation study on a manufacturing facility’s workflow, focusing on optimizing throughput, reducing component inspection idle times, and maximizing efficiency across multiple workstations. Using Python, I analyzed system throughput, buffer occupancy, and inspector availability. Simulating various routing policies helped identify ways to increase productivity by reducing bottlenecks and balancing workload across stations.",
            "Through data-driven analysis, we evaluated each proposed policy’s impact on the facility's performance and used steady-state estimates as well as statistical validation methods to ensure reliability. This project provided a valuable learning experience in implementing statistical modeling techniques to address real-world operational challenges."
        ],
        links: [
            { label: "Source Code", url: "https://github.com/khalidkanaan/software-simulation" }
        ]
    },
    JiraCSVGenie: {
        title: "JiraCSV Genie",
        image: JiraWPF,
        imageAlt: "jira-csv-genie",
        subtitle: "Tools: C#, WPF, Jira, PowerShell",
        description: [
            "JiraCSV Genie is a WPF (Windows Presentation Foundation) application designed to facilitate the generation of CSV files using PowerShell scripts for various Jira-related tasks. It provides a user-friendly interface to execute PowerShell scripts, with inputs passed from the UI to the scripts. The generated data is organized in subfolders within the executable's running location for easy access.",
            "The app offers features to streamline Jira data management by allowing users to generate CSV files for user information, permissions, and group access based on specified criteria. Users can filter data by fields like username, status, and group membership and create detailed permission reports, including access at both the user and group levels for projects.",
        ],
        links: [
            { label: "Source Code", url: "https://github.com/khalidkanaan/JiraWPF" }
        ]
    },
    AmazinBookstore: {
        title: "Amazin Bookstore",
        image: Bookstore,
        imageAlt: "amazin-bookstore",
        subtitle: "Tools: Java, MySQL, Docker, Docker Compose",
        description: [
            "In this group project, I worked on building and containerizing the Amazin Bookstore, a full-stack e-commerce application, using Docker and Docker Compose to simplify deployment and testing. The containerized setup ensures consistent application behavior across various environments and allows for easy scalability as the application grows. By configuring Docker Compose, I automated service orchestration, handling the setup and communication between different components of the bookstore application seamlessly.",
            "This project provided hands-on experience with containerization, streamlining the development workflow and creating a robust foundation for scaling and enhancing the application in production environments.",
        ],
    },
    JavaMonopoly: {
        title: "Java Monopoly Game",
        image: Monopoly,
        imageAlt: "java-monopoly",
        subtitle: "Tools: Java, MVC Architecture",
        description: [
            "In this group project, I worked on developing a Java-based Monopoly game using the MVC architecture. This approach helped separate the game logic, display, and control flow, which helped improve the code's modularity and maintainability. The game features a graphical user interface for interactive gameplay, with commands for rolling dice, buying and selling properties, AI players, and ability to track each player's status.",
            "Working together, we used collaborative tools like Discord and draw.io to design UML diagrams and finalize game structure. We also added localization support in multiple languages, allowing the game to be played by a broader audience. This project strengthened my skills in MVC design and Java-based GUI development, creating a user-friendly and interactive gaming experience."
        ],
    },
    ElevatorControlSystem: {
        title: "Elevator Control System",
        image: Elevators,
        imageAlt: "elevator-control-system",
        subtitle: "Tools: Java, UDP, JUnit",
        description: [
            "In this group project, I worked on a dynamic Elevator Control System, which manages multiple elevators across 22 floors using a structured scheduler and subsystems. Each subsystem communicates over UDP, allowing the system to efficiently route requests and ensure a smooth user experience even with multiple elevators running simultaneously.",
            "A GUI was integrated to provide real-time visual feedback on elevator movements and status. This project gave me hands-on experience in concurrent programming and networked communication protocols, where each detail from request handling to real-time visualization added to the system’s robustness."
        ],
    },
    MSP432LEDControl: {
        title: "MSP432 LED Control System",
        image: MSP,
        imageAlt: "msp432-led-control",
        subtitle: "Tools: C, UART (RS232), Python (pySerial)",
        description: [
            "For this embedded systems project, I developed a remote-controlled, 4-state LED system using the MSP432 microcontroller and serial communication over RS232. Commands from a Python-based PC application trigger state changes on the microcontroller, where each LED state indicates a unique system condition.",
            "I implemented error handling and synchronized communication to ensure reliable command delivery and acknowledgment, enabling smooth control and accurate state feedback. This project introduced me to UART serial communication and embedded programming, blending both hardware and software to create a functional manually triggered or remote-controled system."
        ],
    },
    MusicGenreClassification: {
        title: "Music Genre Classification Using Machine Learning",
        image: Music,
        imageAlt: "music-genre-classification",
        subtitle: "Tools: Python, Librosa, Scikit-Learn, PyTorch",
        description: [
            "This project focused on building a music genre classification model by exploring both a custom-built K-Nearest Neighbors (KNN) model and a deep learning approach. I began by constructing a KNN classifier, experimenting with various audio feature combinations, distance metrics, and K-values to optimize its accuracy in predicting genres. To evaluate my model’s performance, I compared it against a ResNet18-based deep learning model, using spectrograms as input.", 
            "Comparing both models, I found that ResNet18 captured complex patterns in the spectrograms with higher precision and recall than the KNN model, but the KNN approach provided valuable insights into feature importance and interpretability. This project combined my interests in machine learning and music analysis, allowing me to gain a deeper understanding of audio feature extraction and model tuning.",
        ],
    },
    Cybered: {
        title: "Cybered - Interactive Cybersecurity Education Web Application",
        image: Cybered,
        imageAlt: "cybered-cybersecurity-education",
        subtitle: "Tools: MERN Stack (MongoDB, Express.js, React.js, Node.js)",
        description: [
            "Cybered is a web application designed to make cybersecurity education accessible and engaging, especially for school-aged children and elderly individuals. Built with the MERN stack, Cybered combines interactive games, quizzes, and simulations to teach essential cybersecurity concepts such as malware recognition, phishing prevention, and safe browsing habits.",
            "Using MongoDB for flexible data storage and React for a dynamic interface, my group and I created a user-friendly application that engages students in a hands-on learning experience. This project underscored the importance of both technical and behavioral aspects in cybersecurity education, inspiring me to create an impact by raising awareness among young and old learners."
        ],
        links: [
            { label: "Video Demo", url: "https://www.youtube.com/watch?v=bmqc2cE67W4" },
            { label: "Source Code", url: "https://github.com/khalidkanaan/CyberEd" }
        ]
    }
};

export default projectData;
