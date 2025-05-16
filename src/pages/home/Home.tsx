import { Filters, Header, PageLayout } from "./components";

const HomePage = () => {
  return (
    <PageLayout
      header={<Header />}
      content={
        <>
          <Filters />
          <div>Content</div>
        </>
      }
    />
  );
};

export default HomePage;
