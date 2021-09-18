import articleStyle from "../styles/Article.module.scss"
import ArticleItem from "./ArticleItem";

const ArticleList = ({articles}) => {
    return (
        <div>
            {articles.map(article => (
                <div key={article.id} className={articleStyle.grid}>
                    <ArticleItem article={article}/>
                </div>
            ))}
        </div>
    )
}

export default ArticleList;