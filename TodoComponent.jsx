import classes from './Todo.module.css'
export const TodoComponent = ({id, title, marked, handleClick})=>{

    return(
        <div className={marked ? classes.done :   classes.waiting}>
            <input 
                type="checkbox"
                checked={marked}
            />
            <span>{title}</span>
            <button className='button' onClick={()=>handleClick(id)}>
                {marked ? 'Is done': 'Have to do'}
            </button>
        </div>
    )
}