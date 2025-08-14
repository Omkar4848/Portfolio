import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left side */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Idol" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Ganesh Idol Booking made simple with User-frriendly
                application calles Ganesh Idol Booking
              </h2>
              <p className="text-white-50 md:text-xl">
                An app/website built with ReactJS, NodeJS, ExpressJS, MongoDB &
                Tailwind CSS for fast, user-friendly experirnce
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#1f1d1c]">
                <img src="/images/project2.png" alt="Image Enhancer" />
              </div>
              <h2>AI - Image Enhancer</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#1f1d1c]">
                <img src="/images/project3.png" alt="Employee Management" />
              </div>
              <h2>Employee Management System</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
