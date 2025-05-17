import { Filters, Header } from "./components";
import PageLayout from "@components/PageLayout";
import Board from "./components/Board";

const HomePage = () => {
  return (
    <PageLayout
      header={<Header />}
      content={
        <>
          <Filters />
          <Board />
        </>
      }
    />
  );
};

export default HomePage;
