import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            ASTA Hospitals is a renowned healthcare institution dedicated to providing world-class medical services with compassion and expertise. Established in 2000, ASTA Hospitals has been at the forefront of healthcare innovation, offering comprehensive medical care across multiple specialties.
          </p>
          <p>
            At ASTA Hospitals, we prioritize patient care above all else. Our team of highly skilled doctors, nurses, and support staff are committed to delivering personalized treatment plans tailored to each patient’s unique needs. Whether it's advanced surgeries, diagnostic services, or ongoing medical management, we strive for excellence in every aspect of healthcare delivery.
          </p>
         
          <p>
            Looking ahead, ASTA Hospitals remains dedicated to expanding our services, advancing medical research, and continuously improving patient care standards. We strive to be the healthcare provider of choice, trusted by patients and respected in the medical community.
          </p>
          <p>
            Experience the ASTA Hospitals difference today. Visit us at Visakhapatnam or explore our website to learn more about our services, medical specialties, and patient resources.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
