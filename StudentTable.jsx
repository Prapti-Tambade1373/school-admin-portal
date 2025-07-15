import axios from 'axios';
import { useEffect, useState } from 'react';

function StudentTable() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ 
    id: '',
    name: '',
    rollNo: '',
    studentClass: '',
    phoneNo: 0
  });
  const [editingId, setEditingId] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [searchedStudent, setSearchedStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:8082/api/student/get/student');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async () => {
    if (editingId === null) {
      await axios.post('http://localhost:8082/api/student/insert/student', form);
    } else {
      await axios.put(`http://localhost:8082/api/student/update/${editingId}`, form);
      setEditingId(null);
    }

    // Reset the form
    setForm({ id: '', name: '', rollNo: '', studentClass: '', phoneNo: 0 });
    fetchStudents();
  };

  const handleEdit = (student) => {
    setForm({
      id: student.id,
      name: student.name,
      rollNo: student.rollNo,
      studentClass: student.studentClass,
      phoneNo: student.phoneNo
    });
    setEditingId(student.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8082/api/student/delete/${id}`);
    fetchStudents();
  };

  const handleSearchById = async () => {
    try {
      const res = await axios.get(`http://localhost:8082/api/student/student/${searchId}`);
      setSearchedStudent(res.data);
    } catch {
      alert('Student not found');
      setSearchedStudent(null);
    }
  };

  return (
    <div className="card p-4 mb-5">
      <h4 style={{color:"white"}} className="h4">Student Management</h4>

      {/* Add / Update Form */}
      <div className="row mb-3">
        <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="form-control mb-2" placeholder="Roll No" value={form.rollNo} onChange={(e) => setForm({ ...form, rollNo: e.target.value })} />
        <input className="form-control mb-2" placeholder="Class" value={form.studentClass} onChange={(e) => setForm({ ...form, studentClass: e.target.value })} />
        <input className="form-control mb-2" placeholder="Phone" value={form.phoneNo} onChange={(e) => setForm({ ...form, phoneNo: e.target.value })} />
        <button className="btn btn-success" onClick={handleSubmit}>
          {editingId === null ? 'Add Student' : 'Update Student'}
        </button>
      </div>

      {/* Search By ID */}
      <div className="mb-4">
        <h5>Search Student by ID</h5>
        <div className="input-group w-50 mb-2">
          <input type="number" className="form-control" placeholder="Enter ID"
            value={searchId} onChange={(e) => setSearchId(e.target.value)} />
          <button className="btn btn-info" onClick={handleSearchById}>Search</button>
        </div>
        {searchedStudent && (
          <div className="alert alert-secondary">
            <strong>Student:</strong> {searchedStudent.name}, Roll No: {searchedStudent.rollNo}, Class: {searchedStudent.studentClass}, Phone: {searchedStudent.phoneNo}
          </div>
        )}
      </div>

      {/* Student Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Name</th><th>Roll No</th><th>Class</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
       <tbody>
  {students.map((s) => (
    <tr key={s.id}>
      <td>{s.id}</td>
      <td>{s.name}</td>
      <td>{s.rollNo}</td>
      <td>{s.studentClass ?? '-'}</td>
      <td>{s.phoneNo ?? '-'}</td>
      <td>
        <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(s)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(s.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default StudentTable;
