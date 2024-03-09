"use client";
import { JsonForms } from "@jsonforms/react";
import sampleData from "../../Utils/sampleJSON.json";
import sampleSchema from "../../Utils/sampleSchema.json";
import sampleUISchema from "../../Utils/sampleUiSchema.json";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { useState } from "react";

const PolicyFormPage = () => {
  const [data, setData] = useState("");

  return (
    <div className="policy-form-container container">
      <form typeof="submit">
        <JsonForms
          schema={sampleSchema}
          uischema={sampleUISchema}
          data={sampleData}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={(data: any) => {
            setData(data?.data);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(data);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PolicyFormPage;
