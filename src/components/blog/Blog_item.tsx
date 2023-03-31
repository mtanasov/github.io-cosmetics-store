import "./style_blog.css";

interface blogInterface {
  id?: string;
  title?: string;
  description?: string;
  img: string;
  class?: string;
  pl?: string;
}

export default (props: blogInterface) => {
  return (
    <div className={`blog_content ${props.class}`}>
      <div className="block_1" style={{ paddingLeft: props.pl }}>
        <h2> {props.title} </h2>
        <div className="blog_description">{props.description}</div>
        <button className="btn_more"> Подробнее </button>
      </div>
      <img src={props.img} alt="photo" />
    </div>
  );
};
