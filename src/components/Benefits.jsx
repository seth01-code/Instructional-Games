import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { TbLivePhoto } from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from "./Button";
const Benefits = () => {
  return (
    <Section id="games">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Learn More Interactively, Not in a Boring Approach"
        />
        <div className="flex flex-col items-center justify-center flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <Link to={item.url} target="_blank" rel="noopener noreferrer">
            <div
              data-aos="fade-up"  data-aos-duration="2000"
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <span
                  className="flex"
                    width={48}
                    height={48}>
                      <TbLivePhoto className="text-[3rem] bg-color-1 p-2 rounded" />
                      <p className="p-3">
                      Live
                      </p>
                  </span>
                   <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
            </Link>
          ))}
          
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
