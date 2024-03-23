import { useContext, useEffect, useState } from 'react'
import mealContext from '../context/mealContext'
import RecipeFormModal from '../components/Modal/RecipeFormModal'
import Header from '../components/Header/Header'


const Recipes = () => {
    const { fetchRecipes, recipes } = useContext(mealContext)
    const [showForm, setshowForm] = useState(false)


    useEffect(() => {
        fetchRecipes()

    }, [])

    return (
        <>

            {
                (recipes?.length > 0) ?
                    <ul className='relative flex flex-wrap justify-between p-5'>
                        {
                            recipes && recipes.map((recipe, index) => {
                                let tags = recipe.cuisine_path.toString().slice(1).split("/")
                                return (
                                    <li  key={index} className="w-full md:max-w-[30vw] rounded overflow-hidden my-5 shadow-lg duration-300 hover:scale-110">
                                        <div className="w-full h-[45%]">
                                            <img width={"100%"} className="w-full h-full" src={recipe?.img_src} alt={recipe?.recipe_name} />
                                        </div>
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">
                                                {recipe?.recipe_name.toString().slice(0, 23)}
                                            </div>
                                            <p className="text-gray-700 text-base">
                                                {recipe?.ingredients.toString().slice(0, 100)}
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            {
                                                tags.map((tag, index) => {
                                                   
                                                })
                                            }
                                        </div>
                                    </li>
                                )
                            }
                            )}

                        

                        {
                            showForm && <RecipeFormModal setshowForm={setshowForm} />
                        }

                    </ul>
                    :
                    <div className="grid bg-black min-w-screen min-h-screen place-content-center text-white text-3xl">
                        <span className="w-[75px] h-[75px] bg-transparent border-4 rounded-full border-gray-800 border-t-white animate-spin inline-block">
                            
                        </span>
                    </div>
            }
        </>
    )
}

export default Recipes