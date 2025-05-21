export const getSelectOptions = (obj: Record<string, string>) => {
  return Object.entries(obj).map(([value, label]) => {
    return {
      value,
      label,
    };
  });
};
