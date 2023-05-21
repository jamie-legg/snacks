import { useState } from "react"
import { IFood } from "./DetailsScreen"

interface IFoodInputProps {
  onSubmit: (food: IFood) => void
}

export default function FoodInput({ onSubmit }: IFoodInputProps) {

  
  const [food, setFood] = useState<IFood>({ name: ''})

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSubmit(food)
    setFood({ name: '' })
  }

    const handleChange = (e: any) => {
    setFood({ name: e.target.value })
  }
  
  return (
    <form 
      onSubmit={handleSubmit}
    >
    <div className="flex justify-center items-center">
      <div>
        <label htmlFor="food" className="block text-sm font-medium leading-6 text-gray-900">
          Food Name
        </label>
        <div className="">
          <input
            type="food"
            name="food"
            id="food"
            value={food.name}
            onChange={handleChange}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-200 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="Orange Juice"
            aria-describedby="food-description"
          />
        </div>
        <p className="text-sm text-gray-500" id="food-description">
          Either the name of the food or the ID.
        </p>
      </div>
      <button
        type="submit"
        className="h-max mt-1 ml-4 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-secondary shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Submit
      </button>
    </div>
    </form>
  )
}
