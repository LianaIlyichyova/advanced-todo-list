import { useState } from "react";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store/index";
import { setCategory, setPriority, resetFilters } from "@store/filtersSlice";

import { Form } from "antd";
import { AppstoreOutlined, NodeCollapseOutlined } from "@ant-design/icons";

import { getSelectOptions } from "@helpers/getSelectOptions";

import Typography from "@components/Typography";
import IconWrapper from "@components/IconWrapper";
import { StyledFilters, StyledSelect } from "./Filters.styles";

import { Priority, Category } from "@assets/filters";

const priorityFilterOptions = getSelectOptions(Object.keys(Priority));
const categoryFilterOptions = getSelectOptions(Object.keys(Category));

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();

  // 🧠 State for open/close dropdowns
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
    <Form>
      <StyledFilters>
        <Form.Item
          label={
            <IconWrapper>
              <AppstoreOutlined />
            </IconWrapper>
          }
        >
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

        <Form.Item
          label={
            <IconWrapper>
              <NodeCollapseOutlined rotate={90} />
            </IconWrapper>
          }
        >
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
          <span onClick={() => dispatch(resetFilters())}>
            <Typography textDecoration="underline">Reset Filters</Typography>
          </span>
        </Form.Item>
      </StyledFilters>
    </Form>
  );
};

export default Filters;
