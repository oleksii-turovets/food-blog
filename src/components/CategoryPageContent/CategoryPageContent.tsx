type Props = {
    category?: string
}
const CategoryPageContent = ({category}: Props) => {
  return (
    <div>{category}</div>
  )
}
export default CategoryPageContent