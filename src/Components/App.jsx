import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Display from './Display';
import './App.css';
import { Route, Routes,useNavigate } from 'react-router-dom';
import CreateNewGroup from './CreateNewGroup';
import Addtext from './Addtext';

const App = () => {

  const [groups, setGroups] = useState(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups'));
    return storedGroups || [];
  });
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [texts, setTexts] = useState(() => {
    const storedTexts = JSON.parse(localStorage.getItem('texts'));
    return storedTexts || {};
  });
  const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
  // const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 600);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    localStorage.setItem('texts', JSON.stringify(texts));
  }, [texts]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const openCreateGroup = () => {
    setIsCreateGroupOpen(true);
  };
  const deleteGroup = (groupToDelete) => {
    const updatedGroups = groups.filter(group => group !== groupToDelete);
    setGroups(updatedGroups);
    if (selectedGroup === groupToDelete) {
      setSelectedGroup(null);
    }
  };

  const addGroup = (group) => {
    setGroups([...groups, group]);
    setIsCreateGroupOpen(false); 
  };

  return (
    <div id='cont'>
      <div className="Sidebar">
        <Sidebar groups={groups} selectedGroup={selectedGroup} onSelectGroup={handleSelectGroup} openCreateGroup={openCreateGroup} onDeleteGroup={deleteGroup} />
      </div>
      {isCreateGroupOpen && <CreateNewGroup onAddGroup={addGroup} onClose={() => setIsCreateGroupOpen(false)} />}
      {/* {groups.length === 0 ? (
        <Display />
      ) : (
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/addtext/:groupName" element={<Addtext groups={groups} texts={texts} setTexts={setTexts} />} />
        </Routes>
      )} */}
      {selectedGroup ? (
  <Routes>
    <Route path="/" element={<Display />} />
    <Route path="/addtext/:groupName" element={<Addtext groups={groups} texts={texts} setTexts={setTexts} className="Addtext"/>} />
  </Routes>
) : (
  <Display />
)}
    </div>)
        }

export default App;
