import "../Blog/Blog.css";
function BlogItem(props) {
  const { id, title, body } = props;
  let date = new Date();
  return (
    <div className="blog__item" key={id}>
      <div className="blog__item-descr">
        <h2 className="blog__item-title">{title}</h2>
        <span className="blog__item-date">{date.toLocaleDateString()}</span>
        <div>
          <p>{body}</p>
        </div>
      </div>
      <img src="../img/blog.png" alt="blog" />
    </div>
  );
}

export default BlogItem;
