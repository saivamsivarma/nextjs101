import Head from 'next/head'
// import ArticleList from '../components/ArticleList';
import SourcesList from '../components/SourcesList';
export default function Home({data}) {

  const sources = data.sources;
  // const articles = data.articles;
  return (
    <div>
      <Head>
        <title>Nextjs page</title>
        <meta name='keywords' content='Nextjs'/>
      </Head>
      <SourcesList sources={sources}/>
      {/* <ArticleList articles={articles}/> */}
    </div>
  )
}

export const getStaticProps = async()=>{
  const res =  await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=91bdc06d0a8a4cc6969f11a20a0b660d`);
  const data = await res.json();
  return{
    props:{
      data
    }
  }
}
