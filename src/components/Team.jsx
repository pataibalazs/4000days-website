const people = [
  {
    name: "Balázs Patai",
    role: "Founder / Developer",
    imageUrl: "/balazs.png",
    bio: "I built a YouTube channel with 100,000 subscribers over a few years, and after obtaining my degree in Computer Science, I started working in the fields of Big Data and AI as a Java and Python developer.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dávid Rudner",
    role: "Co-Founder / Business Developer Expert",
    imageUrl: "/david.jpg",
    bio: "I work as a Business Development Expert at Hungary’s leading bank, and alongside my role in the corporate world, I lead a student organization called 21days that helps young people grow through hands-on projects and personal development programs.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="py-10 md:py-14 lg:py-14 m-10 rounded-2xl xl:max-w-6xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl xs:max-w-md xs:max-w-sm max-w-80 sm:max-w-lg flex justify-center items-center mx-auto bg-[#073b3a]">
      <div className="mx-auto max-w-7xl gap-20 px-6 lg:px-8 flex flex-col items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-bold text-[#a3d9a5]">Team</h2>
          <p className="inline text-4xl font-semibold tracking-tight text-white xl:mb-6">
            See who is behind 4000Days.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-4xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-2 justify-items-center text-center"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col items-center">
              <img
                alt=""
                src={person.imageUrl}
                className="border-4 border-[#a3d9a5] aspect-3/2 w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mt-6 text-lg/8 font-semibold text-[#a3d9a5]">
                {person.name}
              </h3>
              <p className="text-base/7 text-white">{person.role}</p>
              <p className="mt-4 text-base/7 text-white text-left">
                {person.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
