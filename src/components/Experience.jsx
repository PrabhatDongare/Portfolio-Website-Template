// import React from 'react'
import { BsCalendar4Range } from "react-icons/bs";

const Experience = () => {
  return (
    <div id="experience" className="mt-6 md:pt-14">
      <h1 className="mb-8 text-center text-4xl font-bold md:mb-20">
        EXPERIENCE
      </h1>
      <div className="flex flex-wrap justify-center gap-10 md:gap-28">
        {/* Experience 1 */}
        <div className="rounded-2xl border-8 border-green-500 py-7 shadow-2xl shadow-teal-700 md:w-5/12">
          <div className="flex items-center gap-5 px-10 md:gap-10">
            <img
              className="h-12 rounded-full md:h-20"
              src="https://media.licdn.com/dms/image/v2/D4D0BAQG98r5tfwuSUQ/company-logo_200_200/company-logo_200_200/0/1715086078932/ungray_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=fEfTHI9qaNR6p-40H1-WV4rjh17g7XlS8AAvAb8ELMM"
              alt=""
            />
            <p className="text-xl font-semibold md:text-3xl">
              Ungray Technologies
            </p>
          </div>
          <p className="px-10 py-3 md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            distinctio aliquam error itaque accusantium suscipit repellat illum
            iusto, nulla numquam recusandae. Ex eum at architecto ratione
            perspiciatis fugiat saepe fuga repellendus, ipsum aspernatur natus
            minima, placeat hic officia mollitia eaque!
          </p>
          <div className="flex items-center justify-end gap-7 px-10">
            <span className="md:text-xl">May 2025 - Jun 2027</span>
            <BsCalendar4Range className="text-2xl md:text-4xl" />
          </div>
        </div>
        {/* Experience 2 */}
        <div className="rounded-2xl border-8 border-green-500 py-7 shadow-2xl shadow-teal-700 md:w-5/12">
          <div className="flex items-center gap-5 px-10 md:gap-10">
            <img
              className="h-12 rounded-full md:h-20"
              src="https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png"
              alt=""
            />
            <p className="text-xl font-semibold md:text-3xl">Pune University</p>
          </div>
          <p className="px-10 py-3 md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            distinctio aliquam error itaque accusantium suscipit repellat illum
            iusto, nulla numquam recusandae. Ex eum at architecto ratione
            perspiciatis fugiat saepe fuga repellendus, ipsum aspernatur natus
            minima, placeat hic officia mollitia eaque!
          </p>
          <div className="flex items-center justify-end gap-7 px-10">
            <span className="md:text-xl">May 2025 - Jun 2027</span>
            <BsCalendar4Range className="text-2xl md:text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
