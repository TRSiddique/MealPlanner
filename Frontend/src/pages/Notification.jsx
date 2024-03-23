import { NavLink } from "react-router-dom"

const Notification = () => {
  return (
    <div className="text-white font-bold grid min-w-screen min-h-screen overflow-hidden place-content-center text-5xl bg-[url('https://image.slidesdocs.com/responsive-images/slides/0-simple-contrast-color-good-morning-dream-work-report-powerpoint-background_ca826c90af__960_540.jpg')] bg-no-repeat bg-stretch object-fill bg-center bg-cover">
      <p className="animate-bounce">
    
      <p className="text-7xl font-bold">
      Here we will share <br /> motivational quotes <span className="p-2 bg-light-green">on diet plan</span>
          </p>
      </p>
      <NavLink to="/" className="flex-center pt-10">
        <button className="text-xl bg-gray-200 mt-10 rounded-full px-10 py-3 text-black mx-auto cursor-pointer hover:scale-110 duration-300">
          Home
        </button>
      </NavLink>
    </div>
   
  )
}

export default Notification