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

import com.Model.Teacher;
import com.Service.TeacherService;

@RestController
@CrossOrigin( origins = "http://localhost:5173/")
@RequestMapping("/api/teacher")
public class TeacherController {
     
	@Autowired
	public TeacherService teacherservice;
	
	@PostMapping("/insert/teacher")
	public Teacher addTeacherDetails(@RequestBody Teacher teacher) {
		
		return teacherservice.addTeacher(teacher);
	}
	
	@GetMapping("/get/teacher")
	public List<Teacher> getAllTeacherDetails() {
		return teacherservice.getAllTeacher();
	}
	
	@GetMapping("/teacher/{id}")
	public ResponseEntity<Teacher> getTeacherDetails(@PathVariable long id) {
		Teacher teacher = teacherservice.getTeacherDeatiles(id).orElse(null);
		if(teacher !=null) {
			return ResponseEntity.ok().body(teacher);
		}
		return ResponseEntity.notFound().build();
	}
	
	
	@PutMapping("/update/teacher/{id}")
	public ResponseEntity<Teacher> updateTeacherDetails(@PathVariable long id,@RequestBody Teacher teacher) {
		
		Teacher updatedTeacher = teacherservice.updateTeacherDetails(id,teacher);
		if(updatedTeacher !=null) {
			return ResponseEntity.ok(updatedTeacher);
		}else{
			return ResponseEntity.notFound().build();
		}
	}
	
	
	
	@DeleteMapping("/delete/teacher/{id}")
	public ResponseEntity<String>  deleteTeacher(@PathVariable Long id){
	
		teacherservice.deleteTeacher(id);;
		return ResponseEntity.ok("Delete id " + id);
	}
	
}
