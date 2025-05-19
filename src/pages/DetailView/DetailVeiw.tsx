import { useNavigate, useParams } from "react-router";

import { useSelector } from "react-redux";
import type { RootState } from "@store/index";

import { Row, Col, Flex, Button } from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";

import PageLayout from "@components/PageLayout";
import { Header } from "./components";
import Typography from "@components/Typography";

import {
  StyledDetail,
  StyledTag,
  StyledTitle,
  StyledDivider,
  StyledCard,
  StyledDescription,
} from "./DetailView.styles";
import { spacings } from "@styles/constants";

import { categoryColors, statusColors, priorityColors } from "@assets/colors";
import type { CategoryType, PriorityType } from "@assets/filters";

const DetailView = () => {
  const navigate = useNavigate();
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
        <Flex vertical gap={spacings.m}>
          <Button
            type="link"
            style={{ width: "max-content" }}
            onClick={() => navigate(-1)}
          >
            <ArrowLeftOutlined />
            Back
          </Button>
          <StyledCard>
            <Flex vertical gap={spacings.xl}>
              <StyledTitle>
                <Typography variant="h2" fontSize="md" fontWeight="500">
                  {todo.title}
                </Typography>
              </StyledTitle>
              <Row gutter={[0, spacings.l]} align="stretch" style={{ flex: 1 }}>
                <Col xs={24} md={6} lg={5}>
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

                <Col xs={24} md={15}>
                  <StyledDescription>
                    <Flex gap={spacings.s} vertical>
                      <Typography fontWeight="500" fontSize="lg">
                        Description:
                      </Typography>
                      <Typography>
                        {todo.description || "No description provided."}
                      </Typography>
                    </Flex>
                  </StyledDescription>
                </Col>
              </Row>
            </Flex>
          </StyledCard>
        </Flex>
      }
    />
  );
};

export default DetailView;
