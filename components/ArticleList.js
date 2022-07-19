import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';
function ArticleList({ articles }) {
    return (
        <div className={articleStyles.grid}>

            {articles.map((article,i) =>
                <ArticleItem article={article} key={i}/>
            )}
        </div>
    )
}

export default ArticleList;