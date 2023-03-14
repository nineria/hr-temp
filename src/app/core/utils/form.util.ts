export const jsonToFormData = (refFormData: FormData, json: any) => {
  for (let key in json) {
    refFormData.append(key, json[key] || null);
  }
};
