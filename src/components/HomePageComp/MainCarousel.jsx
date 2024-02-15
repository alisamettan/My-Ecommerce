import { Carousel, Typography } from "@material-tailwind/react";
import woman from "../../assets/HomePagepics/kadin.jpg";
import { Button } from "reactstrap";

export default function MainCarousel() {
  return (
    <Carousel
      className="h-[calc(100vh_-_144px)]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full w-full">
        <img src={woman} className="h-full w-full" />

        <div className="absolute inset-0 top-[30%] left-[20%] flex text-start">
          <div className=" flex flex-col gap-10 ml-8 xl:text-start md:w-3/4">
            <Typography
              variant="lead"
              color="white"
              className=" text-lightText text-xl  font-bold "
            >
              SUMMER 2024
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="text-6xl text-start text-lightText "
            >
              NEW COLLECTION
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" text-lightText text-xl text-start  "
            >
              We know how large objects will act,
              <br /> but things on a small scale.
            </Typography>
            <div className="text-start ">
              <Button
                size="lg"
                className="bg-successColor text-lightText  rounded-lg hover:cursor-pointer px-12 py-3 text-lg "
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={woman} className="h-full w-full" />

        <div className="absolute inset-0 top-[30%] left-[20%] flex  text-start">
          <div className=" flex flex-col gap-10 ml-8 xl:text-start md:w-3/4">
            <Typography
              variant="lead"
              color="white"
              className=" text-lightText text-3xl  font-bold "
            >
              Black Friday
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" text-lightText text-xl text-start  "
            >
              We know how large objects will act,
              <br /> but things on a small scale.
            </Typography>
            <div className="text-start ">
              <Button
                size="lg"
                className="bg-primaryColor text-lightText  rounded-lg hover:cursor-pointer px-12 py-3 text-lg "
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
{
  /* <div className="relative h-full w-full">
        <img src={woman} alt="image 1" className="h-full w-full" />
        <div className="absolute  inset-0 grid h-full w-full place-items-center ">
          <div className="w-full mt-[74px]  flex flex-col gap-8  text-center md:w-3/4">
            <Typography
              variant="h1"
              color="white"
              className=" xl:text-3xl text-[38px] leading-tight text-center text-lightText uppercase  xl:tracking-wider"
            >
              Black Friday
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="tracking-wider text-lightText text-xl"
            >
              We know how large objects will act,
              <br className="xl:hidden block" /> but things on a{" "}
              <br className="xl:block hidden" />
              small scale <br className="xl:hidden block" />
              just do not act that way .
            </Typography>
            <div className="">
              <Button
                size="lg"
                className="bg-primaryColor text-lightText tracking-widest rounded-lg hover:cursor-pointer capitalize xl:px-12 text-lg "
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </div> */
}
