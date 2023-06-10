// import { url } from "inspector";
// import Image from "next/image";
// import React from "react";
// import Link from "next/link";

// export default function Login() {
//   return (
//     <div
//       className="bg-cover w-full h-screen text-white flex flex-col items-center"
//       style={{ background: 'url("/images/background.png")' }}
//     >
//       <Link href="/">
//         <div className="flex flex-col items-center p-8 gap-1"
//         >
//           <Image src="/images/logo.png" alt="logo" width={90} height={90} />
//           <h1 className="text-white text-3xl font-semibold px-3">DegChain</h1>
//         </div>
//       </Link>


//       <div className="container h-1/2 w-1/3 text-black flex flex-col item-center gap-5">
//         <h1>Sign in </h1>
//         <form className="flex flex-col items-center gap-3" action="">
//           <input
//             className="bg-slate-200 p-2 w-4/5 text-black"
//             type="text"
//             placeholder="Private Key"
//             name="key"
//           />
//           <hr className="text-white w-full  " />
//           <button className='bg-white font-bold py-2 px-4 m-3 rounded-full text-black '>

//             Login
//           </button>
//         </form>

//         <div className=" flex flex-row justify-between">
//           <div className="gap-2">

//             <input
//               className="bg-white  "
//               type="checkbox"
//               placeholder="false"
//               name="remember"
//               id="remember"
//             />
//             <label htmlFor="remember" className="text-white text-lg">
//               Remember Me
//             </label>
//           </div>

//           <p className="text-white text-lg">Forgot Password?</p>
//         </div>
//         <hr className="text-white w-full  " />
//         <p className="text-white text-lg text-center">
//           Dont have an account?  <b className="pl-2 text-xl"><Link href="/register">Sign up</Link></b>
//         </p>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <div
      className="bg-cover w-full h-screen text-white flex flex-col items-center"
      style={{ background: 'url("/images/background.png")' }}
    >
      <Link href="/">
        <div className="flex flex-col items-center p-6 gap-1">
          <Image src="/images/logo.png" alt="logo" width={90} height={90} />
          <h1 className="text-white text-3xl font-semibold px-3">DegChain</h1>
        </div>
      </Link>
      <div className="container p-3 h-3/5 w-1/3 bg-gray-800 opacity-90 text-black flex 
      flex-col item-center gap-5 rounded-xl">
        <h1 className="text-white font-bold text-2xl text-center">Sign In</h1>
        <hr className="text-white w-full  " />
        <form className="flex flex-col items-center gap-3" action="">
          <input
            className="bg-slate-200 p-2 w-4/5 text-black"
            type="text"
            placeholder="Private Key"
            name="key"
          />
          <button className='bg-white w-4/5 font-bold py-2 px-4 m-3 rounded-full text-black '>
            Sign In
          </button>
        </form>
        <div className=" flex flex-row justify-evenly">
          <div className="gap-2">
            <input
              className="bg-white  "
              type="checkbox"
              placeholder="false"
              name="remember"
              id="remember"
            />
            <label htmlFor="remember" className="text-white text-lg">
              Remember Me
            </label>
          </div>

          <p className="text-white text-lg">Forgot Password?</p>
        </div>
        <hr className="text-white w-full  " />
        <p className="text-white text-lg text-center">
          Dont have an account?  <b className="pl-2 text-xl"><Link href="/register">Sign up</Link></b>
        </p>
      </div>
    </div>
  )
}