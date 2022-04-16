import { EuiHeader, EuiHeaderLogo, EuiHeaderSectionItem } from "@elastic/eui";
import React from "react";

export const Header = () => {
  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo>Image Interpolation</EuiHeaderLogo>
      </EuiHeaderSectionItem>
      {/* <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink isActive>Docs</EuiHeaderLink>
          <EuiHeaderLink>Code</EuiHeaderLink>
          <EuiHeaderLink iconType="help">Help</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem> */}
    </EuiHeader>
  );
};
