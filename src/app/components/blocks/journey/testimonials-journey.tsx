import InViewClass from "../../in-view-class";

export default function TestimonialsJourney() {
  return (
    <InViewClass classNameWhenInView="path" threshold={0.5}>
      <svg
        className="w-auto absolute right-0 lg:left-auto top-0 h-auto"
        width="220"
        height="380"
        viewBox="0 0 220 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <mask id="testimonials">
          <path
            d="M260 8C235 5 210 4 185 6C145 9 105 15 68 28C48 35 30 47 18 66C6 86 2 110 8 133C14 156 28 175 46 191C70 212 100 224 128 238C152 250 175 265 188 292C200 318 196 348 178 368"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            className="animated"
          />
        </mask>
        <path
          mask="url(#testimonials)"
          d="M260 8C235 5 210 4 185 6C145 9 105 15 68 28C48 35 30 47 18 66C6 86 2 110 8 133C14 156 28 175 46 191C70 212 100 224 128 238C152 250 175 265 188 292C200 318 196 348 178 368"
          stroke="#C38558"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="16 16"
        />
        <circle cx="128" cy="238" r="10" fill="#C38558" />
      </svg>
    </InViewClass>
  );
}
