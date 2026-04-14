import InViewClass from "../../in-view-class";

export default function FaqJourney() {
  return (
    <InViewClass classNameWhenInView="path" threshold={0.5}>
      <svg
        className="w-auto absolute -left-0 lg:right-auto top-0 h-auto"
        width="200"
        height="340"
        viewBox="0 0 200 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <mask id="faq">
          <path
            d="M240 6C215 4 190 5 165 10C130 17 96 30 68 52C44 72 26 100 20 130C14 160 20 192 36 218C52 244 77 262 104 276C128 289 155 298 170 322"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            className="animated"
          />
        </mask>
        <path
          mask="url(#faq)"
          d="M240 6C215 4 190 5 165 10C130 17 96 30 68 52C44 72 26 100 20 130C14 160 20 192 36 218C52 244 77 262 104 276C128 289 155 298 170 322"
          stroke="#C38558"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="16 16"
        />
        <circle cx="104" cy="276" r="10" fill="#C38558" />
      </svg>
    </InViewClass>
  );
}
