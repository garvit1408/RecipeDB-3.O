import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-heading">Contact Us</div>
        <div className="contact-content">
          <div className="contact-info">
            <p><strong>Prof. Ganesh Bagler</strong></p>
            <p>
              <a href="https://ccb.iiitd.ac.in/" target="_blank" rel="noopener noreferrer">
                Center for Computational Biology
              </a><br />
              Indraprastha Institute of Information Technology Delhi (IIIT Delhi)<br />
              R&D Block,<br />
              Okhla Phase III, Near Govindpuri Metro Station<br />
              New Delhi, India 110020
            </p>
            <p><strong>Email:</strong> <a href="mailto:bagler+RecipeDB@iiitd.ac.in">bagler+RecipeDB@iiitd.ac.in</a></p>
            <p><strong>Tel:</strong> +91-11-26907-443 (Work)</p>
          </div>
          <div className="contact-map">
            <iframe
              title="IIIT Delhi Map"
              src="https://maps.google.com/maps?q=IIIT-Delhi%20R&D%20Building&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
