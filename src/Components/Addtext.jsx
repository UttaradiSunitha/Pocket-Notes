

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Group from './Group';
import './Addtext.css';
import Time from './Time';
import send from '../Images/send.png';
import sent from '../Images/sent.png';

const Addtext = ({ groups, texts: groupTexts, setTexts: setGroupTexts }) => {

  const { groupName} = useParams();

  const selectedGroup = groups.find(group => group.name === groupName);

  const groupNameToShow = selectedGroup ? selectedGroup.name : '';
  const groupShortNameToShow = selectedGroup ? selectedGroup.shortName : '';
  const selectedColorToShow = selectedGroup ? selectedGroup.color : '';

  const [currentText, setCurrentText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    if (selectedGroup) {
      if (!groupTexts[selectedGroup.name]) {
        setGroupTexts(prevTexts => ({
          ...prevTexts,
          [selectedGroup.name]: [],
        }));
      }
    }
  }, [selectedGroup, groupTexts, setGroupTexts]);

  const handleSendClick = () => {
    if (currentText.trim() !== '' && selectedGroup) {
      if (editIndex !== null) {
        const updatedTexts = [...groupTexts[selectedGroup.name]];
        updatedTexts[editIndex] = { text: currentText, time: new Date() };
        setGroupTexts(prevTexts => ({
          ...prevTexts,
          [selectedGroup.name]: updatedTexts,
        }));
        setEditIndex(null);
      } else {
        setGroupTexts(prevTexts => ({
          ...prevTexts,
          [selectedGroup.name]: [
            ...(prevTexts[selectedGroup.name] || []),
            { text: currentText, time: new Date() },
          ],
        }));
      }
      setCurrentText('');
    }
  };

  const handleEditClick = (index) => {
    setCurrentText(groupTexts[selectedGroup.name][index].text);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    const updatedTexts = groupTexts[selectedGroup.name].filter((_, i) => i !== index);
    setGroupTexts(prevTexts => ({
      ...prevTexts,
      [selectedGroup.name]: updatedTexts,
    }));
  };

  const handleChange = (event) => {
    setCurrentText(event.target.value);
  };

  return (
    <div id='container2'>
      <Group
        groupName={selectedGroup ? selectedGroup.name : ''}
        groupShortName={selectedGroup ? selectedGroup.shortName : ''}
        selectedColor={selectedGroup ? selectedGroup.color : ''}
      />
      {selectedGroup &&
        groupTexts[selectedGroup.name] &&
        groupTexts[selectedGroup.name].map((paragraph, index) => (
          <div key={index} id="para-container" >
            <div id="para">
              <p className="textcontainer">
                {paragraph.text}
                <Time time={paragraph.time} />
                <span className="addicon" onClick={() => handleEditClick(index)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </span>
                <span className="addicon" onClick={() => handleDeleteClick(index)}>
                  <i className="fa-solid fa-trash"></i>
                </span>
              </p>
            </div>
          </div>
        ))}
      <div id="tcontainer">
        <textarea
          name="note"
          id="note"
          placeholder="Enter your text here.........."
          value={currentText}
          onChange={handleChange}
        ></textarea>
      </div>
      <div style={{ cursor: 'pointer' }}>
        <img
          src={currentText.trim() === '' ? send : sent}
          alt="send"
          id="send"
          onClick={handleSendClick}
        />
      </div>
    </div>
  );
};

export default Addtext;
