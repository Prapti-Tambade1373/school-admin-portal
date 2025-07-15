package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Model.Student;
import com.Service.StudentService;

@RestController   
@CrossOrigin( origins = "http://localhost:5173/")
@RequestMapping("/api/student")
public class StudentController {
      
	@Autowired
	private StudentService studentservice;
	
	@PostMapping("/insert/student")
	public Student addStudentDetails(@RequestBody Student student) {
		
		return studentservice.addStudent(student);
	}
	
	@GetMapping("/get/student")
	public List<Student> getAllStudentDetails() {
		return studentservice.getAllStudents();
	}
	
	
	@GetMapping("/student/{id}")
	public ResponseEntity<Student> getStudentDetails(@PathVariable long id) {
		Student student = studentservice.getStuentDetails(id).orElse(null);
		if(student !=null) {
			return ResponseEntity.ok().body(student);
		}
		return ResponseEntity.notFound().build();
	}
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Student> updateStudentDetails(@PathVariable long id,@RequestBody Student student) {
		
		Student updatedStudent = studentservice.updateUserDetails(id, student);
		if(updatedStudent !=null) {
			return ResponseEntity.ok(updatedStudent);
		}else{
			return ResponseEntity.notFound().build();
		}
	}
	
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String>  deleteStudent(@PathVariable Long id){
	
		studentservice.deleteStudent(id);
		return ResponseEntity.ok("Delete id " + id);
	}
}
