import capitalize from "lodash.capitalize";

export const getSelectOptions = (options: string[]) => {
  return options.map((option) => {
    return {
      value: option,
      label: capitalize(option),
    };
  });
};
