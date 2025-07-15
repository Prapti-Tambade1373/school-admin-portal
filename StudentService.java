package com.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.Student;
import com.Repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	public StudentRepository studentRepo;
	
	
	public Student addStudent(Student student) {
	    return studentRepo.save(student);
	 
   }
	
	
	 public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }
	 
	 
	 public Optional<Student> getStuentDetails(Long id) {
			
			return studentRepo.findById(id);
		}
	 
	 
	 public Student updateUserDetails(Long id, Student newstudent) {
			Student studentData =	studentRepo.findById(id).orElse(null);
			if(studentData !=null) {
			  return studentRepo.save(newstudent);
			}else {
				 throw new RuntimeException("User not found with id : " +  id);
			}
	 }
	 
	 
	 
	 public void deleteStudent(Long id) {
			studentRepo.deleteById(id);
			
		}
	 
}
