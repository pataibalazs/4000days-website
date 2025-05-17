import React from "react";

const roadmapData = [
  {
    date: "2025-02",
    title: "Project Kickoff",
    description:
      "We lay the foundation, assemble the team, and set our vision in motion.",
  },
  {
    date: "2025-04",
    title: "MVP & Website Created, Refined",
    description:
      "Core features are built, our first website goes live for early exploration, and we polish the experience based on feedback to improve usability.",
  },
  {
    date: "2025-05",
    title: "Beta Launch",
    description:
      "A select group of users gets early access to help us shape the future.",
  },
  {
    date: "2025-06",
    title: "Iterate & Publish",
    description:
      "We refine the product based on feedback and prepare for a wider release.",
    upcoming: true,
  },
  {
    date: "Future!",
    title: "Mobile App Expansion",
    description:
      "Plans begin for dedicated iOS and Android apps to reach even more people.",
    upcoming: true,
  },
  {
    date: "Distant Future!",
    title: "Youtube, Instagram and Tiktok will go bankrupt because of us",
    description:
      "We are planning to make a fundraiser to Mark Zuckerberg and to BitMedia.",
    upcoming: true,
  },
];

const accentColor = "bg-[#a3d9a5]";

const Roadmap = () => (
  <section className="w-full flex flex-col items-center justify-center py-12 bg-white pb-24">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-base/7 font-bold text-[#a3d9a5]">Roadmap</h2>
      <p className="inline text-4xl font-semibold tracking-tight text-[#073b3a]">
        See what's ahead!
      </p>
      <p className="mt-6 text-lg/8 text-[#073b3a] text-inline mb-10 px-6">
        Imagine a future where technology empowers you to live more
        intentionally, connect deeply, and make every day count. Here’s how
        we’re building that future—step by step.
      </p>
    </div>
    <div className="relative flex flex-col md:flex-row md:items-start w-full max-w-3xl px-4 justify-center">
      {/* Vertical Line */}
      <div
        className={`hidden md:block absolute left-6 top-0 h-full w-1 rounded ${
          roadmapData.some((item) => item.upcoming)
            ? "bg-gray-300"
            : "bg-[#a3d9a5]"
        }`}
        aria-hidden="true"
      />
      <div className="flex flex-col w-full">
        {roadmapData.map((item, idx) => (
          <div
            key={idx}
            className="relative flex md:items-center mb-8 last:mb-0"
          >
            {/* Line dot */}
            <div className="hidden md:flex flex-col items-center mr-6">
              <span
                className={`w-4 h-4 rounded-full ${
                  item.upcoming ? "bg-gray-300" : accentColor
                } border-4 border-white shadow`}
              />
            </div>
            {/* Card */}
            <div
              className={`flex-1 rounded-xl shadow-md border-l-4 px-6 py-5 transition hover:shadow-lg ${
                item.upcoming
                  ? "bg-gray-100 border-gray-300"
                  : "bg-white border-[#a3d9a5]"
              }`}
            >
              <div
                className={`font-semibold text-sm mb-1 ${
                  item.upcoming ? "text-gray-400" : "text-[#a3d9a5]"
                }`}
              >
                {item.date}
              </div>
              <div
                className={`text-lg font-bold mb-2 ${
                  item.upcoming ? "text-gray-500" : "text-[#073b3a]"
                }`}
              >
                {item.title}
              </div>
              <div
                className={item.upcoming ? "text-gray-500" : "text-[#073b3a]"}
              >
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Roadmap;
