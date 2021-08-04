import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImage"
        src="https://t3.ftcdn.net/jpg/02/68/81/22/360_F_268812279_cVMsQJ8UWfV8k8HO2oqjhRY1XhopgE68.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your Story..."
            cols="30"
            rows="10"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeButton">Publish</button>
      </form>
    </div>
  );
}
