import "./styles.css";

import { useState } from "react";

export default function App() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://api.gragedev.in/wcdn/cdn/upload";

    try {
      const formData = new FormData();
      formData.append("files", file);
      formData.append("file_types", "img");
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <form method="POST" encType="multipart/form-data">
        <h4>Browse your file</h4>
        <input type="file" name="uploadfile" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
