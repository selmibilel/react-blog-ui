import './post.css'
import ImagePost1 from '../../images/post1.jpg'


export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src={ImagePost1}
            alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>

                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr/>
                <span className="postDate">1hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolore ad excepturi sint laboriosam veniam aliquid deleniti dolor! 
                Soluta est fugit nisi eius accusantium itaque debitis quibusdam natus optio? Saepe, est!
                Soluta est fugit nisi eius accusantium itaque debitis quibusdam natus optio? Saepe, est!
                Soluta est fugit nisi eius accusantium itaque debitis quibusdam natus optio? Saepe, est!
            </p>
        </div>
    )
}
