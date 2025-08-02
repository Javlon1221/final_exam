import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import maleImage from "../assets/male.png";
import femaleImage from "../assets/female.png";
import { useAppDispatch } from "../redux/hook";
import { addSaved } from "../redux/features/saved.slice";
import { useStudents } from "../api/hooks/useStudent";

interface StudentProps {
  id: string;
  full_name: string;
  profession: string;
  address: string;
  gender: string;
}

const StudentView = ({data}:{data: StudentProps[]} ) => {
  console.log(data);
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { deleteStudents } = useStudents();

  const handleSave = (student: StudentProps) => {
    dispatch(addSaved(student));
  };

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-4">
      {data?.map((student) => {
        const image = student.gender === "female" ? femaleImage : maleImage;
        return (
          <div
            key={student.id}
            className="p-4 bg-white rounded-xl border border-gray-200"
          >
            <div className="relative">
              <img
                className="size-40 object-cover mx-auto rounded-full"
                src={image}
                alt={student.gender}
              />
              <button
                onClick={() => handleSave(student) } // or removeSaved(student.id) qilish
                className="absolute top-2 right-2 cursor-pointer">
                <FaRegBookmark />
              </button>
            </div>
            <div className="text-center mt-4">
              <h3 className="font-bold text-xl">{student.full_name}</h3>
              <p className="my-2 text-gray-500">{student.profession}</p>
              <Link
                to={`/detail/${student.id}`}
                className="text-sm text-blue-500 hover:underline"
              >
                Show more
              </Link>
            </div>
            <div className="flex justify-around mt-2">
              <button
                onClick={() => deleteStudents.mutate(student.id)}
                className="text-red-500 border rounded px-2"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  navigate(`/student-create/${student.id}`, {
                    state: student,
                  })
                }
                className="text-green-700 border rounded px-2"
              >
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(StudentView);
