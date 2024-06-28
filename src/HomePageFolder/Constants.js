import imageFeature1 from "../Assets/images/resources/feature-1-1.jpg";
import imageFeature2 from "../Assets/images/resources/feature-1-2.jpg";
import imageFeature3 from "../Assets/images/resources/feature-1-3.jpg";
import serviceImage1 from "../Assets/images/services/service-details-img-1.jpg";
import serviceImage2 from "../Assets/images/services/service-details-img-2.jpg";
import serviceImage3 from "../Assets/images/services/service-details-img-3.jpg";
import serviceImage4 from "../Assets/images/services/service-details-img-4.jpg";
export const SERVICES_CONTENT = [
  {
    id: 0,
    name: "Web Development",
    image: imageFeature1,
  },
  {
    id: 1,
    name: "Mobile App Development",
    image: imageFeature2,
  },
  {
    id: 2,
    name: "Digital Marketing",
    image: imageFeature3,
  },
];

export const SERVICES_PROVIDED = [
  {
    id: 0,
    name: "Web Development",
    text: "Web development is the comprehensive process of creating, designing, and maintaining websites or web applications. It encompasses various tasks, including coding, scripting, and integrating functionalities that enable optimal website performance. Frontend development deals with the visual and interactive aspects that users experience, employing languages like HTML, CSS, and JavaScript. On the other hand, backend development focuses on server-side operations, managing databases, and ensuring smooth functionality. Full-stack developers adeptly navigate both frontend and backend, providing end-to-end solutions. In a rapidly evolving digital landscape, web development is crucial for businesses and individuals seeking an effective online presence. It involves staying updated with emerging technologies and frameworks to deliver seamless, secure, and visually appealing websites that cater to the dynamic needs of users in the digital age.",
    image: serviceImage1,
    link: "/webDev",
  },
  {
    id: 1,
    name: "UI/UX designing",
    text: "User Interface (UI) and User Experience (UX) collaboratively shape the design and functionality of digital products. UI concentrates on visually appealing and intuitive elements, ensuring a seamless and aesthetically pleasing user interface. Conversely, UX centers on the overall user journey, striving for smooth interactions and heightened user satisfaction. The synergy of UI/UX design seamlessly integrates aesthetics and functionality, guiding users effortlessly through a product.",
    image: serviceImage2,
    link: "/uiDesign",
  },
  {
    id: 2,
    name: "Mobile App Development",
    text: "A mobile application, a software tailored for smartphones, tablets, and portable devices, addresses a spectrum of user needs—from entertainment and social networking to productivity. Designed for specific platforms like iOS or Android, mobile apps optimize user experiences. Developed in diverse programming languages, these applications leverage device features for seamless integration with mobile hardware. Serving as indispensable tools, they elevate daily life by swiftly providing access to information, services, and entertainment while on the move.",
    image: serviceImage3,
    link: "/mobileApp",
  },
  {
    id: 3,
    name: "Digital Marketing",
    text: "Digital marketing encompasses online strategies to promote products, services, or brands. It leverages digital channels such as social media, search engines, email, and websites to connect with a target audience. By utilizing various techniques like content marketing, SEO, and online advertising, businesses aim to enhance their online presence, engage users, and drive conversions. The dynamic nature of digital marketing allows for real-time analysis and adaptation, enabling businesses to stay agile and effective in the ever-evolving digital landscape.",
    image: serviceImage4,
    link: "/digitalMarkt",
  },
];

export const WEB_DEVELOPMENT = [
  {
    id: 0,
    name: "Front-End:",
    text: "Frontend development shapes the user-facing aspects of websites, employing HTML for content structure, CSS for styling, and JavaScript for dynamic interactions. Frontend developers ensure seamless user experiences with responsive designs across devices, playing a pivotal role in dictating a website's aesthetics and functionality. This discipline demands creativity, design sharpeness, and a relentless focus on optimizing the user interface to deliver engaging and user-friendly digital experiences.",
  },
  {
    id: 1,
    name: "Back-end:",
    text: "Back-end development involves the server-side operations of websites or applications, managing data storage, server logic, and user authentication and authorization . Backend developers utilize languages like Python, Ruby, and PHP, along with frameworks such as Node.js. Their work ensures the functionality and security of a website, handling processes unseen by users. It involves server management, database operations, and the integration of frontend and backend components to create a cohesive, efficient, and dynamic digital experience",
  },
];
