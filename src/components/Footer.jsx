import React from 'react';
import {
  AiFillGithub,
} from "react-icons/ai";
import '../styles/Footer.css';

const Footer = () => {
    const ano = new Date().getFullYear();
    return (
        <div className="footer-container">
            <footer id="footer" className="bg-black text-white">
                <div className="container text-center">
                    <p>&copy; Copyright 2023{ano !== 2023 ? `-${ano}` : ''} The Lister. Todos os direitos reservados.</p>
                </div>
                <div>
                    <li className="social-icons">
                        <a
                            href="https://github.com/AllanSmithll"
                            style={{ color: "white" }}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                        </li>
                </div>
            </footer>
        </div>
    );
}

export default Footer;