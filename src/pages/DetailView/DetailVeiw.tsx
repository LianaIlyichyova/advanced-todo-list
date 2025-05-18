import { useParams } from "react-router";

import { useSelector } from "react-redux";
import type { RootState } from "@store/index";

import { Row, Col, Card, Flex } from "antd";

import PageLayout from "@components/PageLayout";
import { Header } from "./components";
import Typography from "@components/Typography";

import {
  StyledDetail,
  StyledTag,
  StyledTitle,
  StyledDivider,
} from "./DetailView.styles";
import { spacings } from "@styles/constants";

import { categoryColors, statusColors, priorityColors } from "@assets/colors";
import type { CategoryType, PriorityType } from "@assets/filters";

const DetailView = () => {
  const { id } = useParams<{ id: string }>();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <PageLayout
      header={<Header />}
      content={
        <Card>
          <Flex vertical gap={spacings.xl}>
            <StyledTitle>
              <Typography variant="h2" fontSize="md" fontWeight="500">
                {todo.title}
              </Typography>
            </StyledTitle>
            <Row gutter={[0, spacings.l]} align="stretch">
              <Col xs={24} md={5}>
                <Flex gap={spacings.s} vertical>
                  <StyledDetail>
                    <Typography>Status:</Typography>
                    <StyledTag $color={statusColors[todo.status]}>
                      {todo.status.toUpperCase()}
                    </StyledTag>
                  </StyledDetail>

                  <StyledDetail>
                    <Typography>Category:</Typography>
                    <StyledTag
                      $color={categoryColors[todo.category as CategoryType]}
                    >
                      {todo.category.toUpperCase()}
                    </StyledTag>
                  </StyledDetail>

                  <StyledDetail>
                    <Typography>Priority:</Typography>
                    <StyledTag
                      $color={priorityColors[todo.priority as PriorityType]}
                    >
                      {todo.priority.toUpperCase()}
                    </StyledTag>
                  </StyledDetail>
                </Flex>
              </Col>

              <Col xs={24} md={2}>
                <StyledDivider />
              </Col>

              <Col xs={24} md={11}>
                <Flex gap={spacings.s} vertical>
                  <Typography fontWeight="500" fontSize="lg">
                    Description:
                  </Typography>
                  <Typography>
                    {todo.description || "No description provided."}
                  </Typography>
                </Flex>
              </Col>
            </Row>
          </Flex>
        </Card>
      }
    />
  );
};

export default DetailView;
