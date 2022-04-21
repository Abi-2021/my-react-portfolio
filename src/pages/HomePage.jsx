import profile from '../img/profile.jpg';
function HomePage() {
  return (
    <section>
      <div className='container px-6 mx-auto mb-auto'>
        <h2 className=' text-center font-bold my-12 text-2xl'>About me</h2>
        <img
          src={profile}
          alt='profile'
          className='w-48 h-auto rounded-full mx-auto'
        />
        <div className='pt-6 text-center md:p-8  md:text-left space-y-4 md:mx-10 lg:mx-20'>
          <p>
            My name is Abirami Theepan, and my portfolio is a representation of all that I've learned and accomplished as a Junior Web Developer.
            I love to write clean and efficient code for designing elegant and functional user experiences. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
