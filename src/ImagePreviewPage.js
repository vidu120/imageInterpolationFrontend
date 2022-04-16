import { EuiButton, EuiCard, EuiFlexItem, EuiSpacer } from "@elastic/eui";
import React from "react";
import ImagePreview from "./ImagePreview";

const ImagePreviewPage = ({
  resetForm,
  origImage,
  processedImage,
  fileName,
}) => {
  const downloadFile = async () => {
    console.log(processedImage);
    // const blob = new Blob([processedImage], { type: "image/jpeg" });
    // const href = await URL.createObjectURL(blob);
    const href = processedImage;
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EuiFlexItem key="0" grow={false}>
          <EuiCard
            icon={ImagePreview(origImage, "Original Image")}
            // title={`Elastic ${item}`}
          />
        </EuiFlexItem>
        <EuiFlexItem key="1" grow={false}>
          <EuiCard
            icon={ImagePreview(processedImage, "Processed Image")}
            // title={`Elastic ${item}`}
          />
        </EuiFlexItem>
      </div>
      <EuiSpacer />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <EuiButton iconType="arrowLeft" onClick={() => resetForm()}>
          GO BACK
        </EuiButton>
        <EuiButton
          style={{ alignSelf: "end" }}
          iconType="download"
          onClick={() => downloadFile()}
        >
          Download
        </EuiButton>
      </div>
    </>
  );
};

export default ImagePreviewPage;
