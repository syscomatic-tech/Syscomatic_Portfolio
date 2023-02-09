import Image from "next/image";
import React from "react";
import style from "../Values/Values.module.css";
import engineer from "/public/Images/Why us/engineer.png";
import develop from "/public/Images/Why us/develop.png";
import success from "/public/Images/Why us/success.png";
import focus from "/public/Images/Why us/focus.png";
import run from "/public/Images/Why us/run.png";
import training from "/public/Images/Why us/training.png";
const Values = () => {
  const specialist = [
    {
      _id: 1,
      icon: engineer,
      tittle: "Engineering with a passion",
      description:
        "We're a network of innovators. We devise bold solutions to the most intricate client challenges. We can explore new technologies to design best-fit solutions that have 96% of our clients ready to recommend us.",
    },
    {
      _id: 2,
      icon: success,
      tittle: "Dedication to Success",
      description:
        "Our innovations help clients stay ahead. We consider your immediate and long-term needs. For our clients, their customers, and the communities they influence.",
    },
    {
      _id: 3,
      icon: develop,
      tittle: "Develop Future-Proof Application",
      description:
        "Our team can design the optimal software for your contemporary and predictable needs using the cloud, microservices, containerization, etc.",
    },
    {
      _id: 4,
      icon: focus,
      tittle: "Performance with Focus",
      description:
        "We'll assist. We won't finish a project until you're satisfied. We're a 97%-satisfied tech partner.",
    },
    {
      _id: 7,
      icon: run,
      tittle: "Accelerate Time-to-Market",
      description:
        "We can engineer your project with an agile framework that ensures faster results, scalability, and stability.",
    },
    {
      _id: 8,
      icon: training,
      tittle: "Reduce OpEx",
      description:
        "Our expertise can construct customised software end-to-end including design, technology choices, architecture, and operations to scale capacity as needed.",
    },
  ];
  return (
    <div className={`!mt-24 ${style.container}`}>
      <div className={style.heading}>
        <h3>Why Us?</h3>
        <p>
          Syscomatic is software development as a service (SDass) Platform with
          a business
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12">
        {specialist.map(({ icon, tittle, description, _id }) => (
          <div
            className="flex flex-col lg:flex-row items-center justifiy-between"
            data-aos="fade-right"
            key={_id}
          >
            <div className="lg:w-[30%] my-6 lg:my-0 ">
              <Image src={icon} alt="" width={60} height={60} />
            </div>
            <div className="lg:w-[70%]">
              <h3 className="text-3xl text-white font-semibold">{tittle}</h3>
              <p className="text-sm mt-4">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
