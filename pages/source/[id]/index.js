import ArticleList from '../../../components/ArticleList';
import { useRouter } from 'next/router';
import Head from 'next/head'

export default function source({ data }) {

  const articles = data.articles
const router  = useRouter();
const {id} = router.query;
  return (<>
  <Head>
    <title>Result realted to {id}</title>
  </Head>
    <ArticleList articles={articles} />
  </>)
}

export const getServerSideProps = async (context) => {
  const res = await fetch(` https://newsapi.org/v2/top-headlines?sources=${context.params.id}&apiKey=91bdc06d0a8a4cc6969f11a20a0b660d`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}
