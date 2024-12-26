import React from "react";

function About() {
  return (
    <div className="space-y-10 px-8">
      {/* Objectives Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-center text-4xl font-serif font-bold text-blue-300 underline mb-8">
          OBJECTIVES
        </h2>
        <ul className="list-none space-y-6 text-lg text-gray-300 font-light">
          {[
            "To foster a love for mathematics and promote enthusiasm and appreciation for mathematics through engaging activities and events.",
            "Encourage academic excellence by providing resources, workshops, and tutoring to help members excel in their mathematical studies.",
            "Promote collaborative learning by creating study groups and collaborative projects to enhance understanding and problem-solving skills.",
            "Encourage innovation and support members in pursuing mathematical research and presenting their findings.",
            "Provide a platform for discussion by offering a forum for members to discuss mathematical problems, theories, and applications.",
            "Facilitate competitions and organize challenges or encourage participation in mathematics competitions, Olympiads, and other problem-solving events.",
            "Enhance professional development and provide guidance on career opportunities in mathematics and related fields, including internships and job placements.",
            "Promote interdisciplinary collaboration and encourage integration of mathematics with other fields, such as physics, engineering, and economics.",
            "To accept any gifts, donations, or subscriptions to create and manage funds to further the Club's objectives.",
            "To borrow funds as needed, as decided by the Executive and Treasury Committees.",
            "To invest funds as deemed appropriate by the Treasury Committee.",
            "The ownership, management, and control of all Club assets shall vest with the Executive Trustees/Treasury of the Club.",
            "Create a supportive community where members can share their passion for mathematics and support one another.",
            "To carry out any acts, deeds, or initiatives incidental to achieving these objectives.",
          ].map((objective, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-blue-400 text-xl">✔️</span>
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Membership Details Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-center text-4xl font-serif font-bold text-blue-300 underline mb-8">
          MEMBERSHIP DETAILS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 font-light">
          {[
            {
              title: "Permanent Members",
              description:
                "Any member who agrees to the Club's memorandum, objectives, rules, and regulations, and is appointed as a member of the executive committee, holding office throughout their time at the University (until graduation).",
            },
            {
              title: "Exclusive Members",
              description:
                "Any member who aligns with the Club’s objectives and rules, appointed as a Convenor in a Category/Sub-Committee or a coordinator under the Core Committee's authority.",
            },
            {
              title: "Associate Members",
              description:
                "Any member committed to the Club's objectives and who subscribes to the Club’s website will be considered an Associate Member. Members of the previous categories are also regarded as Associate Members.",
            },
            {
              title: "Floating Members",
              description:
                "Members connected to the Club through online forums or social media platforms (WhatsApp, Facebook, LinkedIn, Twitter, etc.) who do not meet the previous criteria.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-blue-300 mb-4">
                {member.title}
              </h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
