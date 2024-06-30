
export const Login = ()=>{
    
    return (
        <div className="p-10 flex justify-center">
          <div className="bg-white w-[50%] flex flex-col rounded-md py-40 px-4 border-[2px]">
            <h1 className="text-3xl font-bold">ASP DATA</h1>
            <h3>Login now</h3>
            <form action="">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input type="email" name="email" id="email" className="border-[1px] border-gray-200 rounded-md px-3 py-2" />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input type="password" name="password" id="password" className="border-[1px] border-gray-200 rounded-md px-3 py-2" />
              </div>
              <button className="bg-[#00a63f] text-white px-10 py-3 rounded-lg">Login</button>
            </form>
          </div>
        </div>
    )
}