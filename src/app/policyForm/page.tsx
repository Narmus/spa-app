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
import { getPolicyById, postnewPolicy } from "@/api/mainAPI";

const PolicyFormPage = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [fetchedData, setFetchedData] = useState("");
  const [updatedData, setUpdatedData] = useState("");

  const getPolicyDetailsView = async ({ policyNumber }: any) => {
    const response: any = await getPolicyById({ policyNumber });
    if (response?.status === 200) {
      setFetchedData(response?.response);
      setUpdatedData(response?.response);
    }
  };

  const postnewPolicyView = async ({ data }: any) => {
    const response: any = await postnewPolicy({ data });
    console.log("Respo", response);
  };

  useEffect(() => {
    const detailSearch = setTimeout(() => {
      policyNumber?.length === 11 && getPolicyDetailsView({ policyNumber });
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
              postnewPolicyView({ data: updatedData });
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
          <button
            className="reset"
            onClick={(e) => {
              e.preventDefault();
              setFetchedData("");
              setUpdatedData("");
            }}
          >
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

export default PolicyFormPage;
