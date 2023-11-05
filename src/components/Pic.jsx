import { PicsData } from "@constants";

const Pic = () => {
  return (
    <div className="flex justify-center">
      {PicsData.map((data) => {
        return (
          <img
            key={data.alt}
            className="h-[100px] rounded-full md:h-[125px]"
            src={data.src}
            alt={data.alt}
          />
        );
      })}
    </div>
  );
};

export default Pic;
