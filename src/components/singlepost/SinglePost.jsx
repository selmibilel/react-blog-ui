import "./singlePost.css"
import ImageSinglePost1 from "../../images/singlepost1.jpg"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src={ImageSinglePost1} 
                alt="" 
                className="singlePostImg" />


                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>


                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author : <b>Selmi Bilel</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>

                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Provident reiciendis aliquid veniam laboriosam! Ducimus ratione, eveniet numquam, neque, 
                    culpa nulla minima sed corporis commodi iusto accusamus quis vero possimus fugit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Provident reiciendis aliquid veniam laboriosam! Ducimus ratione, eveniet numquam, neque, 
                    culpa nulla minima sed corporis commodi iusto accusamus quis vero possimus fugit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Provident reiciendis aliquid veniam laboriosam! Ducimus ratione, eveniet numquam, neque, 
                    culpa nulla minima sed corporis commodi iusto accusamus quis vero possimus fugit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Provident reiciendis aliquid veniam laboriosam! Ducimus ratione, eveniet numquam, neque, 
                    culpa nulla minima sed corporis commodi iusto accusamus quis vero possimus fugit?
                </p>
            </div>
        </div>
    )
}
