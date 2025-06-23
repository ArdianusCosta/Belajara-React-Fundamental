const ArticleStatus = ({ isNew }) => {
    return isNew && <span>-- Baru --</span>
}

const NewArticle = () => {
    return <span>-- Baru --</span>
}

function Article(props){
    return (
        <>
            <h3>{[props.title]}</h3>
            <small>Date: {props.date}, {props.tags.join(", ")} {" "} 
                <ArticleStatus isNew={props.isNew} />
                {props.isNew && <NewArticle />}
            </small> 
        </>
    )
}

export default Article;