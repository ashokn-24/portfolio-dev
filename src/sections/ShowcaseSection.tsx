import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
type Props = {};

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = (_props: Props) => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projects.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (i + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom -= 100",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="ryde" />
            </div>
            <div className="text-content">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p className="text-white-50 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus praesentium saepe eos quas aspernatur enim laudantium
                quidem omnis nemo fugit officia iusto vero, hic porro fugiat
                veniam voluptas, voluptatibus corrupti!
              </p>
            </div>
          </div>

          {/* right */}

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="" />
              </div>
              <h2>Library managment</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project2.png" alt="" />
              </div>
              <h2>JobPortal</h2>
            </div>
          </div>
          {/* 
          <div className="project-list-wrapper overflow-hidden">
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
