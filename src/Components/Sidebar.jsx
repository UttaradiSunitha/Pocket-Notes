import React from 'react';
import './Sidebar.css';
import Add from './Add.jsx';
import { Link,useNavigate } from 'react-router-dom';
const Sidebar = ({ groups, onDeleteGroup, selectedGroup, onSelectGroup, openCreateGroup }) => {

  const navigate = useNavigate();

  const handleDeleteGroup = (group) => {
    onDeleteGroup(group);
    if (selectedGroup === group) {
      onSelectGroup(null);
    }
  };

  const handleGroupClick = (groupName) => {
    navigate(`/addtext/${groupName}`);
  };


  return (
    <div id='sidebar'>
      <div id='h1container'>
        <h1>Pocket Notes</h1>
      </div>
      <div id='listcontainer'>
        <ul id='list'>
          {groups.map((group, index) => (
            <div key={index} className={`list-item-container ${group === selectedGroup ? 'active' : ''}`}>
              <li
                className={group === selectedGroup ? 'listitem' : 'listitem'}
                onClick={() => {onSelectGroup(group === selectedGroup ? null : group);() => handleGroupClick(group.name)}}
                
              >
              <Link to={`/addtext/${group.name}`} >
              <span style={{ background: group.color }} id='groupname'>{group.shortName}</span>
              {group.name}
              </Link>
                {/* <span style={{ background: group.color }} id='groupname'>{group.shortName}</span>{group.name} */}
              </li>
              <span className='delete' onClick={() => handleDeleteGroup(group)}><i className="fa-solid fa-trash"></i></span>
            </div>
          ))}
        </ul>
      </div>
      <div><Add onClick={openCreateGroup} /></div>
    </div>
  );
};

export default Sidebar;