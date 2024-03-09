import sampleData from "../Utils/sampleJSON.json";
const getPolicyDetails = async ({ policyNumber }: any) => {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = [sampleData]?.filter(
      (item) => item.policyNumber === policyNumber
    );
    const responseData = { ...data?.[0], policyNumber: policyNumber };
    return responseData;
  } catch (error) {
    console.error(error);
  }
};

export { getPolicyDetails };
