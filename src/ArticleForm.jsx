import styles from './ArticleManager.module.css';

function ArticleForm({ currentArticle, handleChange, handleSubmit, isEditing }) {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={currentArticle.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Article:</label>
                <textarea
                    name="content"
                    value={currentArticle.content}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">{isEditing ? 'Update' : 'Create'} Article</button>
        </form>
    );
}

export default ArticleForm;
