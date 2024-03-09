"use client";
import { JsonForms } from "@jsonforms/react";
import sampleData from "../../Utils/sampleJSON.json";
import sampleSchema from "../../Utils/sampleSchema.json";
import sampleUISchema from "../../Utils/sampleUiSchema.json";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

const PolicyFormPage = () => {
  return (
    <div className="policy-form-container container">
      <JsonForms
        schema={sampleSchema}
        uischema={sampleUISchema}
        data={sampleData}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={(data: any) => {
          console.log("Data is... ", data);
        }}
      />
    </div>
  );
};

export default PolicyFormPage;
