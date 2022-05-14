import { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import Title from "../Title/Title";
import './Menu.css';
import '../../medias.css';

const menuObj = require('../../menu.json');

function Menu() {
    const [menuSection, setMenuSection] = useState(menuObj.appetizers);
    const [menuSectionTitle, setMenuSectionTitle] = useState("Appetizers");
    const mappings = {
        "Salads": menuObj.salads,
        "Pizza": menuObj.pizza,
        "Specialties": menuObj.specialties,
        "Pasta": menuObj.pasta,
        "Sandwiches": menuObj.sandwiches,
        "Specials": menuObj.specials
    };

    function MenuOption(props) {
        const title = props.title;
        return (
            <a className={`menu-option ${menuSectionTitle === title ? 'browsing' : ''}`} onClick={() => {
                const top = document.querySelector('#menu-options');
                top.scrollIntoView();

                setMenuSectionTitle(title);
                setMenuSection(mappings[title] !== undefined ? mappings[title] : menuObj.appetizers);
            }} href='#'>{title}</a>
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
                        {menuSection.map((p, index) => <FoodCard key={index} index={index} item={p} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;