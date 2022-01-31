import "./write.css"
import WriteImage1 from "../../images/writeimage1.jpg"

export default function Write() {
    return (
        <div className="write">

            <img 
            src={WriteImage1} 
            alt="" 
            className="writeImg" />

            <form aclassName="writeForm">
                <div className="writeFormAll">
                    <div className="writeFormInput">
                        <div className="writeFormGroup">
                            <label htmlFor="fileInput">
                                <i className="writeIcon fas fa-plus"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}} />
                            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                        </div>

                        <div className="writeFormGroup">
                            <textarea 
                            placeholder="Tell your story..." 
                            type="text"
                            className="writeInput writeText"
                            ></textarea>
                        </div>
                    </div>

                    <div className="writeFormSubmit">
                        <button className="writeSubmit">Publish</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
