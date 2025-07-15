import React from 'react';
import StudentTable from './StudentTable';
import TeacherTable from './TeacherTable';

function PrincipalDashboard() {
  return (
    <div>
      <h3 style={{color:"white"}} className="h3 text-center mb-4">Principal Dashboard</h3>
      <StudentTable readonly />
      <TeacherTable readonly />
    </div>
  );
}

export default PrincipalDashboard;
