import { codingAchievements } from "../assets/constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const CodingAchievementsSection = () => {
  return (
    <section id="coding-achievements" className="my-26">
      <TitleHeader
        title="Problem Solving Achievements"
        sub="📈 Progress I’ve Made Through Code and Consistency"
      />

      <div className="grid grid-2-cols justify-center my-10  gap-15 px-30">
        {codingAchievements.map((card, idx) => (
          <div className="h-48" key={card.title}>
            <GlowCard
              code={card}
              index={idx}
              card={{
                review: "",
                imgPath: "",
                logoPath: "",
                title: "",
                date: "",
                responsibilities: [],
              }}
            >
              <div className="flex flex-col gap-5">
                <div>
                  <img src={card.imgPath} alt={card.title} width={50} />
                </div>

                <div>
                  <h3 className="text-white text-2xl font-semibold mt-2">
                    {card.title}
                  </h3>
                  <p className="text-white-50 text-lg">{card.desc}</p>
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingAchievementsSection;
