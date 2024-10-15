import Button from "./Button";
import Carousel from "./Carousel";

const Services = () => {
  return (
    <div id="ourservices" className="h-screen bg-color-4">
      <div className=" md:h-[35%] w-full flex justify-between  py-7 md:py-0 px-5 md:px-15 items-center">
        <div className="flex justify-start overflow-hidden md:w-[60%]">
          <p className="text-md md:text-3xl text-ellipsis font-normal uppercase md:py-5 text-color-1 ">
            &#34;Un studio privé offrant divers services de tatouage, piercing
            et beauté, ou nous pouvons vous aider à exprimer vos besoins à
            travers le design.&#34;
          </p>
        </div>
        <Button>Découvrir</Button>
      </div>
      <div className="h-[65%] w-full pb-8">
        <Carousel />
      </div>
    </div>
  );
};

export default Services;
