import CareerAndScholarship from "./CareerAndScholarship";
import PublicHealth from "./PublicHealth";

const NewspaperColumns = () => {
  return (
    <div className=" ">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 my-16 ">
        {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Newspaper Columns
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2> */}

        <h3 className="text-2xl md:text-2xl font-bold  pt-8 pb-4 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Writring World
        </h3>

        <p>
          Beyond academic publications, I regularly contribute columns and
          opinion pieces to newspapers and various platforms, addressing
          critical public health and social issues.
        </p>

        <p className="mt-4">
          As a passionate traveler, I have also documented my journeys and
          published a collection of travel essays in book form. My work spans
          the following categories:
        </p>

        <h3 className="text-2xl md:text-2xl font-bold  pt-16 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Newspaper Columns
        </h3>

        <PublicHealth />

        <CareerAndScholarship />
      </div>
    </div>
  );
};

export default NewspaperColumns;
