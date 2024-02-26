import { Carousel, Typography } from "@material-tailwind/react";
import woman from "../../../public/assets/HomePagepics/kadin.jpg";
import { Button } from "reactstrap";

export default function MainCarousel() {
  return (
    <Carousel
      className="h-[calc(100vh_-_144px)] w-full  m-auto"
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

        <div className="absolute inset-0 top-[30%] left-[20%] flex text-start sm:absolute sm:right-[20%]">
          <div className=" flex flex-col gap-10  sm:text-center sm:items-center">
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
              className="text-6xl sm:text-center text-lightText sm:text-4xl"
            >
              NEW COLLECTION
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" text-lightText text-xl  sm:text-center"
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
          <div className=" flex flex-col gap-10 ml-8 sm:">
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
