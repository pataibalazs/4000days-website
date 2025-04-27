const people = [
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl: "/balazs.png",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Dorseys",
    role: "Senior Developer",
    imageUrl: "/david.jpg",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="bg-[#073b3a] py-20 md:py-20 lg:py-20 m-10 rounded-2xl">
      <div className="mx-auto max-w-7xl gap-20 px-6 lg:px-8 justify-center flex-row">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-bold text-[#a3d9a5]">Team</h2>
          <p className="inline text-4xl font-semibold tracking-tight text-white mb-10">
            See who is behind this 4000Days.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:col-span-2 justify-center items-center text-center mt-10"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-3/2 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-6 text-lg/8 font-semibold text-[#a3d9a5]">
                {person.name}
              </h3>
              <p className="text-base/7 text-white">{person.role}</p>
              <p className="mt-4 text-base/7 text-white">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
