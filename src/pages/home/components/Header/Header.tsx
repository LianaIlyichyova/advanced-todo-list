import Typography from "@components/Typography";
import { PlusCircleOutlined } from "@ant-design/icons";
import IconWrapper from "@components/IconWrapper";

const Header = () => {
  return (
    <>
      <Typography color="heading" variant="h1" fontSize="xl" fontWeight="500">
        Kanban Board
      </Typography>
      <IconWrapper>
        <PlusCircleOutlined />
      </IconWrapper>
    </>
  );
};

export default Header;
