import { Children } from "react"

export const Input = (props) => {
  const { className,id,title, ...otherProps } = props
  return (
    <div>
    <label htmlFor={id}>
       {title}
       </label>
       <br/>
    <input
      className={className}
      id={id}
      {...otherProps}
    />
    </div>
  )
}
export default Input
