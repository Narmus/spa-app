import sampleData from "../Utils/sampleJSON.json";

const policies: any = [sampleData];

export const getAllPolicies = () => {
  const data = policies;
  return data;
};

export const getPolicyByID = ({ policyNumber }: any) => {
  const policySearched = policies?.find((element: any) => {
    return element?.policyNumber === policyNumber;
  });
  if (policySearched) {
    return policySearched;
  } else {
    return null;
  }
};

export const postNewPolicy = ({ data }: any) => {
  policies.push(data);
};
