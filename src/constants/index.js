export const myProjects = [
  {
    id: 1,
    title: "Functional T2T AND T2V Chatbot for BOSCH",
    description:
      "An interactive Chatbot that answers any employee related queries on BOSCH and its Server.",
    subDescription: [
      "I developed and deployed an AI-powered chatbot assistant for BOSCH, leveraging Large Language Models and NLP techniques using Python and Grok.",
      "The chatbot is trained on BOSCH’s software and information resources to accurately answer user queries.",
      "Additionally, I integrated various video generation tools to provide dynamic visual content alongside text responses, enhancing user interaction.",
      "This project strengthened my skills in building domain-specific LLM applications, NLP pipelines, and multimodal AI integration."
    ],
    href: "",
    logo: "",
    image: "./assets/projects/bosch.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Grok",
        path: "./assets/logos/grok1.svg",
      },
      {
        id: 3,
        name: "LLM",
        path: "./assets/logos/LLM1.svg",
      },
      {
        id: 4,
        name: "NLP",
        path: "./assets/logos/nlp.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Data Validation & Testing",
    description:
      "Built a scalable data testing framework using Python, SQL, and Snowflake for efficient big data validation.",
    subDescription: [
      "During my internship, I focused on strengthening my expertise in Database Management using Python, with hands-on experience in working with both traditional SQL databases and modern cloud-based platforms such as Snowflake.",
      "I developed a robust Data Testing Framework designed to efficiently test and validate large-scale datasets, ensuring high performance, accuracy, and data integrity across various data storage environments.",
      "The framework leveraged tools such as Pandas for data manipulation and validation, SQL for query-based testing, and Snowflake for cloud-native data operations.",
      "This end-to-end solution enabled scalable testing of complex data pipelines and significantly reduced the time required for manual validation.",
    ],
    href: "",
    logo: "",
    image: "./assets/projects/datatest.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "MySql",
        path: "./assets/logos/mysql.svg",
      },
      {
        id: 3,
        name: "Snowflake",
        path: "./assets/logos/snowflake.svg",
      },
      {
        id: 4,
        name: "MSSQL",
        path: "./assets/logos/mssql1.svg",
      },
      {
        id: 5,
        name: "Gitlab",
        path: "./assets/logos/gitlab.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Automatic Traffic Controller",
    description:
      "Built an AI-powered traffic controller using YOLOv7, Deep SORT, and lane density analysis to regulate signals based on real-time vehicle flow.",
    subDescription: [
      "During a hackathon, I developed a functional automatic traffic control system that dynamically regulates traffic based on real-time vehicle density analysis from a live video feed.",
      "The system leveraged YOLOv7 for high-accuracy vehicle detection and Deep SORT for multi-object tracking to maintain consistency across frames.",
      "Lane-wise density estimation was calculated using spatial analysis, which served as the primary parameter to dynamically allocate green light durations for each lane.",
      "Built using Python and OpenCV, the solution demonstrated an effective fusion of deep learning, computer vision, and real-time decision-making for smart traffic management.",
    ],
    href: "https://github.com/PcGod007/ATC-CyberHackathon/tree/main",
    logo: "",
    image: "./assets/projects/atc.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Yolo",
        path: "./assets/logos/yolo.svg",
      },
      {
        id: 3,
        name: "GIT",
        path: "./assets/logos/git.svg",
      },
      {
        id: 4,
        name: "OpenCV",
        path: "./assets/logos/opencv1.svg",
      },
    ],
  },
  {
    id: 4,
    title: "PAC-MAN",
    description:
      "Built a classic Pac-Man game using Python and Pygame to strengthen skills in game development and object-oriented programming.",
    subDescription: [
      "Developed a fully functional Pac-Man game using Python and the Pygame library to reinforce core programming concepts such as object-oriented design, game loops, and event handling.",
      "Implemented features like player movement, ghost AI, collision detection, scoring system, and level progression.",
      "The game logic was modularized for maintainability, and assets such as sprites and sound effects were integrated for an immersive experience.",
      "This project helped strengthen my understanding of real-time rendering, game physics, and interactive programming in Python.",
    ],
    href: "https://github.com/PcGod007/Pac-Man",
    playHref: "https://pranav03.itch.io/pacman-game",
    logo: "",
    image: "./assets/projects/pacman.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Git",
        path: "./assets/logos/git.svg",
      },
      {
        id: 3,
        name: "OOPS",
        path: "./assets/logos/oops.svg",
      },
    ],
  },
  {
    id: 5,
    title: "AI Stock Market Predictor",
    description:
      "A neural network-based model that forecasts stock trends using historical market data.",
    subDescription: [
      "This project predicts stock market trends using historical price fluctuations and technical indicators.",
      "It employs Artificial Neural Networks (ANNs) trained on time-series stock data to identify buying/selling signals.",
      "Built using Python, leveraging TensorFlow/Keras, NumPy, and Pandas for data handling and model building.",
      "Visualization and analysis were done with Matplotlib and Seaborn to compare real vs predicted outcomes.",
    ],
    href: "https://github.com/PcGod007/AI-Stock-Market-Predictor",
    playHref: "",
    logo: "",
    image: "./assets/projects/stock.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "LLM",
        path: "./assets/logos/LLM1.svg",
      },
      {
        id: 3,
        name: "Matplotlib",
        path: "./assets/logos/matplot.svg",
      },
      {
        id: 4,
        name: "Neural Network",
        path: "./assets/logos/neural.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Botify: A Q&A Chatbot",
    description:
      "A domain-specific chatbot that uses NLP to answer user queries based on structured data.",
    subDescription: [
      "Botify is a domain-specific Q&A chatbot designed to answer user queries based on structured input data within a particular topic.",
      "It utilizes Natural Language Processing (NLP) techniques to extract intent and match it with relevant responses.",
      "Built using Python, with frameworks like NLTK, spaCy, and Scikit-learn for language parsing and classification.",
    ],
    href: "https://github.com/PcGod007/Botify-A-QA-Chatbot",
    playHref: "",
    logo: "",
    image: "./assets/projects/botify.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "NLP",
        path: "./assets/logos/nlp.svg",
      },
      {
        id: 3,
        name: "Neural Network",
        path: "./assets/logos/neural.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Fingerprint Recognition System",
    description:
      "A secure fingerprint matcher using BLAKE2, salting, and HMAC for tamper-resistant authentication.",
    subDescription: [
      "A secure fingerprint recognition system built with a focus on biometric authentication and data integrity.",
      "User fingerprint data is processed and securely hashed using BLAKE2 with salting, followed by HMAC-based keyed hashing for enhanced security.",
      "An additional layer of iterative hashing ensures resistance against dictionary and rainbow table attacks.",
      "Built using Python, with OpenCV for image preprocessing and hashlib/hmac for cryptographic operations.",
    ],
    href: "https://github.com/PcGod007/Fingerprint_Recog_Sys/tree/main",
    logo: "",
    image: "./assets/projects/fingerprint.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Cybersecurity",
        path: "./assets/logos/security.svg",
      },
      {
        id: 3,
        name: "OpenCV",
        path: "./assets/logos/opencv1.svg",
      },
    ],
  },
  {
    id: 8,
    title: "Earthquake Detector",
    description:
      "Designed a vibration-based Earthquake Detector using Arduino and C to monitor seismic activity with real-time alerts.",
    subDescription: [
      "Built a functional Earthquake Detector using an Arduino Uno and a vibration sensor (SW-420) to detect seismic activity based on surface vibrations.",
      "Programmed using C within the Arduino IDE, incorporating real-time signal reading and threshold-based alerts via buzzer and LED indicators.",
      "Used serial communication for live data monitoring and testing sensitivity of the sensor to minor and major tremors.",
      "This project deepened my understanding of microcontroller I/O handling, sensor calibration, and embedded system debugging.",
    ],
    href: "",
    logo: "",
    image: "./assets/projects/earthquake.jpg",
    tags: [
      {
        id: 1,
        name: "Arduino",
        path: "./assets/logos/arduino.svg",
      },
      {
        id: 2,
        name: "C",
        path: "./assets/logos/c.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/pranav-chandrasekhar-b9908821a/",
    icon: "/PortfolioReact/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/PcGod007",
    icon: "/PortfolioReact/assets/socials/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/03_pc_07/",
    icon: "/PortfolioReact/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Computer Science Student & Enthusiast",
    date: "2019-2021",
    job: "School Student",
    contents: [
      "A start of my journey towards the field of computer science, I enjoyed learning Python and its applications across different use cases.",
      "Attended the INSPIRE Science Camp — a 7-day workshop conducted by professors from IIT at SSN College of Engineering, Chennai, where I gained valuable exposure to the world of science and technology.",
      "Designed and implemented projects that were easy to create and started creating my own games using Python like BlackJack, Mastermind, etc.",
      "Created my first big project in Python: PAC-MAN which involved learning about structuring projects across various files and storing different elements.",
      "Covid setbacks did occur with me unable to implement hands-on in my school, but with amazing support from teachers was able to build a solid foundation to improve upon in my college.",
    ],
  },
  {
    title: "Computer Science & Engineering",
    job: "Freshman at College",
    date: "2021-2023",
    contents: [
      "My college journey began amidst the challenges of the COVID-impacted first semester, which I successfully navigated with a strong GPA while also completing a few certificate courses on LinkedIn.",
      "The second semester introduced exciting and demanding subjects like Electronics and Object-Oriented Programming.",
      "During my second year, I actively participated in technical events, including the Eco-Hack Hackathon by IEEE-SSIT, VIT, and a Metaverse Workshop at Anna University, where I explored Unreal Engine 5 and digital simulations.",
      "A major highlight was the Cyber Hackathon, where my team's project, Automatic Traffic Controller, was selected among the top 10 out of 300+ teams and we were one of the top 4 teams representing VIT Chennai.",
      "These experiences helped shape both my technical foundation and collaborative skills early on.",
    ],
  },
  {
    title: "Computer Science & Engineering",
    job: "Senior Year at College",
    date: "2023-2024",
    contents: [
      "In my senior year, I focused on building impactful technical projects across various domains.",
      "I developed an Arduino-based Earthquake Detector and a secure Fingerprint Recognition system using cryptographic techniques like Blake2, HMAC, and salting.",
      "I also built Botify, a domain-specific Q&A chatbot, and applied neural networks for AI-driven stock market prediction using historical data.",
      "To strengthen my technical and coding abilities, I joined the Google Developer Student Club (GDSC) at VIT Chennai as part of the Competitive Coding Team, where I honed my problem-solving and algorithmic thinking.",
      "To enhance my skills further, I completed certifications in Python, NumPy, R, Data Science, OCR, Apache Spark, and Excel-based data analysis.",
      "I later interned at Qualitest Pvt Ltd as a Data Automation Intern, where I contributed to building a scalable data extraction and testing framework. This phase helped consolidate my learning and apply it to real-world data engineering and analysis tasks."
    ],
  },
  {
    title: "Computer Science & Engineering",
    job: "Final Year at College",
    date: "2024-2025",
    contents: [
      "In my final year, I pursued the Microsoft DP-900 Certification to deepen my understanding of Microsoft’s data analysis tools.",
      "I gained insights into Generative AI, Machine Learning, and Deep Learning through an AWS-led global summit.",
      "As a part of my coding club, I strengthened my skills in Java and Competitive Programming, learning faster and optimized approaches to problem-solving.",
      "I worked on impactful projects like a Blockchain-based Student Certificate Validator and explored Human-Computer Interaction through interface design.",
      "My most significant milestone was being selected as a Project Trainee at BOSCH, where I successfully trained functional Text-to-Text and Text-to-Video models using LLMs on BOSCH-specific datasets.",
      "One of my recent projects that I've worked on is A Microtransaction Fraud Risk Assessment Tool that helps detect fraudulent transactions over transactions values less than $5 by utilizing specialized parameters catered to lesser value tranasactions."
    ],
  },
];
export const reviews = [
  {
    name: "Data Testing & Validation",
    username: "Experienced",
    body: "Creating efficient testing programs for data from multiple databases for data validation.",
    img: "ri-database-2-line",
  },
  {
    name: "Creating LLMs",
    username: "Intermediate",
    body: "Training and Creating LLMs and Chatbots that are focused on Data and Information provided by the user.",
    img: "ri-brain-line",
  },
  {
    name: "Webpage Design",
    username: "Experienced",
    body: "Designing innovative website designs using Figma UI/UX and creating a fun and pleasant user.",
    img: "ri-layout-4-line",
  },
  {
    name: "Game Development",
    username: "Foundational",
    body: "Designing and building games using Python and Pygame for interactive gameplay.",
    img: "ri-gamepad-line",
  },
  {
    name: "Microsoft Data Fundamentals",
    username: "Intermediate",
    body: "Earned the Microsoft DP-900 certification to understand core data concepts and Azure data services.",
    img: "ri-database-2-line",
  },
  {
    name: "Deep Learning Neural Networks",
    username: "Intermediate",
    body: "Applied neural network models for real-world tasks like stock prediction and AI simulations.",
    img: "ri-brain-line",
  },
  {
    name: "Object Detection: YOLO & OpenCV",
    username: "Intermediate",
    body: "Implemented computer vision models for object detection using YOLO and OpenCV in Python.",
    img: "ri-focus-2-line",
  },
  {
    name: "Arduino IDE",
    username: "Foundational",
    body: "Built hardware-integrated systems using Arduino IDE and C for real-time sensor applications.",
    img: "ri-cpu-line",
  },
  {
    name: "Blockchain Based Validation",
    username: "Foundational",
    body: "Developed secure certificate verification systems using blockchain technology for data integrity.",
    img: "ri-link-m",
  },
];
