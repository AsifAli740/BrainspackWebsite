import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import "../ExternalCss/GetKnowUs.css";
import {
  CustomAccordian,
  CustomAccordianDetails,
  UiAndUxBox,
  UiAndUxHeading,
  UiAndUxParagraph,
  UiAndUxSubHeading,
  UiAndUxWrapper,
} from "./WhyChooseUsStyled";

const WhyChooseOurServices = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <UiAndUxWrapper>
        <UiAndUxBox>
          {data.map((designing) => (
            <CustomAccordian
              expanded={expanded === designing.panel}
              onChange={handleChange(designing.panel)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <UiAndUxHeading>{designing.heading}</UiAndUxHeading>
              </AccordionSummary>
              <CustomAccordianDetails>
                {designing.details.map((detail) =>
                  detail.subHeading === "" ? (
                    <Box>
                      <UiAndUxParagraph>{detail.paragraph}</UiAndUxParagraph>
                    </Box>
                  ) : (
                    <Box display={"flex"} gap={"10px"}>
                      <Box>
                        <UiAndUxSubHeading>
                          {detail.subHeading}
                        </UiAndUxSubHeading>
                      </Box>
                      <Box>
                        <UiAndUxParagraph>{detail.paragraph}</UiAndUxParagraph>
                      </Box>
                    </Box>
                  )
                )}
              </CustomAccordianDetails>
            </CustomAccordian>
          ))}
        </UiAndUxBox>
      </UiAndUxWrapper>
    </>
  );
};

export default WhyChooseOurServices;
