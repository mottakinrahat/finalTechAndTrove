export const modifyPayloadT = (values: any) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  return data;
};
