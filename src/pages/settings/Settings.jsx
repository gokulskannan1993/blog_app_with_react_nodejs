import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update</span>
          <span className="settingsDeleteTitle">Delete</span>
        </div>
        <form action="#" className="settingsForm">
          <label htmlFor="profilePic">Profile Picture</label>
          <div className="settingsProPic">
            <img
              src="https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProPicIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Gokul" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="gokul@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
}
