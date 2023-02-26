package com.song.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.song.model.Payment;
import com.song.service.PaymentService;

@RestController
@RequestMapping("/payments")
public class PaymentController {
	
	@Autowired
	private PaymentService paymentService;
	
	@GetMapping("/")
	public String index() {
		return "Welcome to REST API for Payments";
	}
	
	@GetMapping("/allpaymentsdetails")
	public List<Payment> getAllDetails(){
		return paymentService.getAllDetails();
	}
	
	@GetMapping("/{uid}")
	public Payment getPayment(@PathVariable String uid) {
		return paymentService.getById(uid);
	}
	
	@PostMapping("/addpayment")
	public String addPayment(@RequestBody Payment payment) {
		boolean flag = paymentService.addPayment(payment);
		if(flag)
			return "Payment Successfull";
		return "Payment UnSuccessfull";
	}
	
	@PutMapping("/updatepayment/{uid}")
	public String updatePayment(@PathVariable String uid,@RequestBody Payment payment) {
		boolean flag = paymentService.updatePayment(uid,payment);
		if(flag)
			return "Payment Update Successfull";
		return "Payment Update UnSuccessfull";
	}
	
	@DeleteMapping("/deletepayment/{uid}")
	public String deletePayment(@PathVariable String uid) {
		boolean flag = paymentService.deletePayment(uid);
		if(flag)
			return "Payment Delete Successfull";
		return "Payment Delet UnSuccessfull";
	}
}
