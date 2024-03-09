"use client";
import "./policy-form.css";
import { JsonForms } from "@jsonforms/react";
import sampleSchema from "../../Utils/sampleSchema.json";
import sampleUISchema from "../../Utils/sampleUiSchema.json";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { useEffect, useState } from "react";
import { getPolicyDetails } from "@/api/mainAPI";

const PolicyFormPage = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [fetchedData, setFetchedData] = useState("");
  const [updatedData, setUpdatedData] = useState("");

  const getPolicyDetailsView = async ({ policyNumber }: any) => {
    const response: any = await getPolicyDetails({ policyNumber });
    setFetchedData(response);
    setUpdatedData(response)
  };

  useEffect(() => {
    const detailSearch = setTimeout(() => {
      getPolicyDetailsView({ policyNumber });
    }, 1000);

    return () => {
      clearTimeout(detailSearch);
    };
  }, [policyNumber]);

  return (
    <div className="policy-form-container container">
      <form typeof="submit">
        <JsonForms
          schema={sampleSchema}
          uischema={sampleUISchema}
          data={updatedData}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={(data: any) => {
            setPolicyNumber(data?.data?.policyNumber);
            setUpdatedData(data?.data);
          }}
        />
        <div className="button-row">
          <button
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(fetchedData);
            }}
          >
            Submit
          </button>
          <button
            className="reset"
            onClick={(e) => {
              e.preventDefault();
              setUpdatedData(fetchedData);
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PolicyFormPage;
