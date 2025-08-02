import React from "react";
import { useParams } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import maleImage from "../../assets/male.png";
import femaleImage from "../../assets/female.png";
import { useStudents } from "../../api/hooks/useStudent";
import { useAppDispatch } from "../../redux/hook";
import { addSaved } from "../../redux/features/saved.slice";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { getStudents } = useStudents();
  const students = getStudents.data || [];

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="text-center text-red-500 mt-10">
        Student not found!
      </div>
    );
  }

  const image = student.gender === "female" ? femaleImage : maleImage;

  const handleSave = () => {
    dispatch(addSaved(student));
  };

  return (
    <div className="container mx-auto py-6">
      <div className="p-6 bg-white rounded-2xl flex gap-6 relative">
        <div>
          <img
            src={image}
            alt={student.gender}
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{student.full_name}</h2>
          <p className="text-gray-500 my-2">{student.profession}</p>
          <p>{student.address}</p>
        </div>
        <button
          onClick={handleSave}
          className="absolute top-6 right-6 cursor-pointer"
        >
          <FaRegBookmark />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Detail);
