import HomeCategoriesItem from './HomeCategoriesItem'
import './HomeCategories.scss'

type Props = {}

const HomeCategories = (props: Props) => {
  return (
      <ul className="home-categories">
          <HomeCategoriesItem category="baking" />
          <HomeCategoriesItem category="breakfast" />
          <HomeCategoriesItem category="drinks" />
          <HomeCategoriesItem category="vegan" />
      </ul>
  )
}
export default HomeCategories