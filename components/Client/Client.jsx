import React from "react";
import style from "./Client.module.css";
const Client = () => {
  return (
    <div className={style.container}>
      <div className={style.heading} data-aos="fade-left" data-aos-delay="100">
        <h3>Who we serve?</h3>
        <p>
          Syscomatic is software development as a service (SDass) Platform with
          a business
        </p>
      </div>
      <ul>
        <li data-aos="fade-right" data-aos-delay="200">
          <img src="Images/Client/e-commerce.png" alt="" />
          <h4>E-Commerce</h4>
          <p>
            Digitalize your offline business for better services and to scale.
          </p>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <img src="Images/Client/fintech.png" alt="" />
          <h4>Fintech</h4>
          <p>
            Technological advances can enhance financial processes and
            operations.
          </p>
        </li>
        <li data-aos="fade-left" data-aos-delay="400">
          <img src="Images/Client/retail.png" alt="" />
          <h4>Retail</h4>
          <p>
            Make buying and selling easier by a much improved system with the
            help of technology .
          </p>
        </li>
        <li data-aos="fade-right" data-aos-delay="500">
          <img src="Images/Client/education.png" alt="" />
          <h4>Education</h4>
          <p>
            Technology made education accessible to everyone in the 20th
            century.
          </p>
        </li>
        <li data-aos="fade-up" data-aos-delay="600">
          <img src="Images/Client/healthcare.png" alt="" />
          <h4>Healthcare</h4>
          <p>
            Keeping a healthy lifestyle is made easier by tech-enabled products.
          </p>
        </li>
        <li data-aos="fade-left" data-aos-delay="700">
          <img src="Images/Client/automotive.png" alt="" />
          <h4>Automotive</h4>
          <p>
            Providing your consumers with the best vehicles, manufacturers, and
            a complete new experience by leveraging technology
          </p>
        </li>
        <li data-aos="fade-right" data-aos-delay="800">
          <img src="Images/Client/agriculture.png" alt="" />
          <h4>Agriculture</h4>
          <p>
            Through the use of technology, modern farming can be easier than
            monolithic farming.
          </p>
        </li>
        <li data-aos="fade-up" data-aos-delay="900">
          <img src="Images/Client/energy.png" alt="" />
          <h4>Energy</h4>
          <p>
            Give your people energy management and consumption solutions to
            improve their lives.
          </p>
        </li>
        <li data-aos="fade-left" data-aos-delay="1000">
          <img src="Images/Client/logistics.png" alt="" />
          <h4>Logistics</h4>
          <p>
            Organize, monitor, and track all your organization&#39;s and
            user&#39;s information.
          </p>
        </li>
        <li data-aos="fade-right" data-aos-delay="1100">
          <img src="Images/Client/media.png" alt="" />
          <h4>Media and Entertainment</h4>
          <p>
            keeping your users up to date with the latest trends and interests.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Client;
