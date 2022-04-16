import {
  EuiButton,
  EuiFieldNumber,
  EuiFilePicker,
  EuiForm,
  EuiFormRow,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
} from "@elastic/eui";
import React, { useState } from "react";
const ImageForm = ({ handleImageForm }) => {
  // const [showErrors, setShowErrors] = useState(false);
  const [file, setFile] = useState();
  const [algoType, setAlgoType] = useState("nearest_neighbour");
  const [scalingVal, setScalingVal] = useState(1);

  return (
    <EuiPanel paddingSize="m">
      <EuiForm
        component="form"
        // isInvalid={showErrors}
        // error={errors}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleImageForm(file, algoType, scalingVal);
        }}
      >
        <EuiFormRow
          id="img"
          label="Image Picker"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EuiFilePicker
            onChange={(file) => setFile(file)}
            required
            accept="image/jpeg, image/png, image/svg+xml, image/webp"
          />
        </EuiFormRow>
        <EuiFormRow
          id="algo"
          label="Select Interpolation Algorithm"
          fullWidth
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   width: "100%",
          // }}
        >
          <EuiSelect
            value={algoType}
            onChange={(e) => setAlgoType(e.target.value)}
            options={[
              { value: "nearest_neighbour", text: "nearest_neighbour" },
              { value: "bilinear", text: "bilinear" },
              { value: "bicubic", text: "bicubic" },
              { value: "idw", text: "idw" },
            ]}
          />
        </EuiFormRow>

        <EuiFormRow
          id="scalingVal"
          label="Choose The Scaling Value"
          fullWidth
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          <EuiFieldNumber
            placeholder="Scaling Value"
            // fullWidth={true}
            value={scalingVal}
            min={1}
            max={5}
            onChange={(e) => setScalingVal(e.target.value)}
          />
        </EuiFormRow>

        <EuiSpacer />
        <EuiButton type="submit" fill>
          Submit
        </EuiButton>
      </EuiForm>
    </EuiPanel>
  );
};

export default ImageForm;
