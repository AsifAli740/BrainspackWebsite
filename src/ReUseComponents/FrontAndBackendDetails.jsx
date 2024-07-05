import { Box, Typography } from "@mui/material";
import { WEB_DEVELOPMENT } from "../HomePageFolder/Constants";
import {
  FrontAndBackendBox,
  FrontAndBackendContainer,
  FrontAndBackendTextDetails,
  FrontAndBackendTextName,
} from "./ServicesCompStyled";

const FrontAndBackendDetailsComp = () => {
  return (
    <>
      <FrontAndBackendContainer>
        <FrontAndBackendBox>
          {WEB_DEVELOPMENT.map((details) => (
            <>
              <Box>
                <FrontAndBackendTextName>
                  {details.name}
                </FrontAndBackendTextName>
              </Box>
              <Box>
                <FrontAndBackendTextDetails>
                  {details.text}
                </FrontAndBackendTextDetails>
              </Box>
            </>
          ))}
        </FrontAndBackendBox>
      </FrontAndBackendContainer>
    </>
  );
};
export default FrontAndBackendDetailsComp;
