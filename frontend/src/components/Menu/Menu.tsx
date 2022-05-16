import { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import Title from "../Title/Title";
import './Menu.css';
import '../../medias.css';
import menuObject from "../../menu.json";

interface MenuSectionTemplate extends Array<any> {
    itemName: string,
    options: { label: string, price: string },
    itemDescription: string,
    glutenFree: boolean,
    vegan: boolean
}

interface MenuObject {
    appetizers?: MenuSectionTemplate,
    salads?: MenuSectionTemplate,
    pizza?: MenuSectionTemplate,
    specialties?: MenuSectionTemplate,
    pasta?: MenuSectionTemplate,
    sandwiches?: MenuSectionTemplate,
    specials?: MenuSectionTemplate
}


function Menu(): React.ReactNode {
    const [menuSection, setMenuSection] = useState(menuObject.appetizers);
    const [menuSectionTitle, setMenuSectionTitle] = useState("Appetizers");
    const capitalize = (string: string) => {
        if (string.length >= 1) {
            return string.charAt(0).toLocaleUpperCase() + string.substring(1);
        } else {
            return string;
        }
    }

    const mappings: MenuObject = {};
    for (let key in menuObject) {
        mappings[capitalize(key)] = menuObject[key];
    }

    const MenuOption = (props: { title: string }): JSX.Element => {
        const onMenuOptionClick = () => {
            const top = document.querySelector('#menu-options');
            top.scrollIntoView();
            setMenuSectionTitle(title);
            setMenuSection(mappings[title] !== undefined ? mappings[title] : menuObject.appetizers /* default fallback */);
        }

        const title = props.title;
        return (
            <a className={`menu-option ${menuSectionTitle === title ? 'browsing' : ''}`} onClick={onMenuOptionClick} href='#'>
                {title}
            </a>
        );
    }

    return (
        <div>
            <div id=""></div>
            <Title />
            <div className="title" id="menu-options">
                <nav className="menu-options">
                    <MenuOption title="Appetizers" />
                    <MenuOption title="Salads" />
                    <MenuOption title="Pizza" />
                    <MenuOption title="Specialties" />
                    <MenuOption title="Pasta" />
                    <MenuOption title="Sandwiches" />
                    <MenuOption title="Specials" />
                </nav>
            </div>
            <div className="menu">
                <div className="menu-browsing-title">
                    {menuSectionTitle}:
                </div>
                <div className="menu-wrapper">
                    <div data-menu>
                        {menuSection.map((element, index: number) => <FoodCard key={index} index={index} item={element} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;