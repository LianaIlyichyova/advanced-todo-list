import { Form, Input, type FormInstance } from "antd";

import { Priority, Category, Status } from "@assets/filters";

import Select from "@components/Select";

import type { Todo } from "@shared-types/todo";

import { getSelectOptions } from "@helpers/getSelectOptions";

import { v4 as uuidv4 } from "uuid";

interface AddEditContentProps {
  initialValues?: Partial<Todo>;
  onSubmit: (values: Todo) => void;
  form: FormInstance;
}

const { TextArea } = Input;

const AddEditContent = ({
  initialValues,
  onSubmit,
  form,
}: AddEditContentProps) => {
  const id = uuidv4();

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={(values) => {
        const todo: Todo = {
          id: initialValues?.id ?? id,
          ...values,
        };
        onSubmit(todo);
      }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter a title" }]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <TextArea rows={4} placeholder="Enter description" autoSize />
      </Form.Item>

      <Form.Item
        label="Priority"
        name="priority"
        rules={[{ required: true, message: "Please select a priority" }]}
      >
        <Select
          placeholder="Select priority"
          options={getSelectOptions(Object.keys(Priority))}
        />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please select a category" }]}
      >
        <Select
          placeholder="Select category"
          options={getSelectOptions(Object.keys(Category))}
        />
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Please select a status" }]}
      >
        <Select
          placeholder="Select status"
          options={getSelectOptions(Object.keys(Status))}
        />
      </Form.Item>
    </Form>
  );
};

export default AddEditContent;
