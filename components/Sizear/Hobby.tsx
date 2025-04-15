const Hobby = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-8 rounded-md shadow-sm">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 ">
        <h3 className="text-2xl md:text-2xl font-bold  pt-4 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Leisure Time Activities:
        </h3>

        <div>
          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            I prioritize spending quality time with my family to create
            meaningful moments. Outside of these moments, I enjoy{" "}
            <strong>reading</strong> a wide range of books, including
            autobiographies, travel literature, columns, and novels.
            Additionally, my profession allows me to <strong>travel</strong>{" "}
            both nationally and internationally, often with my family. As an
            Anthropology student, I am naturally inclined to{" "}
            <strong> observe people and their behaviors</strong> to gain a
            deeper understanding of life. <strong>Writing non-fiction</strong>{" "}
            is both my passion and a cherished hobby.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
