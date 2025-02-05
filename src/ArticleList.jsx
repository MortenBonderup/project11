import styles from './ArticleManager.module.css';

function ArticleList({ articles, handleEdit, handleDelete }) {
    return (
        <ul className={styles.articleList}>
            {articles.map((article, index) => (
                <li key={index} className={styles.articleItem}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ArticleList;
