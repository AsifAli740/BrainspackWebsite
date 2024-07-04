import React from 'react';
import ServicePageHeaderLink from '../ServicePageHeaderLink';
import NavbarComp from '../../ReUseComponents/NavbarComp';

import FooterComp from '../../HomePageFolder/Footer';

function Php(props) {
    return (
        <>
              <NavbarComp />
            <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"PHP"}
        nestedActiveText={"PHP"}
      />

<FooterComp />
        </>
    );
}

export default Php;