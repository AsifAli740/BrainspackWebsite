import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AutoFixOffIcon from "@mui/icons-material/AutoFixOff";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckIcon from "@mui/icons-material/Check";
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
    item: "contact",
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
    heading: "Web Development",
    subHeading: "Creating websites using coding and design techniques.",
  },
  {
    icons: "icons",
    heading: "UI/UX Designing",
    subHeading: "Expert Web Designing for Impactful Digital Experiences.",
  },
  {
    icons: "icons",
    heading: "Mobile Application",
    subHeading: "Unleashing Innovation in the Palm of Your Hand.",
  },
  {
    icons: "icons",
    heading: "Digital Marketing",
    subHeading: "Strategic Promotion for Online Triumph.",
  },
];


export const counterItemContent = [
  {
    icons: <BusinessCenterIcon />,
    dataCount: "3",
    counterPlus: "+",
    counterTitle:"Years of experience"
  },
  {
    icons: <PermDataSettingIcon />,
    dataCount: "700",
    counterPlus: "+",
    counterTitle:"IT problems solved"
  },
  {
    icons: <ThumbUpIcon />,
    dataCount: "11",
    counterPlus: "+",
    counterTitle:"Satisfied clients"
  },
  {
    icons: <GroupsIcon />,
    dataCount: "15",
    counterPlus: "+",
    counterTitle:"Pro team members"
}
]
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
