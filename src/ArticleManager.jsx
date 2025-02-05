import { useState } from 'react';
import ArticleForm from './ArticleForm';
import ArticleList from './ArticleList';
import styles from './ArticleManager.module.css';

function ArticleManager() {
    const [articles, setArticles] = useState([]);
    const [currentArticle, setCurrentArticle] = useState({ title: '', content: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentArticle({ ...currentArticle, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing) {
            const updatedArticles = articles.map((article, index) =>
                index === editIndex ? currentArticle : article
            );
            setArticles(updatedArticles);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setArticles([...articles, currentArticle]);
        }
        setCurrentArticle({ title: '', content: '' });
    }

    function handleDelete(index) {
        // The underscore (_) is used as a placeholder for 
        // the first parameter of the callback function. 
        // This is a common convention to indicate that the parameter is intentionally unused.
        const updatedArticles = articles.filter((_, i) => i !== index);
        setArticles(updatedArticles);
    }

    function handleEdit(index) {
        setCurrentArticle(articles[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    return (
        <div className={styles.container}>
            <h1>Article Manager</h1>
            <ArticleForm
                currentArticle={currentArticle}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isEditing={isEditing}
            />
            <h2>Articles</h2>
            <ArticleList
                articles={articles}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default ArticleManager;
