const Intro = () => {
  return (
    <div className="flex flex-col   coll:flex-row  justify-center items-center  gap-10 m-9 ml-20 mr-20">
         <div className=" ">
            <img className="w-[100%] p-5" src= "/images/the-town-01.jpg" alt='here' />
        </div>
        <div className=" text-[16px] p-10   m-5">
            <h1 className="text-blue-600 font-bold text-4xl pb-3">Introduction</h1>
            <p className="pb-2.5 ">The Town is <b>simple React template</b> built with React , Tailwind and this is a little parallax layout that you can use for your website</p>
            <p className="pb-2.5">Please tell your friends about our site <a className="text-blue-400 font-medium cursor-pointer hover:text-blue-700"href='#'>The Town.</a> Thank you. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, nisi tenetur.</p>
            <button className=" bg-blue-500 rounded-lg p-1.5 cursor-pointer hover:bg-blue-950  ">Read More</button>
        </div>
        
    </div>
  )
}

export default Intro