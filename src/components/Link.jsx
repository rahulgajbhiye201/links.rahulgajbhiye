import { LinksData } from "@constants";

const Link = () => {
  return (
    <div className="flex flex-col gap-4 justify-center text-center">
      {LinksData.map((data) => {
        return (
          <div
            key={data.name}
            className="animate-border inline-block rounded-md bg-neutral-800 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-0.5"
          >
            <div className="rounded-md bg-neutral-800 px-14 py-2 lg:px-20">
              <a href={data.href} target="_blank" rel="noreferrer">
                {data.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Link;
