export const getPolicyById = async ({ policyNumber }: any) => {
  try {
    const fetchedResponse: any = await fetch(`../api/policy/${policyNumber}`);
    const response = await fetchedResponse.json();
    return response;
  } catch (error) {
    return error;
  }
};

export const postnewPolicy = async ({ data }: any) => {
  function removeEmptyStringProperties(obj: any) {
    const newObj: any = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== "") {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  }

  const sortedWithoutEmptyStrings = removeEmptyStringProperties(data);
  try {
    const fetchedResponse: any = await fetch(`../api/policy/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sortedWithoutEmptyStrings),
    });
  } catch (error) {
    return error;
  }
};
