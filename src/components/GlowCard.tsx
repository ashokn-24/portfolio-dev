import { useRef } from "react";

type CardProps = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

type Code = {
  imgPath: string;
  title: string;
  desc: string;
  date: string;
};

type Props = {
  card: CardProps;
  children?: React.ReactNode;
  index: number;
  code: Code;
};

const GlowCard = ({ code, index, card, children }: Props) => {
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      angle = (angle + 360) % 360;

      card.style.setProperty("--start", angle + "60");
    };

  return (
    <div
      ref={(el) => {
        if (cardRef.current) {
          cardRef.current[index] = el;
        }
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      {/* {!code && (
        <div className="glow">
          <div className="flex items-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <img
                src="/images/star.png"
                alt="star"
                key={i}
                className="size-5"
              />
            ))}
          </div>
        </div>
      )} */}
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
