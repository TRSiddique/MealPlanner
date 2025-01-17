import { useState } from "react"
import { NavLink } from "react-router-dom"


const Signup = () => {
    const [ formData , setformData ] = useState({
        email: '' ,
        name: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://encouraging-scarlet.cmd.outerbase.io/signup`, {
            'method': 'POST',
            'headers': {
                'content-type': 'application/json'
            },
            'body': JSON.stringify({
                email: formData.email, 
                name: formData.name,
                password: formData.password
            })
            })

        const data = await response.json()
        setformData({
            name: '',
            email: '' ,
            password: ''
        })
        if(data.success) {
            navigate('/login')
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
          <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
              <h1 className="text-center text-2xl lg:text-3xl font-semibold">
                  Sign Up
              </h1>

              <div className="form-group flex flex-col">
                  <label htmlFor="name " className="block text-semibold "><strong>Full Name</strong></label>
                  <input name="name"  type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.name}  onChange={handleChange} />
              </div>

              <div className="form-group flex flex-col">
                  <label htmlFor="email " className="block text-semibold "><strong>Email</strong></label>
                  <input name="email"  type="email" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.email}  onChange={handleChange} />
              </div>

              <div className="form-group flex flex-col">
                  <label htmlFor="password " className="block text-semibold "><strong>Password</strong></label>
                  <input name="password" type="password" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.password} onChange={handleChange} />
              </div>
              {/* { isSignUp ? <div className="subheading">
            Already have an account? <NavLink to="/" className="text-blue-500">Login</NavLink>
          </div> :  */}
              <div className="subheading">
                  Do you have an account?
                  <NavLink to="/login" className="text-blue-500">Login</NavLink>
              </div>
              <button type="submit" className="bg-black py-2 text-white font-bold"
              >
                  Create Account
              </button>
          </form>
      </div>
  )
}

export default Signup