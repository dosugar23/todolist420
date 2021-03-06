import React from 'react';
import './SideBar.css';
import Aux from '../../../hoc/Axu';
import Item from './Item/Item';
import { faRetweet, faInbox, faTasks } from '@fortawesome/free-solid-svg-icons';

function SideBar(props) {
    let op1 = true;
    let op2 = false;
    let op3 = false;

    if(props.controller === 0){
        op1 = true;
        op2 = false;
        op3 = false;
    }else if(props.controller === 1){
        op1 = false;
        op2 = true;
        op3 = false;
    }else{
        op1 = false;
        op2 = false;
        op3 = true;
    }

    return (
        <Aux>
            <div className="SideBar">
                {op1 ? <Item icon={faTasks} label="Tasks" number={props.tasklists} color="#5cb85c" click={props.clickTodo}/> : <Item icon={faTasks} label="Todo" number={props.tasklists} color="white" click={props.clickTodo}/>}
                {op2 ? <Item icon={faInbox} label="Inbox" number={props.shared} color="#5cb85c" click={props.clickInBox}/> : <Item icon={faInbox} label="Inbox" number={props.shared} color="white" click={props.clickInBox}/>}
                {op3 ? <Item icon={faRetweet} label="Share" number={props.share} color="#5cb85c" click={props.clickShare}/> : <Item icon={faRetweet} label="Share" number={props.share} color="white" click={props.clickShare}/>}
            </div>
        </Aux>
    )
}

export default SideBar;