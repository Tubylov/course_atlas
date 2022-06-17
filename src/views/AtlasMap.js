import './AtlasMap.css';

function AtlasMap() {
  return (
    <div className="AtlasMap">
        <svg width="1200" height="1500">
            <path
            d="M 150,200 C 400,250, 0,1000, 150,1400" 
            stroke='blue' strokeWidth='4' fill='none' />
        </svg>
    </div>
  );
}

export default AtlasMap;