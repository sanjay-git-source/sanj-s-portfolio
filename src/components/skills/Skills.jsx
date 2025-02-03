import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="row text-center">
      <h2>My Skills</h2>
        {/* C */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/c.png" // Add your image for C
              alt="C"
              className="skill-img mb-3"
            />
            <p>C</p>
          </motion.div>
        </div>

        {/* C++ */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/cpp.png" // Add your image for C++
              alt="C++"
              className="skill-img mb-3"
            />
            <p>C++</p>
          </motion.div>
        </div>

        {/* Python */}
        {/* <div className="col-md-3 mb-4">
          <motion.div
            className="skill-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/python-logo.png" // Add your image for Python
              alt="Python"
              className="skill-img mb-3"
            />
            <p>Python</p>
          </motion.div>
        </div> */}

        {/* Java */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/java.png" // Add your image for Java
              alt="Java"
              className="skill-img mb-3"
            />
            <p>Java</p>
          </motion.div>
        </div>

        {/* HTML */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/html.png" // Add your image for HTML
              alt="HTML"
              className="skill-img mb-3"
            />
            <p>HTML</p>
          </motion.div>
        </div>

        {/* CSS */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/css.png" // Add your image for CSS
              alt="CSS"
              className="skill-img mb-3"
            />
            <p>CSS</p>
          </motion.div>
        </div>

        {/* JavaScript */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/js.png" // Add your image for JavaScript
              alt="JavaScript"
              className="skill-img mb-3"
            />
            <p>JavaScript</p>
          </motion.div>
        </div>

        {/* PHP */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/php.png" // Add your image for PHP
              alt="PHP"
              className="skill-img mb-3"
            />
            <p>PHP</p>
          </motion.div>
        </div>

        {/* SQL Server */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/mssql.png" // Add your image for SQL Server
              alt="SQL Server"
              className="skill-img mb-3"
            />
            <p>SQL Server</p>
          </motion.div>
        </div>

        {/* MySQL */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/mysql.png" // Add your image for MySQL
              alt="MySQL"
              className="skill-img mb-3"
            />
            <p>MySQL</p>
          </motion.div>
        </div>

        {/* Arduino IDE */}
        {/* 
           <div className="col-md-3 mb-4">
          <motion.div
            className="skill-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/arduino-logo.png" // Add your image for Arduino IDE
              alt="Arduino IDE"
              className="skill-img mb-3"
            />
            <p>Arduino IDE</p>
          </motion.div>
        </div>
 */}
        {/* Laravel */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/laravel.png" // Add your image for Laravel
              alt="Laravel"
              className="skill-img mb-3"
            />
            <p>Laravel</p>
          </motion.div>
        </div>

        {/* React JS */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/react.png" // Add your image for React
              alt="React JS"
              className="skill-img mb-3"
            />
            <p>React JS</p>
          </motion.div>
        </div>

        {/* Spring Boot */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="src/assets/springboot.png" // Add your image for Spring Boot
              alt="Spring Boot"
              className="skill-img mb-3"
            />
            <p>Spring Boot</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
