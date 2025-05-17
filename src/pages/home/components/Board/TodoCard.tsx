import {
  CardWrapper,
  CardTitle,
  CardFooter,
  Stats,
  PriorityTag,
  CategoryTag,
} from "./Board.styles";
import type { Todo } from "@shared-types/todo";
import { categoryColors, priorityColors } from "@assets/colors";
import { capitalize } from "lodash";
import IconWrapper from "@components/IconWrapper";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Flex, Modal, Form } from "antd";
import { useState } from "react";

import { App } from "antd";

import TodoAddEditContent from "@components/TodoAddEditContent";
import { spacings } from "@styles/constants";

const TodoCard = ({ todo }: { todo: Todo }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { modal } = App.useApp();

  const priorityColor =
    priorityColors[todo.priority as keyof typeof priorityColors];

  const categoryColor =
    categoryColors[todo.category as keyof typeof categoryColors];

  const [form] = Form.useForm();

  const onSubmit = (data: Todo) => {
    console.log("Submitted todo:", data);
    setIsOpenModal(false);
    form.resetFields();
  };

  const handleDelete = () => {
    modal.confirm({
      title: "Are you sure you want to delete this task?",
      content: "This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        console.log(todo.id);
      },
    });
  };

  return (
    <CardWrapper>
      <Flex justify="space-between">
        <PriorityTag $color={priorityColor}>
          {todo.priority?.toUpperCase()}
        </PriorityTag>
        <Flex gap={spacings.s}>
          <IconWrapper size={20} onClick={() => setIsOpenModal(true)}>
            <EditOutlined />
          </IconWrapper>
          <IconWrapper size={20} onClick={() => handleDelete()}>
            <DeleteOutlined />
          </IconWrapper>
        </Flex>
      </Flex>
      <CardTitle fontWeight="500">{todo.title}</CardTitle>

      <CardFooter>
        <Stats>
          <CategoryTag $color={categoryColor}>
            {capitalize(todo.category)}
          </CategoryTag>
        </Stats>
      </CardFooter>
      <Modal
        open={isOpenModal}
        onCancel={() => {
          setIsOpenModal(false);
          form.resetFields();
        }}
        okText="Save"
        title="Edit Todo"
        onOk={() => form.submit()}
      >
        <TodoAddEditContent
          onSubmit={onSubmit}
          form={form}
          initialValues={todo}
        />
      </Modal>
    </CardWrapper>
  );
};

export default TodoCard;
