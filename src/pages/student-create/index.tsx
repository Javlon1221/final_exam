// src/pages/BlogCreate.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStudents } from "../../api/hooks/useStudent";

const BlogCreate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editData = location.state;

  const { createStudent, updateStudents } = useStudents();

  const [full_name, setFullName] = React.useState(editData?.full_name || "");
  const [profession, setProfession] = React.useState(editData?.profession || "");
  const [address, setAddress] = React.useState(editData?.address || "");
  const [gender, setGender] = React.useState(editData?.gender || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const student = { full_name, profession, address, gender };

    if (editData?.id) {
      updateStudents.mutate(
        { id: editData.id, data: student },
        { onSuccess: () => navigate("/") }
      );
    } else {
      createStudent.mutate(student, {
        onSuccess: () => {
          setFullName("");
          setProfession("");
          setAddress("");
          setGender("");
          navigate("/");
        },
      });
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold py-5">
        {editData ? "Update Student" : "Create Student"}
      </h2>
      <form
        className="flex flex-col max-w-[400px] gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-white p-2 rounded-md"
          type="text"
          placeholder="Full name"
          required
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="bg-white p-2 rounded-md"
          type="text"
          placeholder="Profession"
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <input
          className="bg-white p-2 rounded-md"
          type="text"
          placeholder="Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select
          className="bg-white p-2 rounded-md"
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" hidden>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit" className="bg-black text-white p-2 rounded-md">
          {editData ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default BlogCreate;
