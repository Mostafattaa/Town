const Our = () => {
  return (
    
<div className="py-12 flex flex-col items-center">  

    <div className="text-center mb-12">
      <h1 className="text-royalblue text-3xl font-bold text-blue-500">Our Work</h1>
      <p className="text-gray-600 mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
        Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
      </p>
    </div>

    <div className="flex flex-wrap justify-evenly items-center ">
      <img
        src="\images\gallery-img-01.jpg"
        alt=""
        className="w-48 h-56 cursor-pointer transition-transform duration-300 m-1 p-5 hover:scale-110"
      />

      <img
        src="\images\gallery-img-02.jpg"
        alt=""
        className="w-48 h-56 cursor-pointer transition-transform duration-300 m-1 p-5 hover:scale-110"
      />

      <img
        src="\images\gallery-img-03.jpg"
        alt=""
        className="w-48 h-56 cursor-pointer transition-transform duration-300 m-1 p-5 hover:scale-110"
      />

      <img
        src="\images\gallery-img-04.jpg"
        alt=""
        className="w-48 h-56 cursor-pointer transition-transform duration-300 m-1 p-5 hover:scale-110"
      />

      <img
        src="\images\gallery-img-05.jpg"
        alt=""
        className="w-48 h-56 cursor-pointer transition-transform duration-300 m-1 p-5 hover:scale-110"
      />

    </div>
</div>
    
  )
}

export default Our