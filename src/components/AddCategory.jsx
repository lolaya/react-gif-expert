import { useRef, useEffect, useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const input = useRef()

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        const newValue = inputValue.trim()
        e.preventDefault()

        if(newValue.length <= 1) return

        onNewCategory(newValue)
        setInputValue('')
    }

    useEffect(() => {
        input.current.focus()
    }, [input])

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type='text'
            ref={ input }
            value={ inputValue }
            onChange={ onInputChange }
            placeholder={ 'Buscar gifs' }
        />
    </form>
  )
}
