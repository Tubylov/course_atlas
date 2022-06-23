import './AtlasMap.css';

function AtlasMap() {
  return (
    <div className="AtlasMap">
        <svg width="1200" height="1500">
            <path
            d="M 150,300 C 400,350, 0,1100, 150,1500" 
            stroke='red' strokeWidth='4' fill='none' />
            <path
            d="M 150,300 C 400,350, 600,500, 600,700" 
            stroke='red' strokeWidth='4' fill='none' />
            <path
            d="M 400,800 C 600,900, 400,1400, 700,1500" 
            stroke='green' strokeWidth='4' fill='none' />
            <path
            d="M 400,600 C 600,400, 550,350, 700,250" 
            stroke='green' strokeWidth='4' fill='none' />
            <path
            d="M 900,600 C 900,800, 600,900, 600,1200" 
            stroke='blue' strokeWidth='4' fill='none' />
            <path
            d="M 1100,1000 C 900,1500, 400,1400, 300,1350" 
            stroke='orange' strokeWidth='4' fill='none' />
            <path
            d="M 1200,400 C 900,1000, 400,900, 250,1200" 
            stroke='orange' strokeWidth='4' fill='none' />
        </svg>
    </div>
  );
}

export default AtlasMap;