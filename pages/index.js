import { END } from "redux-saga";
import { wrapper } from "../store";
import { loadData } from "../actions";
import Page from "../components/page";
import BarChart from "/components/bar";
const Index = () => {
  return (
    <>
      <Page
        title="Top 20 repositories on Github"
        linkTo="/other"
        NavigateTo="Web Page 2"
      />
      <BarChart />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState()?.placeholderData) {
    const query = "q=stars:>1&page=1&per_page=20";
    store.dispatch(loadData(query));
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

export default Index;
