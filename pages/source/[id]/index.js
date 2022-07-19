import ArticleList from '../../../components/ArticleList';


function source({data}) {

    const articles = data.articles
    
    return (<ArticleList articles={articles}/>)
}

export const getServerSideProps = async(context)=>{
    const res =  await fetch(` https://newsapi.org/v2/top-headlines?sources=${context.params.id}&apiKey=91bdc06d0a8a4cc6969f11a20a0b660d`);
    const data = await res.json();
    return{
      props:{
        data
      }
    }
  }
  

export default source;
