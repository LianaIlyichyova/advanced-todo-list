import { StyledFilters, StyledSelect } from "./Filters.styles";
import { Priority, Category } from "@shared-types/filters";
import { getSelectOptions } from "@utils/getSelectOptions";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store/index";

import { Form } from "antd";
import { setCategory, setPriority } from "@store/filtersSlice";

const priorityFilterOptions = getSelectOptions(Object.keys(Priority));
const categoryFilterOptions = getSelectOptions(Object.keys(Category));

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Form layout="vertical">
      <StyledFilters>
        <Form.Item label="Filter by priority:">
          <StyledSelect
            options={priorityFilterOptions}
            onChange={(value) => dispatch(setPriority(value))}
          />
        </Form.Item>
        <Form.Item label="Filter by category:">
          <StyledSelect
            options={categoryFilterOptions}
            onChange={(value) => dispatch(setCategory(value))}
          />
        </Form.Item>
      </StyledFilters>
    </Form>
  );
};

export default Filters;
