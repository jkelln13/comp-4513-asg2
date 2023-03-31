import React, { useState } from "react";
import Modal from 'react-modal';

export default function About() {

    //Retrieved from react-modal-npm. At: https://www.npmjs.com/package/react-modal

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button class="mx-5 my-5 bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded" onClick={openModal}>About</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Comp 4513 - Assignment 1</h1>
                <div>
                    <h2>Contributors:</h2>
                    <p>Josh Kelln and Shargeel Hayat</p>
                </div>
                <div>
                    <h2><a href="https://github.com/jkelln13/comp-4513-asg1">Github Repo Link</a></h2>
                </div>
                <div>
                    <h2>Technology Used:</h2>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>React</li>
                        <li>npm/npx</li>
                    </ul>
                </div>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}