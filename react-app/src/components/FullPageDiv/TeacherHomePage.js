import React from 'react';

import YourDecks from './YourDecks.js';
import SearchBar from './SearchBar.js';
import MajorAction from './MajorAction.js';
import MinorAction from './MinorAction.js'

import './TeacherHomePage.css'

const TeacherHomePage = () => {
    return (
        <div class='teacherDiv'>
            <SearchBar />
            <MajorAction thirdActionDisplay='Students'/>
            <MinorAction />
            <YourDecks />
        </div>

    )
}

export default TeacherHomePage;
