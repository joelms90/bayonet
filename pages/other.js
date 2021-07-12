import { END } from "redux-saga";
import { wrapper } from "../store";
import { loadData2 } from "../actions";
import Page from "../components/page";
import LineChart from "/components/line";

const Other = () => {
  return (
    <>
      <Page
        title="Last 10 weeks of commit activity on the React Github"
        linkTo="/"
        NavigateTo="Web Page 1"
      />
      <LineChart />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState()?.placeholderData2) {
    const query2 = "q=page=1&per_page=10";
    store.dispatch(loadData2(query2));
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

export default Other;
