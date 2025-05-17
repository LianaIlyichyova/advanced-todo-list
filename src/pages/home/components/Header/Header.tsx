import Typography from "@components/Typography";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Modal, Form, Button } from "antd";
import TodoAddEditContent from "@components/TodoAddEditContent";
import type { Todo } from "@shared-types/todo";
import { useDispatch } from "react-redux";
import { addTodo } from "@store/todosSlice";
import type { AppDispatch } from "@store/index";

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
