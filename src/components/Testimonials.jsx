import React from "react";

const testimonials = [
  {
    comment:
      "😡😡😡 0 Stars. Hate it, would not recommend. GIVE ME BACK MY USERS!",
    name: "- Instagram",
    stars: 0,
    logo: (
      <svg
        className="inline w-6 h-6 ml-2 align-middle"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="6" fill="#E1306C" />
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="17" cy="7" r="1.2" fill="#fff" />
      </svg>
    ),
  },
  {
    comment:
      "😠 Your app is ruining our watch time stats! Please stop encouraging healthy habits.",
    name: "- YouTube",
    stars: 2,
    logo: (
      <svg
        className="inline w-6 h-6 ml-2 align-middle"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="6" fill="#FF0000" />
        <polygon points="10,8 16,12 10,16" fill="#fff" />
      </svg>
    ),
  },
  {
    comment:
      "😤 People are logging off and touching grass because of you. This is unacceptable!",
    name: "- Facebook",
    stars: 1,
    logo: (
      <svg
        className="inline w-6 h-6 ml-2 align-middle"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="6" fill="#1877F3" />
        <path
          d="M15.5 8.5h-2V7.5c0-.4.3-.5.5-.5h1.5V5h-2c-1.7 0-2.5 1.3-2.5 2.5V8.5h-1.5V11h1.5v6h2.5v-6h1.7l.3-2.5z"
          fill="#fff"
        />
      </svg>
    ),
  },
];

const starColor = "text-[#a3d9a5]";
const boxBg = "bg-white";
const boxBorder = "border-[#a3d9a5]";
const nameColor = "text-[#073b3a]";
const commentColor = "text-[#073b3a]";

const UsersSaid = () => (
  <section className="w-full flex flex-col items-center justify-center py-16 bg-white mb-20">
    <div className="mx-auto max-w-2xl text-center mb-10">
      <h2 className="text-base font-bold text-[#a3d9a5]">
        Companies told about us
      </h2>
      <p className="text-3xl font-semibold tracking-tight text-[#073b3a] mt-2">
        What companies are saying
      </p>
    </div>
    <div className="flex flex-col gap-8 md:flex-row md:gap-6 w-full max-w-6xl px-6 sm:px-4">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center rounded-xl border-4 ${boxBorder} ${boxBg} px-6 py-8 flex-1 w-full max-w-sm mx-auto transition-all duration-200 shadow-md hover:shadow-2xl hover:scale-105 hover:border-[#073b3a]`}
          style={{ minHeight: "220px" }}
        >
          {/* Stars */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${starColor}`}
                fill={i < t.stars ? "#a3d9a5" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polygon
                  strokeLinejoin="round"
                  points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"
                />
              </svg>
            ))}
          </div>
          <p className={`mb-4 text-center text-lg ${commentColor} flex-1`}>
            {t.comment}
          </p>
          <div
            className={`font-bold mt-2 ${nameColor} text-xl text-center w-full flex items-center justify-center`}
          >
            <span>{t.name}</span>
            {t.logo}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default UsersSaid;
