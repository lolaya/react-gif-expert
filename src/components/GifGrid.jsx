import useFetchGifs from "../hooks/useFetchGifs"
import { GifGridItem } from "./GifGridItem"
import { Loading } from "./Loading";

export const GifGrid = ({ category, onDeleteCategory }) => {

    const [images, isLoading] = useFetchGifs( category )
    
  return (
    <>
        <div className={ 'group' }>
            <h3>
                { category }
                <a className={ 'btn-delete' } onClick={ (e) => onDeleteCategory(category) }>X</a>
            </h3>
            
            { isLoading && <Loading /> }

            <div className={ 'card-grid' }>
                {
                    !isLoading && images.map((image) => (
                        <GifGridItem 
                            key={ image.id }
                            {...image} />
                    ))
                }
            </div>
        </div>
    </>
  )
}