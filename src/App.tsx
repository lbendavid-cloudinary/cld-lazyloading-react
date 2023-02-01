import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";

const brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });
brownSheep.resize(thumbnail().width(150).height(150));

export default function App() {
  return (
    <div className="App">
      <h1>Cloudinary Lazyload Test</h1>
      <div>
        <h3>Scroll down to see images lazyload</h3>
        <p style={{ height: "700px" }}>
          You can open your network tab to see the images loading
        </p>
        <div style={{ height: "600px" }} />
        <AdvancedImage
          style={{ width: "150px", height: "150px" }}
          cldImg={brownSheep}
          plugins={[
            lazyload({ rootMargin: "50px 50px 50px 50px", threshold: 0.25 })
          ]}
        />
      </div>
    </div>
  );
}
