import PageLayout from "@components/PageLayout";
import { useParams } from "react-router";
import { Header } from "./components";

const DetailView = () => {
  const params = useParams();

  console.log(params);
  return (
    <PageLayout
      header={<Header />}
      content={
        <>
          {/* <Filters />
          <Board /> */}
        </>
      }
    />
  );
};

export default DetailView;
