const Footer = () => {
  return (
    <div  className="pt-8 pb-2 bg-[url(/images/the-town-bg-02.jpg)] bg-cover bg-center" >
          <div className="m-auto px-4">
            <div className="flex flex-col items-start coll:items-center pb-12">
              <h1 className="text-white font-bold  text-2xl mb-8">Contact Us</h1>
              <div className="w-full h-px bg-white relative">
                <div className="absolute top-0 left-0 md:left-1/4 w-1/5 md:w-1/2 h-2 bg-white"></div>
              </div>
              <p className="text-white  mt-8 text-start coll:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi
                facere, doloribus fugit inventore error quo doloremque cum esse?Lorem
                ipsum dolor sit amet consectetur adipisicing elit. At in sequi
                facere, doloribus fugit inventore error quo doloremque cum esse?
              </p>
            </div>

            <div className="flex flex-col coll:flex-row justify-center items-center  pb-12 text-white font-bold">
              <div className="flex flex-col items-center  coll:items-start gap-5 w-full md:w-1/3 pb-5 ">
                <p>Phone: +201 552 363 502</p>
                <p>Location:6 October City </p>
              </div>

              <div className="flex flex-col items-center  coll:items-start">
                <p className="pb-5">Email:mostafaatta733@gmail.com</p>
                <div className="flex flex-col coll:flex-row ">
                  <input
                    type="text"
                    placeholder="Subscribe Your Mail"
                    className="px-4 py-2 bg-transparent border-2 border-white rounded-lg text-white placeholder-white mb-4  "
                  />
                  <button className="btn btn-black font-bold text-blue-500 hover:text-blue-800 uppercase w-full md:w-auto">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center text-white mb-3">
              <p className="text-lg ">
                Copyright &copy; 2025 - Design:
                <span className="text-blue-700 font-bold">  Mostafa Atta</span> 
              </p>
            </div>
          </div>
  </div>
);
      
}

export default Footer;
