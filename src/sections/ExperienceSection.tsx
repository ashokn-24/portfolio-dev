import { expCards } from "../assets/constants";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { useGSAP } from "@gsap/react";
import gsap, { Power1, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const ExperienceSection = (_props: Props) => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      const el = card as HTMLElement;
      if (!el) return;

      gsap.from(el, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "40% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      const el = text as HTMLElement;
      if (!el) return;

      gsap.from(el, {
        xPercent: 0,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Expreiences" sub="My career Overview" />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, idx) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard code={false} card={card} index={idx}>
                    <div>
                      <img src={card.imgPath} alt={card.title} width={150} />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className="rounded-full bg-transparent"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5">🗓️ {card.date}</p>
                        <p className="text-[#829cb5] italic">Responsibilites</p>
                        <ul className="list-disc  ms-5  mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((res, i) => (
                            <li key={i} className="text-lg">
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
