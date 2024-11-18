import './CatalogBrowser.css';
import DemoCarousel from './DemoCarousel';


const CatalogBrowser = () => {
  return (
    <div id="cb-container">
      <h2 id="cb-header">Browse Our Catalog</h2>
      <div id="cb-content">
        <div id="cb-topics">
          <h3 id="cb-topics-header">Topics</h3>
          <ul id="cb-topics-list">
            <li>Mechanics</li>
            <li>Fluid Mechanics</li>
            <li>Oscilllations & Waves</li>
            <li>Thermodynamics</li>
            <li>Electricity & Magnetism</li>
            <li>Optics</li>
            <li>Modern Physics</li>
            <li>Astronomy</li>
          </ul>
        </div>
        <DemoCarousel />
      </div>
    </div>
  );
};

export default CatalogBrowser;