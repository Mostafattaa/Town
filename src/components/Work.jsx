const Work = () => {
  return (
    <div className="bg-gradient-to-b from-[#e3987f] to-[#5c648c]">
      <div className=" p-10">
        <div className="flex flex-col coll:flex-row  gap-9 p-10">
          <div className="flex flex-col justify-center items-center p-5">
            <h1 className="text-4xl text-white">First Work</h1>
            <a
              className="p-1 text-[19px] text-blue-500 font-medium cursor-pointer hover:text-blue-700"
              href="#"
            >
              Click To Show
            </a>
            <p className="text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <h1 className="text-4xl  text-white">Second Work</h1>
            <a
              className="p-1 text-[19px] text-blue-500 font-medium cursor-pointer hover:text-blue-700"
              href="#"
            >
              Click To Show
            </a>
            <p className="text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <h1 className="text-4xl text-white">Third Work</h1>
            <a
              className="p-1 text-[19px] text-blue-500 font-medium cursor-pointer hover:text-blue-700"
              href="#"
            >
              Click To Show
            </a>
            <p className="text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
