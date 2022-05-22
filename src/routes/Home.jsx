import kaviya from "../images/kaviya.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100vh] fontFamily: Work Sans">
      <div className=" flex-grow bg1 flex flex-col justify-center">
        <img
          src={kaviya}
          className="w-56 h-58 mx-auto rounded-3xl"
          alt="profile"
        />
        <p className="text-[#EC5500] text-center mt-14 text-3xl font-bold ">
          Kaviya Gopi
        </p>
        <p className="text-center text-xl pt-14">
          Student at Sathyabama Institute of Science and Technology Working
          towards Bachelor of Engineering (B.E) <br /> foused in{" "}
          <span className="font-bold text-[#EC5500]">
            Computer Science and Engineering
          </span>{" "}
          . <br /> I'm a hard worker and detail oriented college student
          exploring different fields.
          <br /> I hope to expand my experience across different industries
        </p>
      </div>
    </div>
  );
};

export default Home;
