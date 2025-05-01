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
              <img
                src="/images/job.png"
                alt="Job Portal"
                className="object-contain"
              />
            </div>
            <div className="text-content">
              <h2>Job Portal</h2>
              <p className="text-white-50 md:text-xl">
                A full-stack job search platform with secure JWT authentication
                and role-based access, supporting 100+ job postings and 50+ user
                applications. Built with Node.js, Express.js, and MongoDB for
                the backend, and React.js, Ant Design, and Tailwind CSS for the
                frontend. Features include secure job application processing and
                advanced filtering tools for job listings.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/ssp.png" alt="Scholarship Portal" />
              </div>
              <h2>Scholarship Portal</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/weather.png" alt="weather app" />
              </div>
              <h2>Weather App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
