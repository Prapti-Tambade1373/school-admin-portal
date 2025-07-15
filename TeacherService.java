package com.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.Student;
import com.Model.Teacher;
import com.Repository.TeacherRepository;

@Service
public class TeacherService {
	
	@Autowired
	public TeacherRepository teacherRepo;
	
	public Teacher addTeacher(Teacher teacher) {
		
		return teacherRepo.save(teacher);
	}
	
	
	public List<Teacher> getAllTeacher(){
		
		return teacherRepo.findAll();
	}
	

	
	 public Optional<Teacher> getTeacherDeatiles(Long id){
		 return teacherRepo.findById(id);
	 }
	 
	 
	 
	 public Teacher updateTeacherDetails(Long id, Teacher newteacher) {
			Teacher teacherData =	teacherRepo.findById(id).orElse(null);
			if(teacherData !=null) {
			  return teacherRepo.save(newteacher);
			}else {
				 throw new RuntimeException("User not found with id : " +  id);
			}
	 }
	 
	 
	 
	 
	 public void deleteTeacher(Long id) {
			teacherRepo.deleteById(id);
			
		}
}

