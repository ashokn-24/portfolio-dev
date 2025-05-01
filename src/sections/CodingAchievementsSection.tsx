import { codingAchievements } from "../assets/constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const CodingAchievementsSection = () => {
  return (
    <section id="coding-achievements" className="md:my-26 my-40">
      <TitleHeader
        title="Problem Solving Achievements"
        sub="📈 Progress I’ve Made Through Code and Consistency"
      />

      <div className="grid md:grid-2-cols grid-rows-1 items-center justify-center md:my-10 w-full md:gap-20 gap-35 md:px-30 px-5">
        {codingAchievements.map((card, idx) => (
          <div className="h-48" key={card.title}>
            <GlowCard
              index={idx}
              card={{
                review: "",
                imgPath: "",
                logoPath: "",
                title: "",
                date: "",
                responsibilities: [],
              }}
              code={{
                imgPath: "",
                title: "",
                desc: "",
                date: "",
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
