import { useState } from "react"
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState( ['Blink-182'] )
  
  const onAddCategory = (newCategory) => {
    setCategories((data) => data.includes(newCategory) ? [...data] : [newCategory, ...data])
  }

  const onDeleteCategory = (category) => {
    setCategories(() => categories.filter((filteredItem) => filteredItem != category))
  }

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
          onNewCategory={ onAddCategory } />

        { categories.map((category) => (
            <GifGrid 
              key={category}
              category={category}
              onDeleteCategory={onDeleteCategory} />
          ))   
        }
    </>
  )
}