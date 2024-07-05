import {
  ServicesWrapper,
  ServicesBox,
  ServicesCard,
  ServicesHeading,
  ServicesCardMedia,
} from "./homePageStyled";
import { SERVICES_CONTENT } from "./Constants";
import { Box } from "@mui/material";

const BrainspackServices = () => {
  return (
    <>
      <ServicesWrapper>
        <ServicesBox>
          {SERVICES_CONTENT.map((service) => (
            <ServicesCard position={"relative"}>
              
              <Box width={"100%"} height={"360px"} className={"imageServiceBox"} boxSizing={"border-box"} overflow={"hidden"} >
                <ServicesCardMedia component="img" src={service.image} className="scaleImage" />
                <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                height={"20%"}
                position={"absolute"}
                bottom={"30px"}
                left={"60px"}
                className="serviceHeadingText"
                
              >
                <ServicesHeading  variant="h5">{service.name}</ServicesHeading>
              </Box>
                
              </Box>
              
             
            </ServicesCard>
          ))}
        </ServicesBox>
      </ServicesWrapper>
    </>
  );
};
export default BrainspackServices;
