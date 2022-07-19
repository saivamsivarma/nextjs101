import articleStyles from '../styles/Article.module.css'
import Link from 'next/link';
function ArticleItem({article}) {
    console.log(article)
    return(
        <Link href={article.url}>
            <a className={articleStyles.card}>
                <img src={article.urlToImage} height="200px" className={articleStyles.logo}/>
                <h3> {article.title}</h3>
            </a>
        </Link>
    )
}

export default ArticleItem;