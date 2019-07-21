import React, {ReactNode} from 'react';
import styles from './Dropdown.module.scss';

export interface DropdownItemProps {
    title: string;
    onClick: (event: any) => void;
}

export class DropdownItem extends React.Component<DropdownItemProps> {

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export interface DropdownProps {
    items: DropdownItem[];
    children: ReactNode;
}

export default class Dropdown extends React.Component<DropdownProps> {

    render() {
        return (
            <div className={styles.dropdown}>
                {this.props.children}
                <div className={styles.dropdownContent}>
                    {this.props.items.map((item, index) => <span key={index} onClick={item.props.onClick}>{item}</span>)}
                </div>
            </div>
        )
    }
}