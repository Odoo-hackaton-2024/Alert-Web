import { colors } from "../theme/theme"

function Auth() {

  return (
    <div className='h-screen w-screen flex flex-row items-center justify-between' style={{backgroundColor: colors.darkAlpha(0.9)}}>

        <div className='h-full w-1/2 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-fit'>
              <p className='text-7xl text-left text-white'>Hello,</p>
              <p className='text-lg text-white mt-7'>Please authenticate to continue!</p>
            </div>
          </div>
        </div>

        <div className='h-full w-1/2 flex flex-col items-center justify-center '>
          <p className='text-white text-xl'>Log in</p>
          <div className="flex flex-col mt-12">
            <input 
              className='w-96 rounded-md px-3 py-2'
              placeholder='Email*' />
            <input 
              className='w-96 rounded-md px-3 py-2 mt-4'
              placeholder='Password*' />
            
            <button className='w-96 rounded-md px-3 py-2 bg-white mt-6' onClick={() => alert("Pressed")}>Continue</button>
          
          </div>
        </div>
    </div>
  )
}

export default Auth
