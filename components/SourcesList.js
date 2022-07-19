import articleStyles from '../styles/Article.module.css'
import SourceItem from './SourceItem';
function SourcesList({ sources }) {
    return (
        <div className={articleStyles.grid}>

            {sources.map((source,i) =>
                <SourceItem source={source} key={i}/>
            )}
        </div>
    )
}

export default SourcesList;