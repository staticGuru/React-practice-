import React from "react";
// import Multistep from 'react-multistep';
import StepWizard from "react-step-wizard";
import MyForm from "./multi/MyForm";
import MyForm2 from "./multi/MyForm2";
import MyForm3 from "./multi/MyForm3";
// import StepOne from './multi/StepOne';
// import StepThird from './multi/StepThird';
// import StepTwo from './multi/StepTwo';

function MultiStepForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <StepWizard>
        <MyForm/>
        <MyForm2 />

        <MyForm3 />
      </StepWizard>
    </div>
  );
}

export default MultiStepForm;
