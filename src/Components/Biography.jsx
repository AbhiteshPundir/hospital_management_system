const Biography = (imageUrl) => {
  return (
    <div className='w-full h-4/6 flex flex-col-reverse lg:flex-row justify-center gap-5 items-center px-5 mb-2'>
      <img className="h-64 w-80 lg:h-[450px] lg:w-[550px]" src='/about.png' alt="whoweare"/>
      <div className='w-full lg:w-1/3'>
        {/* <p>Biography</p> */}
        <h3 className='text-2xl lg:text-5xl text-zinc-900 font-extrabold pb-5'>Who We Are.</h3>
        <div className="text-md lg:text-lg">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta magnam fuga culpa cum consectetur officiis laboriosam perferendis. Qui, et blanditiis nihil sequi amet quibusdam consequatur totam mollitia maiores iure.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio cumque corporis quia esse nesciunt eum tempore perspiciatis officia voluptas?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum praesentium et sit, distinctio ad?</p>
        </div>
      </div>
    </div>
  )
}

export default Biography
