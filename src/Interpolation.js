import { EuiBeacon, EuiButton, EuiHeaderAlert, EuiText } from "@elastic/eui";
import axios from "axios";
import React, { useState } from "react";
import { Header } from "./Header";
import ImageForm from "./ImageForm";
import ImagePreviewPage from "./ImagePreviewPage";

const Interpolation = () => {
  // const [activeStep, setActiveStep] = useState(1);
  const [origImage, setOrigImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [showDiffPage, setShowDiffPage] = useState(false);
  const [error, setError] = useState(null);

  const reset = () => {
    setProcessing(false);
    setShowDiffPage(false);
    setOrigImage(null);
    setProcessedImage(null);
  };

  // if (activeStep === 1) {
  // } else if (activeStep === 2) {
  // } else {
  // }

  const convertToBlob = (img) => {
    return URL.createObjectURL(img);
  };

  const getImage = async () => {
    const res = await fetch(
      "https://image-interpolation-app.herokuapp.com/api/algorithms"
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setProcessedImage(imageObjectURL);
  };

  const handleImageForm = (file, algoType, scalingVal) => {
    // console.log(file[0], algoType, scalingVal);
    setError(null);
    setProcessing(true);
    setOrigImage(file[0]);
    const formData = new FormData();
    formData.append("multiPartFile", file[0], file[0].name);
    axios
      .post(
        "https://image-interpolation-app.herokuapp.com/api/algorithms/" +
          algoType +
          "/" +
          scalingVal,
        formData
      )
      .then((response) => {
        if (response.status === 200) {
          getImage();
          // setProcessing(false);
          setShowDiffPage(true);
        }
      })
      .catch((err) => {
        setProcessing(false);
        if (err.response) {
          // Request made and server responded
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);
        }
        setError(err);
      });
  };

  return (
    <>
      <Header></Header>
      <div
        style={{
          padding: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "max-content",
          }}
        >
          {processing ? (
            !showDiffPage ? (
              <EuiButton isLoading={true}>Processing&hellip;</EuiButton>
            ) : (
              <ImagePreviewPage
                resetForm={reset}
                origImage={convertToBlob(origImage)}
                processedImage={processedImage}
                fileName={origImage.name}
              ></ImagePreviewPage>
            )
          ) : (
            <>
              {error && (
                <>
                  <EuiHeaderAlert
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    text={
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            // alignContent: "space-around",
                            // alignItems: "space-evenly",
                            // justifyContent: "space-evenly",
                          }}
                        >
                          <EuiBeacon
                            color="#D36086"
                            style={{
                              margin: "5px",
                              backgroundColor: "#D36086",
                            }}
                          ></EuiBeacon>
                          <EuiText>Server Error</EuiText>
                        </div>
                      </>
                    }
                  ></EuiHeaderAlert>
                </>
              )}
              <ImageForm handleImageForm={handleImageForm}></ImageForm>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Interpolation;
