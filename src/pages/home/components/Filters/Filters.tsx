import { StyledFilters, StyledSelect } from "./Filters.styles";
import { Priority, Category } from "@assets/filters";
import { getSelectOptions } from "@utils/getSelectOptions";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store/index";

import { Form } from "antd";
import { setCategory, setPriority, resetFilters } from "@store/filtersSlice";
import Typography from "@components/Typography";

import { useState } from "react";

const priorityFilterOptions = getSelectOptions(Object.keys(Priority));
const categoryFilterOptions = getSelectOptions(Object.keys(Category));

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [priorityOpen, setPriorityOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const handlePriorityChange = (value: string[]) => {
    dispatch(setPriority(value));
    setPriorityOpen(false); // Закрыть дропдаун после выбора
  };

  const handleCategoryChange = (value: string[]) => {
    dispatch(setCategory(value));
    setCategoryOpen(false); // Закрыть дропдаун после выбора
  };

  return (
    <Form layout="vertical">
      <StyledFilters>
        <Form.Item label="Filter by priority:">
          <StyledSelect
            options={priorityFilterOptions}
            onChange={handlePriorityChange}
            mode="multiple"
            allowClear
            open={priorityOpen}
            onDropdownVisibleChange={(visible) => setPriorityOpen(visible)}
          />
        </Form.Item>

        <Form.Item label="Filter by category:">
          <StyledSelect
            options={categoryFilterOptions}
            onChange={handleCategoryChange}
            mode="multiple"
            allowClear
            open={categoryOpen}
            onDropdownVisibleChange={(visible) => setCategoryOpen(visible)}
          />
        </Form.Item>

        <Form.Item style={{ paddingTop: "30px" }}>
          <span onClick={() => dispatch(resetFilters())}>
            <Typography textDecoration={"underline"}>Reset Filters</Typography>
          </span>
        </Form.Item>
      </StyledFilters>
    </Form>
  );
};

export default Filters;
