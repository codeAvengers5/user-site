import Link from 'next/link';
const Registration = () => {
  return (
    <div className="w-full relative bg-white h-[1025px] overflow-hidden text-left text-xl text-darkslategray font-Roboto">
      <b className="absolute top-[233px] left-[827px] text-29xl">
        Create your account
      </b>
      <div className="absolute top-[359px] left-[831px] font-medium">Name</div>
      <div className="absolute top-[497px] left-[831px] font-medium">Email</div>
      <div className="absolute top-[643px] left-[831px] font-medium">
        Password
      </div>
      <div className="absolute top-[398px] left-[831px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[488px] h-[70px]">
        <input
        type="text"
         className="absolute top-[0px] left-[0px] bg-snow w-[488px] h-[70px]" />
      </div>
      <div className="absolute top-[543px] left-[831px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[488px] h-[70px]">
        <input
        type="email"
         className="absolute top-[0px] left-[0px] bg-snow w-[488px] h-[70px]" />
      </div>
      <div className="absolute top-[686px] left-[831px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[488px] h-[70px]">
        <input
        type="password"
         className="absolute top-[0px] left-[0px] bg-snow w-[488px] h-[70px]" />
      </div>
      <button className="absolute top-[826px] left-[831px] rounded-[25px] bg-crimson w-[492px] h-[76px] flex flex-row items-center justify-center p-2.5 box-border text-5xl text-white">
        <div className="relative font-medium">Sign up</div>
      </button>
      <div className="absolute top-[98px] left-[1142px] font-medium">
        Already a member?
      </div>
      <img
        className="absolute top-[36px] left-[37px] rounded-[50%] w-[247px] h-[146px] object-cover"
        alt=""
        src="images/ellipse-10@2x.png"
      />
      <div className="absolute top-[2201px] left-[-1808px] bg-lightsteelblue w-[366px] h-[171px]" />
      <div className="absolute top-[1986px] left-[169px] w-[880px] h-[269px]" />
      <img
        className="absolute top-[148px] left-[0px] w-[695px] h-[877px] object-cover"
        alt=""
        src="images/mobilelogin-1@2x.png"
      />
      <div className="absolute top-[136px] left-[1222px] w-[79px] h-6 text-crimson">
  <Link href="/login">
    <div className="absolute top-[0px] left-[29px] font-medium">Login</div>
    <img
      className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
      alt=""
      src="images/mdi_password.svg"
    />
  </Link>
</div>
    </div>
  );
};

export default Registration