import React from 'react';
import './TopBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown, { DropdownItem} from '../../components/Dropdown';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { withRouter } from 'react-router-dom';

const TopBar = ({history} : {history: any}) => {
    const items: DropdownItem[] = [
        <DropdownItem title="Jeden" onClick={(e) => console.log(e)} /> as any,
        <DropdownItem title="Dwa" onClick={(e) => console.log(e)}/> as any,
        <hr /> as any,
        <DropdownItem title="Logout" onClick={(e) => {
            localStorage.removeItem('bearer-token')
            setTimeout(() => {toast('Logged out succesfully.', {containerId: 'B', type: toast.TYPE.INFO, className: 'rotateY animated'});}, 2000);
            history.go("/");
        }}/> as any
    ];

    return (
        <div className="top-bar-container">
            <span className="top-bar-title">Structural Population QC</span>
            <Dropdown items={items}>
                <div>
                    <div className="top-bar-user-container">
                        <div className="top-bar-user-container-logo">
                            <FontAwesomeIcon icon={faUserCog}/>
                        </div>
                        <div className="top-bar-user-container-details">
                            <div><span className="text-muted">Adam Kowalski</span></div>
                            <div>3-LOZE</div>
                        </div>
                        <div className="top-bar-user-container-caret">
                            <FontAwesomeIcon  icon={faCaretDown}/>
                        </div>
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}

export default withRouter(({ history }) => (<TopBar history={history} />));