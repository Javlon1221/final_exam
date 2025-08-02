import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { allRemoveSaved } from "../../redux/features/saved.slice";
import StudentView from "../../components/StudentView";

const Saved = () => {
  const dispatch = useAppDispatch();
  const savedStudents = useAppSelector((state) => state.savedSlice.items);
  console.log(savedStudents);
  
  if (savedStudents.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No saved students.
      </p>
    );
  }

  return (
    <>
    <div>

    </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Saved Students</h2>
        <button
          onClick={() => dispatch(allRemoveSaved())}
          className="text-red-500 border border-red-500 rounded px-3 py-1 hover:bg-red-100"
        >
          Remove All
        </button>
      </div>
      <StudentView data={savedStudents} />
    </>
  );
};

export default Saved;
