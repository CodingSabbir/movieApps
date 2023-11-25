
import ReactPlayer from 'react-player'


const MovieDetails = () => {
   
return (
<>


<div  style={{
          backgroundColor: '#000',
          minHeight: '100vh', 
          minWidth: '640px', 
          color: '#fff', 
        }}>
<div className=' pt-20 md:flex container mx-auto '>
    <div>
    <div  className="card card-side bg-slate-100 shadow-xl md:h-[360px] w-[640px] rounded-none">
  <figure><img className='h-full md:w-[500px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyKYrEj_OXsBHiTpqSv95ZgwmeQc_CnXPgQ&usqp=CAU" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-black">New movie is released!</h2>
    <p className='text-black'>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end text-black">
      <button className="btn btn-primary ">Watch</button>
    </div>
  </div>
</div>
    </div>

<div className='h-full w-[500px]'>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=PgKZ_eZ0C9o'
            controls={true}
          />
        </div>

</div>
</div>

</>
);
};

export default MovieDetails;




