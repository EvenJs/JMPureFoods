interface WaveDividerProps {
  fill: string;
  height?: number;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  fill,
  height = 60,
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      style={{
        lineHeight: 0,
        overflow: "hidden",
        transform: flip ? "scaleY(-1)" : "none",
      }}
      className={className}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: `${height}px` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,15 1440,25 L1440,60 L0,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
