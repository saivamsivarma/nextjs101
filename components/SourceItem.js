import articleStyles from '../styles/Article.module.css'
import Link from 'next/link';
function SourceItem({source}) {
    return(
        <Link href="/source/[id]" as={`/source/${source.id}`}>
            <a className={articleStyles.card}>
                <h1> {source.name}</h1>
                <span className={articleStyles.span}>{source.category}</span>
            </a>
        </Link>
    )
}

export default SourceItem;