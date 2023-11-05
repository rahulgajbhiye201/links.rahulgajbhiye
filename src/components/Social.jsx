import { SocialsData } from "@constants";

const Social = () => {
  return (
    <div className="flex flex-wrap items-center justify-center text-4xl">
      {SocialsData.map((data) => {
        return (
          <a
            key={data.href}
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 transition ease-in-out hover:scale-125"
          >
            {data.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
