import menu_icon from './Images/menu.png'
import apps_icon from './Images/apps.png'
import option_icon from './Images/options.png'
import add_icon from './Images/add.png'
import grid_icon from './Images/grid.png'
import checkbox_icon from './Images/checkbox.png'
import setting_icon from './Images/settings.png'
import toggle_icon from './Images/toggle.png'

export const Images = {
    menu_icon,
    apps_icon,
    option_icon,
    add_icon,
    grid_icon,
    checkbox_icon,
    setting_icon,
    toggle_icon
}
export const Tasks = [
    {
    title : "Sample Task",
    description : "This is a sample task description",
    status : "Pending",
    created_at : new Date().toLocaleDateString()
    },
    {
    title : "Sample Task 2",
    description : "This is another sample task description",
    status : "Completed",
    created_at : new Date().toLocaleDateString()
    },
    {
    title : "Sample Task 3",
    description : "This is yet another sample task description",
    status : "In Progress",
    created_at : new Date().toLocaleDateString()
    },
    {
    title : "Sample Task 4",
    description : "This is a different sample task description",
    status : "Pending",
    created_at : new Date().toLocaleDateString()
    },
    {
    title : "Sample Task 5",
    description : "This is a final sample task description",
    status : "Completed",
    created_at : new Date().toLocaleDateString()
    }
]
