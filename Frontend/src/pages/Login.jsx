import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import mealContext from '../context/mealContext'

const Login = () => {
    const navigate = useNavigate()
    const { user, setuser } = useContext(mealContext)
    const [ formData , setformData ] = useState({
        email: '' ,
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://encouraging-scarlet.cmd.outerbase.io/login`, {
            'method': 'POST',
            'headers': {
                'content-type': 'application/json'
            },
            'body': JSON.stringify({
                email: formData.email, 
                password: formData.password
            })
            })

        const data = await response.json()
        console.log(data)
        setformData({
            email: '' ,
            password: ''
        })
        if(data.success) {
            if(data.response.items.length > 0){ 
                setuser(data.response.items[0])
                localStorage.setItem('login', true)
                localStorage.setItem('id', data.response.items[0].id)
                navigate('/meal-planner')
            }
        } else { 
            alert("Try Again !")
        }
    }

    const handleChange = (e) => {
        setformData({
            ...formData, 
            [e.target.name] : e.target.value
        })
    }
    return (
      <div className="w-full min-h-[85vh] overflow-hidden grid place-content-center ">
          <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl" action = "">
              <h1 className="text-center text-2xl lg:text-3xl font-semibold">
                  Login
              </h1>


              <div className="form-group flex flex-col">
                  <label htmlFor="email " className="block text-semibold text-gray-400">Email</label>
                  <input name="email"  type="email" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.email}  onChange={handleChange} />
              </div>
              <div className="form-group flex flex-col">
                  <label htmlFor="password " className="block text-semibold text-gray-400">Password</label>
                  <input name="password"  type="password" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.password}  onChange={handleChange} />
              </div>

             
              {/* { isSignUp ? <div className="subheading">
            Already have an account? <NavLink to="/" className="text-blue-500">Login</NavLink>
          </div> :  */}
              <div className="subheading">
                  Don't have an account?
                  <NavLink to="/Signup" className="text-blue-500"> SignUp</NavLink>
              </div>
              <button type="submit" className="bg-black py-2 text-white font-bold"
              >
                  Login
              </button>
              
          </form>
      </div>
    )
}


export default Login;