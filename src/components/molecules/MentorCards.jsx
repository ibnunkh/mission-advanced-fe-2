import React from 'react'
import AvatarCard from '../../assets/images/Avatar-card-1.svg'


export default function MentorCards() {
    return (
        <>
            <div className="mentor-card">
                <img className="Avatar" src={AvatarCard} />
                <p>
                    <span className="title-mentor-name">Jenna Ortega</span>
                    <span className="title-mentor-experience">Senior Accountant di <span className="bold-text">Gojek</span></span>
                </p>
            </div>
        </>
    )
}