import Link from "next/link";
const Login = () => {
  return (
    <div className="font-Roboto relative h-[1025px] w-full overflow-hidden bg-white text-left text-xl text-darkslategray">
      <b className="absolute left-[824px] top-[259px] text-[48px]">
        LOGIN ACCOUNT
      </b>
      <div className="absolute left-[826.5px] top-[381px] font-medium">
        Username
      </div>
      <div className="absolute left-[826.5px] top-[546px] font-medium">
        Password
      </div>
      <div className="absolute left-[826.5px] top-[440px] h-[70px] w-[488px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
        <input
          type="text"
          className="absolute left-0 top-0 h-[70px] w-[488px] rounded bg-snow px-2 py-1.5"
        />
      </div>
      <div className="absolute left-[826.5px] top-[605px] h-[70px] w-[488px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
      <input
              type="password"
              className="absolute top-0 left-0 bg-snow w-[488px] h-[70px] px-2 py-1.5 rounded"
            />
      </div>
      <button className="absolute top-[792px] left-[827px] rounded-[25px] bg-crimson w-[488px] h-[76px] flex flex-row items-center justify-center p-2.5 box-border text-[24px] text-white">
        <div className="relative font-medium">Login</div>
      </button>
      <div className="absolute top-[725px] left-[1142px] font-medium">
        <Link href="/">
          Already a member?
        </Link>
      </div>
      <img
        className="absolute top-[36px] left-[37px] rounded-[50%] w-[247px] h-[146px] object-cover"
        alt=""
        src="/images/ellipse-10@2x.png"
      />
      <div className="absolute top-[2201px] left-[-1808px] bg-lightsteelblue w-[366px] h-[171px]" />
      <div className="absolute top-[1986px] left-[169px] w-[880px] h-[269px]" />
      <img
        className="absolute top-[148px] left-[0px] w-[695px] h-[877px] object-cover"
        alt=""
        src="images/mobilelogin-1@2x.png"
      />
    </div>
  );
};

export default Login;