import { useState } from "react";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store/index";
import { setCategory, setPriority, resetFilters } from "@store/filtersSlice";

import { Form, Button } from "antd";

import { getSelectOptions } from "@helpers/getSelectOptions";

import Typography from "@components/Typography";
import { StyledFilters, StyledSelect } from "./Filters.styles";

import { Priority, Category } from "@assets/filters";
import { useForm } from "antd/es/form/Form";

const priorityFilterOptions = getSelectOptions(Object.keys(Priority));
const categoryFilterOptions = getSelectOptions(Object.keys(Category));

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [form] = useForm();

  //  State for open/close dropdowns
  const [priorityOpen, setPriorityOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const handlePriorityChange = (value: string[]) => {
    dispatch(setPriority(value));
    setPriorityOpen(false);
  };

  const handleCategoryChange = (value: string[]) => {
    dispatch(setCategory(value));
    setCategoryOpen(false); // Close dropdown at every choose
  };

  return (
    <Form form={form}>
      <StyledFilters>
        <Form.Item name="priority">
          <StyledSelect
            options={priorityFilterOptions}
            onChange={handlePriorityChange}
            mode="multiple" // User can choose many
            allowClear // Can clear all selections
            open={priorityOpen} // Dropdown open/close state
            onDropdownVisibleChange={setPriorityOpen}
            placeholder="Filter by priority"
          />
        </Form.Item>

        <Form.Item name="category">
          <StyledSelect
            options={categoryFilterOptions}
            onChange={handleCategoryChange}
            mode="multiple"
            allowClear
            open={categoryOpen}
            onDropdownVisibleChange={setCategoryOpen}
            placeholder="Filter by category"
          />
        </Form.Item>

        <Form.Item>
          <Button
            onClick={() => {
              form.resetFields();
              dispatch(resetFilters());
            }}
            type="default"
          >
            <Typography>Reset Filters</Typography>
          </Button>
        </Form.Item>
      </StyledFilters>
    </Form>
  );
};

export default Filters;
