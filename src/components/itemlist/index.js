import "./styles.css";

const ItemList = ({ repoData }) => {

  const generateArticles = () => {
    return repoData.map(repo => {
      return (
        <>
          <strong><a href={repo.clone_url} target="_blank" rel="noreferrer">{repo.name}</a></strong>
          <p>{repo.description}</p>
          <hr />
        </>
      )
    })   
  }

  return (
    <article>
      {
        generateArticles()
      }

    </article>
  )
}

export default ItemList;
