import { NavItemLayout, CaretDown } from '../../../styles/nav_components'
import { Ul } from './Ul';

const Dropdown = ({ title, children }) => {
    return (
        <NavItemLayout>
            {title}
            <CaretDown />
            <Ul>
                {children}
            </Ul>
        </NavItemLayout>
    )
}

export default Dropdown;
