import Button from "./Button";
import Carousel from "./Carousel";

const Services = () => {
  return (
    <div id="ourservices" className="h-screen bg-color-4">
      <div className="p-15 h-[20%] w-full flex justify-between items-center">
        <div className="flex justify-start overflow-hidden text-base lg:text-2xl text-ellipsis py-5 w-full lg:w-2/3">
          <p className="text-xl font-normal uppercase">
            Un studio privé offrant divers services de tatouage, piercing et
            beauté, ou nous pouvons vous aider à exprimer vos besoins à travers
            le design.
          </p>
        </div>
        <Button className="h-fit">Découvrir</Button>
      </div>
      <div className="h-[75%] w-full pb-15 pl-15">
        <Carousel />
      </div>
    </div>
  );
};

export default Services;
