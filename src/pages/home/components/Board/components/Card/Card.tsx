import { useState } from "react";

import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "@store/todosSlice";
import type { AppDispatch } from "@store/index";

import { useNavigate } from "react-router";

import { Flex, Modal, Form, App } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

import { capitalize } from "lodash";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { RouterPaths } from "@assets/routes";
import { categoryColors, priorityColors } from "@assets/colors";
import { spacings } from "@styles/constants";

import type { Todo } from "@shared-types/todo";

import IconWrapper from "@components/IconWrapper";
import TodoAddEditContent from "@components/TodoAddEditContent";

import {
  StyledCardWrapper,
  StyledCardTitle,
  StyledCardFooter,
  StyledStats,
  StyledPriorityTag,
  StyledCategoryTag,
} from "./Card.styles";

interface Props {
  todo: Todo;
  isDragOverlay?: boolean;
  isOver?: boolean;
}

const Card: React.FC<Props> = ({ todo, isOver = false }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();
  const { modal, message } = App.useApp();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const priorityColor =
    priorityColors[todo.priority as keyof typeof priorityColors];
  const categoryColor =
    categoryColors[todo.category as keyof typeof categoryColors];

  const onSubmit = (data: Todo) => {
    dispatch(updateTodo(data));
    message.success("Todo updated successfully");
    setIsOpenModal(false);
    form.resetFields();
  };

  const handleDelete = () => {
    modal.confirm({
      title: "Are you sure you want to delete this todo?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        dispatch(deleteTodo(todo.id));
        message.success("Todo deleted");
      },
    });
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });

  return (
    <StyledCardWrapper
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : "auto",
        cursor: "grab",
        opacity: isDragging ? 0.5 : isOver ? 0.3 : 1,
      }}
      {...attributes}
      {...listeners}
      isDragging={isDragging}
    >
      <Flex justify="space-between">
        <StyledPriorityTag $color={priorityColor}>
          {todo.priority?.toUpperCase()}
        </StyledPriorityTag>

        <Flex gap={spacings.s}>
          <IconWrapper
            size={20}
            onClick={() => navigate(`${RouterPaths.DetailView}/${todo.id}`)}
            data-no-dnd
          >
            <EyeOutlined />
          </IconWrapper>
          <IconWrapper
            size={20}
            onClick={() => {
              form.setFieldsValue(todo);
              setIsOpenModal(true);
            }}
            data-no-dnd
          >
            <EditOutlined />
          </IconWrapper>

          <IconWrapper size={20} onClick={handleDelete} data-no-dnd>
            <DeleteOutlined />
          </IconWrapper>
        </Flex>
      </Flex>

      <StyledCardTitle>{todo.title}</StyledCardTitle>

      <StyledCardFooter>
        <StyledStats>
          <StyledCategoryTag $color={categoryColor}>
            {capitalize(todo.category)}
          </StyledCategoryTag>
        </StyledStats>
      </StyledCardFooter>

      <Modal
        title="Edit Task"
        open={isOpenModal}
        onCancel={() => {
          setIsOpenModal(false);
          form.resetFields();
        }}
        onOk={() => form.submit()}
        okText="Save"
      >
        <TodoAddEditContent
          initialValues={todo}
          form={form}
          onSubmit={onSubmit}
        />
      </Modal>
    </StyledCardWrapper>
  );
};

export default Card;
