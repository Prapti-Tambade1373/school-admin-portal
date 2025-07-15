import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeacherTable() {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({ name: '', phoneNo: '', emailId: '', subject: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [searchedTeacher, setSearchedTeacher] = useState(null);

  const fetchTeachers = async () => {
    const res = await axios.get('http://localhost:8082/api/teacher/get/teacher');
    setTeachers(res.data);
  };

  useEffect(() => { fetchTeachers(); }, []);

  const handleSubmit = async () => {
    if (editingId === null) {
      await axios.post('http://localhost:8082/api/teacher/insert/teacher', form);
    } else {
      await axios.put(`http://localhost:8082/api/teacher/update/teacher/${editingId}`, form);
      setEditingId(null);
    }
    setForm({ name: '', phone: '', email: '', subject: '' });
    fetchTeachers();
  };

  const handleEdit = (teacher) => {
    setForm({
      name: teacher.name,
      phone: teacher.phoneNo,
      email: teacher.emailId,
      subject: teacher.subject
    });
    setEditingId(teacher.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8082/api/teacher/delete/teacher/${id}`);
    fetchTeachers();
  };

  const handleSearchById = async () => {
    try {
      const res = await axios.get(`http://localhost:8082/api/teacher/teacher/${searchId}`);
      setSearchedTeacher(res.data);
    } catch {
      alert('Teacher not found');
      setSearchedTeacher(null);
    }
  };

  return (
    <div className="card p-4 mb-5">
      <h4 style={{color:"white"}} className="h4">Teacher Management</h4>

      {/* Add / Update Form */}
      <div className="row mb-3">
        <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="form-control mb-2" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className="form-control mb-2" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="form-control mb-2" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
        <button className="btn btn-success" onClick={handleSubmit}>
          {editingId === null ? 'Add Teacher' : 'Update Teacher'}
        </button>
      </div>

      {/* Search By ID */}
      <div className="mb-4">
        <h5>Search Teacher by ID</h5>
        <div className="input-group w-50 mb-2">
          <input type="number" className="form-control" placeholder="Enter ID"
            value={searchId} onChange={(e) => setSearchId(e.target.value)} />
          <button className="btn btn-info" onClick={handleSearchById}>Search</button>
        </div>
        {searchedTeacher && (
          <div className="alert alert-secondary">
            <strong>Teacher:</strong> {searchedTeacher.name}, Phone: {searchedTeacher.phone}, Email: {searchedTeacher.email}, Subject: {searchedTeacher.subject}
          </div>
        )}
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>Subject</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.name}</td>
              <td>{t.phoneNo}</td>
              <td>{t.emailId}</td>
              <td>{t.subject}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(t)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherTable;
