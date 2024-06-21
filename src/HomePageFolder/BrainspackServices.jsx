import {
  ServicesWrapper,
  ServicesBox,
  ServicesCard,
  ServicesHeading,
  ServicesCardMedia,
} from "./homePageStyled";
import { SERVICES_CONTENT } from "./Constants";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const BrainspackServices = () => {
  return (
    <>
      <ServicesWrapper>
        <ServicesBox>
          {SERVICES_CONTENT.map((service) => (
            <ServicesCard position={"relative"}>
              <Box width={"100%"} height={"80%"}>
                <ServicesCardMedia component="img" image={service.image} />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"20%"}
              >
                <ServicesHeading variant="h5">{service.name}</ServicesHeading>
              </Box>
            </ServicesCard>
          ))}
        </ServicesBox>
      </ServicesWrapper>
    </>
  );
};
export default BrainspackServices;
