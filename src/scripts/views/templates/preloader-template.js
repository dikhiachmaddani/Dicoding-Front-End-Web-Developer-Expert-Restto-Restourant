const Preloader = () => `
    <div class="loading">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="84" cy="50" r="10" fill="#1c4595">
            <animate attributeName="r" repeatCount="indefinite" dur="0.42372881355932207s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
            <animate attributeName="fill" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#1c4595;#e7e5e8;#01080a;#e76a24;#1c4595" begin="0s"></animate>
        </circle><circle cx="16" cy="50" r="10" fill="#1c4595">
          <animate attributeName="r" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
          <animate attributeName="cx" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
        </circle><circle cx="50" cy="50" r="10" fill="#e76a24">
          <animate attributeName="r" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.42372881355932207s"></animate>
          <animate attributeName="cx" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.42372881355932207s"></animate>
        </circle><circle cx="84" cy="50" r="10" fill="#01080a">
          <animate attributeName="r" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8474576271186441s"></animate>
          <animate attributeName="cx" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8474576271186441s"></animate>
        </circle><circle cx="16" cy="50" r="10" fill="#e7e5e8">
          <animate attributeName="r" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2711864406779663s"></animate>
          <animate attributeName="cx" repeatCount="indefinite" dur="1.6949152542372883s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2711864406779663s"></animate>
        </circle>
      </svg>
    </div>
    ;`;
export default Preloader;