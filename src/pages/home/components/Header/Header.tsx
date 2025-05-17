import Typography from "@components/Typography";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Modal, Form, Button } from "antd";
import TodoAddEditContent from "@components/TodoAddEditContent";
import type { Todo } from "@shared-types/todo";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = (data: Todo) => {
    console.log("Submitted todo:", data);
    setIsOpenModal(false);
    form.resetFields();
  };

  return (
    <>
      <Typography color="heading" variant="h1" fontSize="xl" fontWeight="500">
        Todo Board
      </Typography>

      <Button onClick={() => setIsOpenModal(true)} type="primary">
        Add Todo
        <PlusOutlined />
      </Button>

      <Modal
        open={isOpenModal}
        onCancel={() => {
          setIsOpenModal(false);
          form.resetFields();
        }}
        okText="Save"
        title="Add Todo"
        onOk={() => form.submit()}
      >
        <TodoAddEditContent onSubmit={onSubmit} form={form} />
      </Modal>
    </>
  );
};

export default Header;
