import StudioCarousel from "../components/StudioCarousel";
import { studioImages } from "../data/studioImages";

export default function Studio() {
  return (
    <div className="studio-container">
      <div className="studio-header">
        <h1>Studio</h1>
      </div>

      <div className="studio-content">
        <StudioCarousel images={studioImages} />
      </div>

      <div className="gear-content">
        <h3>Gear</h3>
      </div>
    </div>
  );
}
