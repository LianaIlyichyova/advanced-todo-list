import { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "@store/todosSlice";
import type { AppDispatch } from "@store/index";

import { Modal, Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Typography from "@components/Typography";
import TodoAddEditContent from "@components/AddEditContent";

import type { Todo } from "@shared-types/todo";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: Todo) => {
    dispatch(addTodo(data));
    setIsOpenModal(false);
    form.resetFields();
  };

  return (
    <>
      <Typography color="heading" variant="h1" fontSize="xl" fontWeight="500">
        Tasks Board
      </Typography>

      <Button onClick={() => setIsOpenModal(true)} type="primary">
        Add
        <PlusOutlined />
      </Button>

      <Modal
        open={isOpenModal}
        onCancel={() => {
          setIsOpenModal(false);
          form.resetFields();
        }}
        okText="Save"
        title="Add Task"
        onOk={() => form.submit()}
      >
        <TodoAddEditContent onSubmit={onSubmit} form={form} />
      </Modal>
    </>
  );
};

export default Header;
