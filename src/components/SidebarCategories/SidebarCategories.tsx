import { Typography } from '@mui/material'
import SidebarCategoriesItem from './SidebarCategoriesItem'
import './SidebarCategories.scss'

type Props = {}
const SidebarCategories = (props: Props) => {
    
    return (
        <ul className="sidebar-categories-list">
            <SidebarCategoriesItem
                to="/category/featured"
                category={['featured']}
            >
                Featured
            </SidebarCategoriesItem>
            <SidebarCategoriesItem
                to="/category/recipes"
                category={['baking', 'breakfast', 'drinks', 'vegan']}
            >
                Recipes
                <object>
                    <ul className="sidebar-recipes-cat-list">
                        <SidebarCategoriesItem
                            to="/category/recipes/baking"
                            category={['baking']}
                        >
                            Baking
                        </SidebarCategoriesItem>
                        <SidebarCategoriesItem
                            to="/category/recipes/breakfast"
                            category={['breakfast']}
                        >
                            Breakfast
                        </SidebarCategoriesItem>
                        <SidebarCategoriesItem
                            to="/category/recipes/drinks"
                            category={['drinks']}
                        >
                            Drinks
                        </SidebarCategoriesItem>
                        <SidebarCategoriesItem
                            to="/category/recipes/vegan"
                            category={['vegan']}
                        >
                            Vegan
                        </SidebarCategoriesItem>
                    </ul>
                </object>
            </SidebarCategoriesItem>
        </ul>
    )
}
export default SidebarCategories
