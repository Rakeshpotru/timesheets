import React from 'react';
import { color, motion } from 'framer-motion'; // Install Framer Motion with 'npm install framer-motion'

export default function Home() {
  return (
    <div style={containerStyle}>
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={sectionStyle}
      >
        <h1 style={headingStyle}>Welcome to New MEK Software Solutions</h1>
        <p style={textStyle}>
          Over a period of 15 years, New MEK has been working with clients with a mission to deliver world-class, efficient, and optimized technology solutions to maximize customer satisfaction.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={sectionStyle}
      >
        {/* <img
          src=".\public\images\futuretechnology.jpg" // Replace with your actual image URL
          alt="Our Journey"
          style={imageStyle}
        /> */}
        <p style={textStyle}>
          Working across various domains like travel, media, education, and retail, we provide cutting-edge solutions tailored to client needs.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={sectionStyle}
      >
        <p style={textStyle}>
          New MEK specializes in web and mobile application development, system design, database technologies, and more.
        </p>

      </motion.div>

      {/* Section 4 */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={sectionStyle}
      >
        <h2 style={headingStyle}>Why Choose Us?</h2>
        <p style={textStyle}>
          With a team of top-notch professionals, New MEK delivers innovative solutions that guarantee client satisfaction and long-term value.
        </p>
      </motion.div>

      {/* Section 5 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={sectionStyle}
      >
        <p style={textStyle}>
          Discover how New MEK is transforming industries worldwide through its comprehensive technology solutions and services.
        </p>
      </motion.div>
      <div className='col-sm-12' style={{ display: 'flex', flexDirection: 'row' }}>

        {/* <div className='col-sm-4'>
          <motion.div>
            <img
              src=".\public\images\glb.webp" // Replace with your actual image URL
              alt="Global Impact"
              style={imageStyle}
            />
          </motion.div>

        </div> */}

        <div className='col-sm-6'>
          <motion.div>
            <img
              src=".\public\images\processor_1.avif" // Replace with your actual image URL
              alt="Technological Excellence"
              style={imageStyle}
            />
          </motion.div>
        </div>

        <div className='col-sm-6'>
          <motion.div>
            <img
              src=".\public\images\futuretechnology.jpg" // Replace with your actual image URL
              alt="Our Journey"
              style={imageStyle}
            />

          </motion.div>
        </div>
      </div>

    </div>
  );
}

// Styles
const containerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const sectionStyle = {
  marginBottom: '50px',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color:'black'
};

const textStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '20px',
  color:'black'
};

const imageStyle = {
  width: '60%',
  borderRadius: '10px',
  marginBottom: '10px',
};