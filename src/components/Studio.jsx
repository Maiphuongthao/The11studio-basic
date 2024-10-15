import { studioVideo } from "../assets";

const Studio = () => {
  return (
    <div className="h-screen">
      <video className=" h-full w-full object-cover" autoPlay loop muted>
        <source src={studioVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Studio;
