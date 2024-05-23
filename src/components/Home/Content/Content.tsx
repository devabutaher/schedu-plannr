import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Content = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="/src/assets/images/content-1.png"
        subheading="Create Events"
        heading="Meeting Schedule Creation"
      >
        <TextContent
          title="Simple and Intuitive Schedule Event Setup"
          content={
            "With our user-friendly interface, creating events is a breeze. Easily enter all necessary details such as title, description, date, time, and location. The straightforward process allows you to set up an event within minutes, ensuring all important events are organized efficiently. Add notes and attach files to your events, keeping all relevant information in one place."
          }
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/src/assets/images/content-2.png"
        subheading="View Options"
        heading="Calendar Schedule Views"
      >
        <TextContent
          title="Flexible Calendar Schedule Viewing Options"
          content="Our platform offers multiple calendar views to suit your needs. Switch between day, week, month, and agenda views to get the best perspective on your schedule. Customize each view with color-coding and filters to highlight different types of events, making it easier to navigate and manage your commitments effectively."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/src/assets/images/content-3.png"
        subheading="Edit and Delete"
        heading="Manage Schedule Events"
      >
        <TextContent
          title="Update and Remove Events Seamlessly"
          content="Edit and delete events effortlessly, ensuring your schedule is always accurate. Quickly modify event details like date, time, and location. Delete single occurrences or entire series of recurring events. This feature gives you complete control over your schedule, making it easy to maintain and adjust as needed."
        />
      </TextParallaxContent>
    </div>
  );
};

export default Content;

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white"
    >
      <p className="mb-2 text-xl text-center md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-4xl font-bold text-center md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const TextContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">{content}</p>
      <button className="w-full py-4 text-xl text-white transition-colors rounded bg-neutral-900 px-9 hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
