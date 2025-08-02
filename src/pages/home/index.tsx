import { useStudents } from "../../api/hooks/useStudent"
import StudentView from "../../components/StudentView"

const Home = () => {
  const {getStudents} = useStudents();
  const {data} = getStudents;

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold py-5">All Student</h2>
      <StudentView data={data}/>
    </div>
  )
}

export default Home