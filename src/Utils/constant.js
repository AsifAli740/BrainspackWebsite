import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AutoFixOffIcon from "@mui/icons-material/AutoFixOff";
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
