import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AutoFixOffIcon from "@mui/icons-material/AutoFixOff";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import GroupsIcon from "@mui/icons-material/Groups";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

//   web Development Image Imported :------

import htmlImage from "../Assets/images/resources/html.png";
import cssImage from "../Assets/images/resources/css.svg";
import jsImage from "../Assets/images/resources/js3.png";
import reactImage from "../Assets/images/resources/react.jpg";
import angularImage from "../Assets/images/resources/angular-image-1.png";
import reactNativeImage from "../Assets/images/resources/react-native.png";
import nodeJsImage from "../Assets/images/resources/node_js.jpg";
import phpImage from "../Assets/images/resources/php.png";

//   UI/UX Designing Image Imported :------

import figmaImage from "../Assets/images/resources/figma-image-1.png";
import zeplinImage from "../Assets/images/resources/zeplin-image-1.png";
import photoshopImage from "../Assets/images/resources/photoshop-image-1.png";
import adobeImage from "../Assets/images/resources/adobe-image.png";

//   Digital Marketing Image Imported :------

import seoImage from "../Assets/images/resources/smo-image-1.jpg";
import contentMarketingImage from "../Assets/images/resources/content-marketing-1.jpg";
import emailMarketingImage from "../Assets/images/resources/email-market-1.webp";
import smoImage from "../Assets/images/resources/smo-image-11.jpg";

//   Mobile App Development Image Imported :------

import reactNative from "../Assets/images/resources/react-native-image.png";
import flutterImage from "../Assets/images/resources/flutter-image-1.png";
import iosImage from "../Assets/images/resources/ios-image-1.webp";
import mobileImage from "../Assets/images/resources/mobile-image-1.jpg";
import androidImage from "../Assets/images/resources/android-image-1.avif";

//   Mean Stack Image Imported :------

import mongoDBImage from "../Assets/images/resources/mongo_db.webp";
import expressJSImage from "../Assets/images/resources/express_js.png";

// Development Process Images
import Development from "../Assets/images/resources/development2.jpg";
import Planning from "../Assets/images/resources/planing.avif";
import Design from "../Assets/images/resources/design.jpg";
import QA from "../Assets/images/resources/launch.jpg";
import Maintenance from "../Assets/images/resources/maintenance.jpg";

//   ICONS IN SERVICE OF BRAINSPACK:----------

import LaptopIcon from "@mui/icons-material/Laptop";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";

export const headerLinks = [
  {
    links: "/",
    item: "Home",
  },
  {
    links: "/about",
    item: "About us",
  },
  {
    links: "/services",
    item: "Services",
  },
  {
    links: "/Contact",
    item: "Contact",
  },
];

export const DEVELOPMENT_PROCESS = [
  {
    id: 0,
    name: "Planning",
    icon: <SupportAgentIcon sx={{ color: "white" }} />,
  },
  {
    id: 1,
    name: "Design",
    icon: <DesignServicesIcon />,
  },
  {
    id: 2,
    name: "Development",
    icon: <DeveloperModeIcon />,
  },
  {
    id: 3,
    name: "Q/A launch",
    icon: <QuestionAnswerIcon />,
  },
  {
    id: 4,
    name: "Maintenance",
    icon: <AutoFixOffIcon />,
  },
];

export const serviceCardContent = [
  {
    icons: "icons",
    serviceLinks: "/services/web-development",
    icons: <LaptopIcon sx={{ fontSize: "50px", color: "#55ad88" }} />,
    serviceLinks: "/services/web-development",
    heading: "Web Development",
    subHeading: "Creating websites using coding and design techniques.",
  },
  {
    icons: "icons",
    serviceLinks: "/services/ui-ux-design",
    icons: <AppSettingsAltIcon sx={{ fontSize: "50px", color: "#55ad88" }} />,
    serviceLinks: "/services/ui-ux-design",
    heading: "UI/UX Designing",
    subHeading: "Expert Web Designing for Impactful Digital Experiences.",
  },
  {
    icons: "icons",
    serviceLinks: "/services/mobile-app-development",
    icons: <AcUnitIcon sx={{ fontSize: "50px", color: "#55ad88" }} />,
    serviceLinks: "/services/mobile-app-development",
    heading: "Mobile Application",
    subHeading: "Unleashing Innovation in the Palm of Your Hand.",
  },
  {
    icons: "icons",
    serviceLinks: "/services/digital-marketing",
    icons: <BrowseGalleryIcon sx={{ fontSize: "50px", color: "#55ad88" }} />,
    serviceLinks: "/services/digital-marketing",
    heading: "Digital Marketing",
    subHeading: "Strategic Promotion for Online Triumph.",
  },
];

export const counterItemContent = [
  {
    icons: <BusinessCenterIcon sx={{fontSize:"35px"}} />,
    dataCount: "3",
    counterPlus: "+",
    counterTitle: "Years of experience",
  },
  {
    icons: <PermDataSettingIcon sx={{fontSize:"35px"}} />,
    dataCount: "700",
    counterPlus: "+",
    counterTitle: "IT problems solved",
  },
  {
    icons: <ThumbUpIcon sx={{fontSize:"35px"}} />,
    dataCount: "11",
    counterPlus: "+",
    counterTitle: "Satisfied clients",
  },
  {
    icons: <GroupsIcon sx={{fontSize:"35px"}} />,
    dataCount: "15",
    counterPlus: "+",
    counterTitle: "Pro team members",
  },
];
export const TECH_SERVICES = [
  {
    id: 0,
    icon: <CheckIcon />,
    name: "Web Development",
  },
  {
    id: 1,
    icon: <CheckIcon />,
    name: "UI/UX Designing",
  },
  {
    id: 2,
    icon: <CheckIcon />,
    name: "Mobile App Development",
  },
  {
    id: 3,
    icon: <CheckIcon />,
    name: "Digital Marketing",
  },
];

export const teamCarouselImages = [
  {
    id: 0,
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    title: "hello world",
  },
  {
    id: 1,
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    title: "hello world",
  },
  {
    id: 2,
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    title: "hello world",
  },
  {
    id: 3,
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    title: "hello world",
  },
  {
    id: 4,
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    title: "hello world",
  },
];
export const WHY_CHOOSE_WEB = [
  {
    id: 0,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Expertise",
  },
  {
    id: 1,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Custom Solutions",
  },
  {
    id: 2,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Innovative Designs",
  },
  {
    id: 3,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Scalability",
  },
  {
    id: 4,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Cutting-Edge Technologies",
  },
];

export const WHY_CHOOSE = [
  {
    id: 0,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "User-Centric Design",
  },
  {
    id: 1,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Visual Appeal",
  },
  {
    id: 2,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Responsive Functionality",
  },
  {
    id: 3,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Usability Testing",
  },
  {
    id: 4,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Innovative Solutions",
  },
];
export const WHY_CHOOSE_MOBILE = [
  {
    id: 0,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Expertise",
  },
  {
    id: 1,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Innovation",
  },
  {
    id: 2,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Client-Centricity",
  },
  {
    id: 3,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Competitive Pricing",
  },
  {
    id: 4,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Platform Diversity",
  },
];
export const WHY_CHOOSE_DIGITAL = [
  {
    id: 0,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Expertise and Experience",
  },
  {
    id: 1,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Comprehensive Service",
  },
  {
    id: 2,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Customized Strategies",
  },
  {
    id: 3,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Innovative Technologies",
  },
  {
    id: 4,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Data-driven Approach",
  },
];
export const WHY_CHOOSE_MEAN = [
  {
    id: 0,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Client Collaboration",
  },
  {
    id: 1,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "MEAN Stack Prowess",
  },
  {
    id: 2,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Cross-Platform Proficiency",
  },
  {
    id: 3,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Security Measures",
  },
  {
    id: 4,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Quality Assurance",
  },
];

export const WHY_CHOOSE_MERN = [
  {
    id: 0,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Technology Stack",
  },
  {
    id: 1,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Quality Assurance",
  },
  {
    id: 2,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Client Support",
  },
  {
    id: 3,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Cost and Timeline",
  },
  {
    id: 4,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Innovation and Adaptability",
  },
];
export const WHY_CHOOSE_Php = [
  {
    id: 0,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Proficiency",
  },
  {
    id: 1,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Database Integration",
  },
  {
    id: 2,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Proven Track Record",
  },
  {
    id: 3,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Competitive Pricing",
  },
  {
    id: 4,
    icon: (
      <CheckCircleOutlineIcon sx={{ color: "#55ad88", fontSize: "20px" }} />
    ),
    name: "Framework Mastery",
  },
];
export const serviceFrontEndContent = [
  {
    id: 0,
    image: htmlImage,
    heading: "HTML",
    subHeading:
      "HTML stands as the fundamental framework for web content, employing tags to meticulously structure and visually present information",
  },
  {
    id: 1,
    image: cssImage,
    heading: "CSS",
    subHeading:
      "CSS styles web content, enhancing visual appeal through design, layout, and presentation for immersive user experiences",
  },
  {
    id: 2,
    image: jsImage,
    heading: "Javascript",
    subHeading:
      "JavaScript powers dynamic web behavior, enabling interactive features, animations, and seamless user experiences on websites.",
  },
  {
    id: 3,
    image: reactImage,
    heading: "ReactJS",
    subHeading:
      "ReactJS revolutionizes web development with a declarative, component-based approach, fostering efficient, scalable, and interactive interfaces.",
  },
  {
    id: 4,
    image: angularImage,
    heading: "Angular",
    subHeading:
      "Angular empowers application development, delivering a solid structure for creating dynamic, scalable, and feature-rich experiences effortlessly.",
  },
  {
    id: 5,
    image: reactNativeImage,
    heading: "React Native",
    subHeading:
      "React Native streamlines cross-platform mobile app development, ensuring efficiency and code-sharing between iOS and Android platforms.",
  },
];

export const serviceBackEndContent = [
  {
    id: 0,
    image: nodeJsImage,
    heading: "Node.js",
    subHeading:
      "Node.js fuels server-side JavaScript, facilitating scalability and efficiency in web applications and APIsA.",
  },
  {
    id: 1,
    image: phpImage,
    heading: "PHP",
    subHeading:
      "PHP is a server-side scripting language for dynamic web development",
  },
];

export const WHY_CHOOSE_UI_DESIGNING = [
  {
    id: 0,
    heading: "Why Choose UI/UX Designing ?",
    panel: "panel1",
    details: [
      {
        subHeading: "",
        paragraph:
          "Opting for web designing is essential for a captivating online presence.",
      },
      {
        subHeading: "",
        paragraph:
          "Our proficiency guarantees visually appealing, user-centric websites aligned with your brand identity.",
      },
      {
        subHeading: "",
        paragraph:
          "We prioritize smooth navigation, mobile responsiveness, and compelling designs, enhancing user satisfaction and cultivating success in the digital realm.",
      },
    ],
  },
  {
    id: 1,
    heading: "Benefits Of Web Designing ?",
    panel: "panel2",
    details: [
      {
        subHeading: "Professional Appearance :",
        paragraph:
          "Web designing ensures a polished and professional look for your website, enhancing your brand image.",
      },
      {
        subHeading: "User Engagement : ",
        paragraph:
          "Well-designed websites provide a positive user experience, keeping visitors engaged and encouraging them to explore further.",
      },
      {
        subHeading: "Brand Consistency:",
        paragraph:
          " Web designers incorporate consistent brand elements, such as logos and color schemes, reinforcing brand identity across digital platforms.",
      },
      {
        subHeading: "Mobile Responsiveness : ",
        paragraph:
          "Responsive design ensures your website functions seamlessly on various devices, catering to the growing number of mobile users.",
      },
      {
        subHeading: "SEO Optimization :",
        paragraph:
          " Effective web design includes SEO best practices, improving your website's visibility on search engines and attracting organic traffic.",
      },
      {
        subHeading: "Increased Conversions :",
        paragraph:
          " User-friendly design and clear calls-to-action contribute to higher conversion rates, turning website visitors into customers.",
      },
    ],
  },
  {
    id: 2,
    heading: "Web Designing Development Services ?",
    panel: "panel3",
    details: [
      {
        subHeading: "Graphic Design :",
        paragraph:
          " Incorporate visually appealing graphics, images, and icons to enhance the overall aesthetics of the website.",
      },
      {
        subHeading: "Layout Planning :  ",
        paragraph:
          "Organize content in a structured and logical manner to ensure easy navigation and a clear hierarchy.",
      },
      {
        subHeading: " User Interface (UI) Design : ",
        paragraph:
          " Create interactive elements and controls for seamless user navigation and interaction.",
      },
      {
        subHeading: "Usability and User Experience (UX):",
        paragraph:
          "Focus on creating a positive and intuitive user experience by considering user needs and behaviors.",
      },
    ],
  },
];
export const WHY_CHOOSE_MOBILE_APP = [
  {
    id: 0,
    heading: "Why Choose Mobile App Development ?",
    panel: "panel1",
    details: [
      {
        subHeading: "",
        paragraph:
          "Mobile development is crucial for businesses aiming at extensive digital outreach. Given the prevalence of smartphones, a meticulously designed mobile app not only engages consumers directly but also amplifies brand visibility, nurturing customer loyalty.",
      },
      {
        subHeading: "",
        paragraph:
          "It stands as a strategic investment, guaranteeing flexibility amid evolving market trends and user preferences within the dynamic digital terrain.",
      },
    ],
  },
  {
    id: 1,
    heading: "Benefits Of Mobile App Development ?",
    panel: "panel2",
    details: [
      {
        subHeading: "Brand Visibility :",
        paragraph:
          "Establish a visible presence on users' devices, reinforcing brand awareness.",
      },
      {
        subHeading: "Efficient Marketing : ",
        paragraph:
          "Targeted promotions and notifications maximize marketing effectiveness.",
      },
      {
        subHeading: "Brand Consistency:",
        paragraph:
          " Web designers incorporate consistent brand elements, such as logos and color schemes, reinforcing brand identity across digital platforms.",
      },
      {
        subHeading: "Streamlined User Experience : ",
        paragraph:
          "Tailored interfaces enhance user satisfaction and streamline interactions.",
      },
      // {
      //   subHeading: "Data Analytics",
      //   paragraph:
      //     " Gain valuable insights into user behavior and preferences for informed decision-making Responsive design ensures your website functions seamlessly on various devices, catering to the growing number of mobile users.",
      // },
    ],
  },
  {
    id: 2,
    heading: "Mobile App Development Services ?",
    panel: "panel3",
    details: [
      {
        subHeading: "",
        paragraph:
          "Our mobile app services provide comprehensive solutions for designing, developing, and optimizing applications on various platforms.",
      },
      {
        subHeading: "",
        paragraph:
          "From conceptualization to deployment, we focus on creating user-centric and innovative mobile experiences, ensuring functionality, aesthetics, and seamless performance to meet the evolving demands of the digital landscape.",
      },
    ],
  },
  {
    id: 3,
    heading: "Mobile App Development ?",
    panel: "panel4",
    details: [
      {
        subHeading: "",
        paragraph:
          "Our mobile app development services encompass the meticulous creation of sophisticated software applications tailored for smartphones and tablets.",
      },
      {
        subHeading: "",
        paragraph:
          "From conceptualization to implementation, we specialize in crafting feature-rich apps, ensuring seamless user experiences and leveraging cutting-edge technologies to meet the diverse needs of our clients.",
      },
    ],
  },
];
export const WHY_CHOOSE_DIGITAL_MARKETING = [
  {
    id: 0,
    heading: "Why Digital Marketing ?",
    panel: "panel1",
    details: [
      {
        subHeading: "",
        paragraph:
          "Digital marketing is essential for businesses to thrive in the modern landscape. It enables precise audience targeting, cost-effective strategies, and real-time analytics",
      },
      {
        subHeading: "",
        paragraph:
          "With the ability to reach global audiences, digital marketing optimizes brand visibility, fosters customer engagement, and ensures adaptability to dynamic market trends, driving sustained success.",
      },
    ],
  },
  {
    id: 1,
    heading: "Benefits Of Digital Marketing ?",
    panel: "panel2",
    details: [
      {
        subHeading: "Brand Visibility :",
        paragraph: " Pinpoint audience engagement for optimal results.",
      },
      {
        subHeading: "Cost-Effective:  ",
        paragraph: "Efficient use of resources for maximum impact.",
      },
      {
        subHeading: "Real-Time Analytics:",
        paragraph: "  Instant insights for data-driven decision-making.",
      },
      {
        subHeading: "Global Reach: ",
        paragraph: " Connect with audiences worldwide for expanded visibility",
      },
    ],
  },
  {
    id: 2,
    heading: "Digital Marketing Service ?",
    panel: "panel3",
    details: [
      {
        subHeading: "",
        paragraph:
          "Delivering comprehensive digital marketing services, we strategically promote brands through SEO, content marketing, social media, and paid advertising",
      },
      {
        subHeading: "",
        paragraph:
          "Our approach optimizes brand visibility, engages target audiences, and guarantees measurable results.",
      },
      {
        subHeading: "",
        paragraph:
          "our services align with evolving market trends and user preferences, ensuring sustained success in the dynamic digital landscape.",
      },
    ],
  },
  {
    id: 3,
    heading: "Development OF Digital Marketing ?",
    panel: "panel4",
    details: [
      {
        subHeading: "Strategic Promotion:",
        paragraph: " Harnessing online channels for effective brand promotion.",
      },
      {
        subHeading: "Diverse Methods: ",
        paragraph:
          "Utilizing SEO, content marketing, social media, and paid advertising.",
      },
      {
        subHeading: "Audience Engagement:",
        paragraph: "  Engaging and connecting with target audiences.",
      },
      {
        subHeading: "Measurable Results: ",
        paragraph: "  Employing analytics for quantifiable outcomes.",
      },
    ],
  },
];
export const WHY_CHOOSE_MERN_STACK = [
  {
    id: 0,
    heading: "Why Choose MERN Stack?",
    panel: "panel1",
    details: [
      {
        subHeading: "",
        paragraph:
          "Embrace the MERN (MongoDB, Express.js, React.js, Node.js) stack for web development to harness the power of a cohesive JavaScript ecosystem. This choice guarantees streamlined development, reusable code, and effortless scalability. Bolstered by a vibrant community, isomorphic JavaScript features, and an extensive ecosystem, MERN enables developers to craft dynamic, real-time applications with unparalleled ease and effectiveness, ensuring a seamless and efficient web development experience.",
      },
    ],
  },
  {
    id: 1,
    heading: "Benefits Of MERN Stack?",
    panel: "panel2",
    details: [
      {
        subHeading: "Full-Stack JavaScript:",
        paragraph:
          "Developers can seamlessly work across the entire stack, reducing complexity.",
      },
      {
        subHeading: "Real-time Functionality with Node.js: ",
        paragraph:
          "Node.js empowers real-time functionalities, essential for creating interactive and responsive applications.",
      },
      {
        subHeading: "Modularity and Code Reusability:",
        paragraph:
          " Components are designed for reusability, fostering modularity and accelerating development pace.",
      },
      {
        subHeading: "Community-Driven Support:",
        paragraph:
          "Each stack component enjoys robust community support, providing developers with access to valuable resources and knowledge.",
      },
    ],
  },
  {
    id: 2,
    heading: "MERN Stack developing Services?",
    panel: "panel3",
    details: [
      {
        subHeading: "",
        paragraph:
          "Enhance your projects with our MERN (MongoDB, Express.js, React.js, Node.js) development services, featuring a unified JavaScript stack for streamlined coding, reusable solutions, and seamless scalability. With strong community support and isomorphic JavaScript capabilities, we empower clients to effortlessly create dynamic, real-time applications, delivering innovative and effective solutions to meet diverse web development needs.",
      },
    ],
  },
];
export const WHY_CHOOSE_MEAN_STACK = [
  {
    id: 0,
    heading: "Why Choose MEAN Stack?",
    panel: "panel1",
    details: [
      {
        subHeading: "",
        paragraph:
          "The MEAN stack—MongoDB, Express.js, Angular, and Node.js—stands out as an excellent option for web development, offering a cohesive JavaScript-based ecosystem. This choice guarantees smooth data flow, code uniformity, and efficiency across the development lifecycle. Boasting a flexible mix of technologies for front-end and back-end, the MEAN stack empowers the development of scalable, maintainable, and contemporary web applications.",
      },
    ],
  },
  {
    id: 1,
    heading: "Benefits Of MEAN Stack?",
    panel: "panel2",
    details: [
      {
        subHeading: "Unified Technology Stack:",
        paragraph:
          "The MEAN stack (Mongo DB, Express.js, Angular, Node.js) provides a seamless end-to-end JavaScript environment, eliminating the need for different languages and promoting code consistency throughout the development process",
      },
      {
        subHeading: "Versatility and Scalability : ",
        paragraph:
          "MEAN's versatile combination of technologies caters to both front-end and back-end development, allowing developers to create scalable, maintainable, and modern web applications. This flexibility is particularly advantageous for projects with evolving requirements.",
      },
      {
        subHeading: "Brand Consistency:",
        paragraph:
          " Web designers incorporate consistent brand elements, such as logos and color schemes, reinforcing brand identity across digital platforms.",
      },
      {
        subHeading: "Full-stack JavaScript Development: ",
        paragraph:
          "MEAN enables full-stack JavaScript development, allowing developers to leverage their skills across the entire application stack. This leads to improved collaboration, streamlined workflows, and faster development cycles.",
      },
      {
        subHeading: "Rich Ecosystem and Community Support:",
        paragraph:
          " Each component of the MEAN stack has a robust ecosystem and benefits from active community support. MongoDB, Express.js, Angular, and Node.js all have extensive libraries and modules, facilitating rapid development and troubleshooting.",
      },
    ],
  },
  {
    id: 2,
    heading: "MEAN Stack developing Services?",
    panel: "panel3",
    details: [
      {
        subHeading: "Expert MEAN Stack Developers:",
        paragraph:
          "Our skilled team excels in utilizing MongoDB for flexible data storage, ensuring adaptability to evolving data requirements.",
      },
      {
        subHeading: "Robust Server-Side Logic with Express.js:",
        paragraph:
          "We leverage Express.js to implement resilient server-side logic, optimizing the efficiency and performance of your applications.",
      },
      {
        subHeading: "Efficient Runtime Execution with Node.js:",
        paragraph:
          "Our developers harness the power of Node.js for efficient runtime executive ,contributing to the overall performance of your web application.",
      },
    ],
  },
];
export const WHY_CHOOSE_PHP = [
  {
    id: 0,
    heading: "Why Choose PHP?",
    panel: "panel1",
    details: [
      {
        subHeading: "",
        paragraph:
          "PHP is chosen for its server-side scripting prowess, seamlessly creating dynamic web content.",
      },
      {
        subHeading: "",
        paragraph:
          "Renowned for simplicity and versatility, PHP powers numerous websites and applications.",
      },
      {
        subHeading: "",
        paragraph:
          "With its widespread use and constant evolution, PHP ensures efficient, scalable, and cost-effective solutions for diverse web development needs.",
      },
    ],
  },
  {
    id: 1,
    heading: "Benefits Of PHP?",
    panel: "panel2",
    details: [
      {
        subHeading: "Versatility:",
        paragraph: " Adaptable for various web development tasks..",
      },
      {
        subHeading: "Cost-Effective: ",
        paragraph: "Open-source nature reduces development expenses.",
      },
      {
        subHeading: "Scalability:",
        paragraph: "Supports growth with ease of expansion.",
      },
      {
        subHeading: "Community Support:",
        paragraph: "Large community ensures ongoing updates and assistance.",
      },
      {
        subHeading: "Integration: ",
        paragraph: "  Easily integrates with databases and other technologies.",
      },
    ],
  },
  {
    id: 2,
    heading: "PHP developing Services?",
    panel: "panel3",
    details: [
      {
        subHeading: "",
        paragraph:
          "Our PHP services encompass dynamic web development, utilizing server-side scripting to create interactive content.",
      },
      {
        subHeading: "",
        paragraph:
          "From custom applications to website enhancements, we leverage PHP's versatility to meet diverse needs.",
      },
      {
        subHeading: "",
        paragraph:
          "Our commitment to simplicity and quality ensures effective solutions in this widely adopted and fundamental web development language.",
      },
    ],
  },
];
export const serviceUiUxContent = [
  {
    id: 0,
    image: figmaImage,
    heading: "Figma",
    subHeading:
      "Figma is a cloud-based design and prototyping tool, enabling collaborative real-time editing for teams. It features powerful vector editing, interactive prototyping, and supports design consistency through components and styles. With cross-platform accessibility, Figma streamlines the entire design process from creation to developer handoff.",
  },
  {
    id: 1,
    image: zeplinImage,
    heading: "Zeplin",
    subHeading:
      "Zeplin is a design collaboration tool streamlining the handoff process between designers and developers. It allows designers to upload designs, generate style guides, and provides developers with assets and specs. With real-time collaboration features, Zeplin enhances communication and ensures a smooth transition from design to development in a project.",
  },
  {
    id: 2,
    image: photoshopImage,
    heading: "Photoshop",
    subHeading:
      "Adobe Photoshop is a powerful raster graphics editor used for image editing, retouching, and manipulation. It provides a wide range of tools for creating and enhancing digital images, including layers, filters, and various effects. Widely used by photographers and designers, Photoshop is an industry-standard software for professional image editing and graphic design.",
  },
  {
    id: 3,
    image: adobeImage,
    heading: "Adobe XD",
    subHeading:
      "Adobe XD is a powerful design and prototyping tool that simplifies the creation of user interfaces and experiences. With a user-friendly interface and robust features, it enables designers to efficiently design and prototype websites and applications. Collaboration is seamless, and interactive prototypes allow for thorough testing of designs, making it a go-to tool for UI/UX professionals.",
  },
];

export const serviceDigitalContent = [
  {
    id: 0,
    image: seoImage,
    heading: "SEO",
    subHeading:
      "SEO, an acronym for Search Engine Optimization, strategically enhances a website's visibility on search engines. This process includes optimizing content, refining site structure, and obtaining high-quality backlinks. The objective is to secure higher rankings in search results, resulting in increased organic traffic and an enhanced overall online presence for the website.",
  },
  {
    id: 1,
    image: contentMarketingImage,
    heading: "Content Marketing",
    subHeading:
      "Content marketing involves creating and distributing valuable, relevant content to attract and engage a target audience. Through blog posts, videos, infographics, and more, it aims to build brand awareness, establish authority, and nurture customer loyalty, ultimately driving profitable customer action and fostering long-term relationships.",
  },
  {
    id: 2,
    image: emailMarketingImage,
    heading: "Email Marketing",
    subHeading:
      "Email marketing is a strategic digital marketing approach that uses targeted emails to communicate with a specific audience. It aims to nurture leads, drive customer engagement, and build brand loyalty. Personalized content, automation, and analytics are key components, optimizing campaigns fo r effectiveness and fostering long-term customer relationships.",
  },
  {
    id: 3,
    image: smoImage,
    heading: "Social Media Optimization (SMO)",
    subHeading:
      "Social Media Optimization (SMO) is a digital marketing strategy focused on enhancing a brand's visibility and engagement on social media platforms. By optimizing content, fostering community interactions, and leveraging analytics, SMO aims to amplify brand awareness, drive website traffic, and build meaningful connections with the target audience.",
  },
];
export const serviceMobileContent = [
  {
    id: 0,
    image: reactNative,
    heading: "React native",
    subHeading:
      "React native a Facebook-developed open-source framework, enables the construction of cross-platform mobile applications through the use of JavaScript and React. This approach permits developers to craft native-like experiences on both iOS and Android platforms, utilizing a unified codebase, thereby simplifying development and minimizing the necessity for platform-specific coding.",
  },
  {
    id: 1,
    image: flutterImage,
    heading: "Flutter",
    subHeading:
      "Flutter a UI toolkit created by Google, streamlines the development of natively compiled applications for mobile, web, and desktop, all from a unified codebase. With Dart programming language at its core, Flutter empowers developers to craft visually compelling and high-performance applications, ensuring uniform and captivating user experiences across various platforms.",
  },
  {
    id: 2,
    image: iosImage,
    heading: "iOS",
    subHeading:
      "iOS serves as Apple's mobile operating system, driving iPhones, iPads, and iPod Touch devices. Renowned for its elegant design and user-friendly interface, iOS delivers a secure and seamless user experience. Development of iOS apps commonly employs Swift or Objective-C, ensuring alignment with Apple's ecosystem and smooth distribution via.",
  },
  {
    id: 3,
    image: mobileImage,
    heading: "Mobile apps",
    subHeading:
      "Mobile apps are software applications developed for smartphones and tablets, delivering diverse functionalities such as entertainment, productivity, or communication. Created through coding, design, and testing, they are distributed through app stores for easy access, enhancing user experiences in various aspects of daily life.",
  },
  {
    id: 4,
    image: androidImage,
    heading: "Android",
    subHeading:
      "Android is a mobile operating system developed by Google. Launched in 2008, it powers a majority of smartphones and tablets globally. Known for its open-source nature, Android allows customization and supports a vast range of apps through the Google Play Store. Regular updates enhance functionality and security. The platform has a diverse ecosystem of devices and offers a user-friendly interface, making it a dominant force in the mobile industry.",
  },
];

export const serviceMeanContent = [
  {
    id: 0,
    image: mongoDBImage,
    heading: "Mongo DB",
    subHeading:
      "Mongo DB, a premier NoSQL database by Mongo DB Inc., employs BSON for flexible data storage in a document- oriented framework. Renowned for managing vast unstructured data with exceptional performance and scalability, Mongo DB’s dynamic, schema-less model, along with features like horizontal scaling and automatic sharding, makes it a top choice for contemporary, data-intensive applications, ensuring optimal efficiency in data processing and storage.",
  },
  {
    id: 1,
    image: expressJSImage,
    heading: "Express.js",
    subHeading:
      "Express.js, a resilient and streamlined web application framework for Node.js, streamlines the development of scalable and modular web applications and APIs. Prioritizing performance and flexibility, it equips developers with essential features and middleware to adeptly manage routing, HTTP requests, and responses. Its unobtrusive design and expansive ecosystem position Express.js as a favored tool for crafting server-side applications, empowering developers to create code that is both robust and easily maintainable.",
  },
  {
    id: 2,
    image: angularImage,
    heading: "Angular",
    subHeading:
      "Angular, an open-source front-end framework crafted by Google, employs TypeScript to elevate web development with static typing, enhancing tooling, code maintainability, and scalability. Angular's structural design facilitates the development of modular, dynamic, and high- performance web applications, integrating functionalities such as bidirectional data binding, dependency injection, and an extensive library of pre-built components. This synergy establishes Angular as a potent and effective resource for developers in contemporary web development, streamlining the creation of resilient and engaging user interfaces.",
  },
  {
    id: 3,
    image: nodeJsImage,
    heading: "Node.js",
    subHeading:
      "Node.js serves as a versatile runtime environment, executing server-side JavaScript for the development of scalable and efficient network applications. Its foundation on the V8 JavaScript engine enables support for asynchronous, event-driven programming, particularly adept at managing concurrent requests. Embraced for server-side application development, Node.js boasts a robust ecosystem of packages, recognized for its lightweight architecture and rapid execution.",
  },
];
export const serviceMernContent = [
  {
    id: 0,
    image: mongoDBImage,
    heading: "Mongo DB",
    subHeading:
      "Mongo DB, a premier NoSQL database by Mongo DB Inc., employs BSON for flexible data storage in a document- oriented framework. Renowned for managing vast unstructured data with exceptional performance and scalability, Mongo DB’s dynamic, schema-less model, along with features like horizontal scaling and automatic sharding, makes it a top choice for contemporary, data-intensive applications, ensuring optimal efficiency in data processing and storage.",
  },
  {
    id: 1,
    image: expressJSImage,
    heading: "Express.js",
    subHeading:
      "Express.js, a resilient and streamlined web application framework for Node.js, streamlines the development of scalable and modular web applications and APIs. Prioritizing performance and flexibility, it equips developers with essential features and middleware to adeptly manage routing, HTTP requests, and responses. Its unobtrusive design and expansive ecosystem position Express.js as a favored tool for crafting server-side applications, empowering developers to create code that is both robust and easily maintainable.",
  },
  {
    id: 2,
    image: reactImage,
    heading: "React JS",
    subHeading:
      "ReactJS, meticulously crafted and sustained by Facebook, stands as a declarative and highly efficient JavaScript library tailored for constructing sophisticated user interfaces.Developers harness its capabilities to construct reusable UI components that adeptly and seamlessly respond to dynamic data changes. Powered by a virtual DOM, React ensures optimal rendering performance, while its modular, component- based architecture fosters the creation of scalable and maintainable applications. Embraced across the industry for crafting contemporary web solutions, ReactJS is celebrated for its simplicity, adaptability, and an expansive ecosystem of libraries.",
  },
  {
    id: 3,
    image: nodeJsImage,
    heading: "Node.js",
    subHeading:
      "Node.js serves as a versatile runtime environment, executing server-side JavaScript for the development of scalable and efficient network applications. Its foundation on the V8 JavaScript engine enables support for asynchronous, event-driven programming, particularly adept at managing concurrent requests. Embraced for server-side application development, Node.js boasts a robust ecosystem of packages, recognized for its lightweight architecture and rapid execution.",
  },
];

export const DEVELOPMENT_PROCESS_IMAGES = [
  {
    id: 1,
    image: Planning,
    name: "Planning",
    detail:
      "Strateging actions to achieve goals efficiently and effectively with foresight",
  },
  {
    id: 2,
    image: Design,
    name: "Design",
    detail:
      "Creating purposeful visual and functional solutions with thoughtful intention and aesthetics",
  },
  {
    id: 3,
    image: Development,
    name: "Development",
    detail:
      "Evolving,coding and refining to enhance MEAN stack applications seamlessly",
  },
  {
    id: 4,
    image: QA,
    name: "Q/A launch",
    detail: "Exploring the ins and outs of MEAN stack applications effectively",
  },
  {
    id: 5,
    image: Maintenance,
    name: "Maintenance",
    detail:
      "Sustaining and optimizing MEAN stack applications for enduring performance and reliability",
  },
];
