import React from "react";
import { EuiImage } from "@elastic/eui";

const ImagePreview = (img, imgType) => {
  // console.log(img, imgType);

  return (
    <EuiImage size="l" hasShadow caption={imgType} alt={imgType} src={img} />
  );
};

export default ImagePreview;
