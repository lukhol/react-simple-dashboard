import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { faCoffee, faMap, faHome, faInfo, faCaretDown, IconDefinition, faDotCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import './Menu.scss';

interface SimpleMenuItemProps {
    icon: IconDefinition;
    title: string;
    path: string;
}

const SimpleMenuItem = (props: SimpleMenuItemProps) => {
    return (
        <Link to={props.path}>
            <li>    
                <FontAwesomeIcon size="xs" color="#fff" icon={props.icon}/>
                <span>{props.title}</span>
            </li>
        </Link>
    )
}

interface ComplexMenuItemProps {
    icon: IconDefinition;
    title: string;
    children: any;
}

interface ComplexMenuItemState {
    visible: boolean;
}

class ComplexMenuItem extends React.Component<ComplexMenuItemProps, ComplexMenuItemState> {
    constructor(props: ComplexMenuItemProps){
        super(props);
        this.state = {
            visible: false
        };
    }
    
    render() {
        const { props } = this;
        return (
            <>
                <li className="menu-complex" onClick={() => this.setState({ visible: !this.state.visible })}>
                    <FontAwesomeIcon size="xs" color="#fff" icon={props.icon} />
                    <div>
                        <span>{props.title}</span>
                        <span>
                            <FontAwesomeIcon size="xs" color="#fff" icon={faCaretDown} />
                        </span>
                    </div>
                </li>
                <div className="menu-complex-items">
                    {this.state.visible && props.children}
                </div>
            </>
        )
    }
}

const Menu = () => (
    <>
        <input type="checkbox" id="menu-checkbox" />	
        <div className="menu">
            <ul className="menu-list">
                <SimpleMenuItem icon={faHome} title="Home" path="/" />
                <SimpleMenuItem icon={faInfo} title="About" path="/about/" />
                <SimpleMenuItem icon={faCoffee} title="Users" path="/users/" />
                <SimpleMenuItem icon={faMap} title="Map" path="/map/" />

                <ComplexMenuItem icon={faHome} title="More">
                    <SimpleMenuItem icon={faCircle} title="Test1" path="/test1" />
                    <SimpleMenuItem icon={faCircle} title="Test2" path="/test2" />
                </ComplexMenuItem>

                <SimpleMenuItem icon={faMap} title="Map" path="/map/" />
            </ul>
        </div>
    </>
)

export default Menu;