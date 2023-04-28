import "./styles.css";

import { useState } from "react";

export default function App() {
  const [file, setFile] = useState(null);

  const token = "c79a3b12-d111-41e5-acd4-756ee0d8b3bd:AT8ovDGPScstaDoySAm7AMaZSpc";

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://api.gragedev.in/cdn/wcdn/upload";

    try {
      const formData = new FormData();
      formData.append("files", file);
      formData.append("file_types", "img");

      const header = {
        Authorization: token,
      }
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: header
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
