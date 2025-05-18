import { capitalize } from "lodash";

export const getSelectOptions = (options: string[]) => {
  return options.map((option) => {
    // Insert space before each uppercase letter and trim any leading/trailing spaces
    const spaced = option.replace(/([A-Z])/g, " $1").trim();

    const label = capitalize(spaced);
    return {
      value: option,
      label,
    };
  });
};
