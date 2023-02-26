package com.song.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.model.Payment;
import com.song.repository.PaymentRepository;
import com.song.serviceInt.PaymentServiceInt;

@Service
public class PaymentService implements PaymentServiceInt {

	@Autowired
	private PaymentRepository paymentRepository;
	@Override
	public List<Payment> getAllDetails() {
		return paymentRepository.findAll();
	}
	@Override
	public Payment getById(String uid) {
		return paymentRepository.findById(uid).get();
	}
	@Override
	public boolean addPayment(Payment payment) {
		if(!paymentRepository.existsById(payment.getUid())) {
			paymentRepository.save(payment);
			return true;
		}
		return false;
		
	}
	@Override
	public boolean updatePayment(String uid,Payment payment) {
		if(paymentRepository.existsById(payment.getUid()) && payment.getUid().equalsIgnoreCase(uid)) {
			paymentRepository.save(payment);
			return true;
		}
		return false;
	}
	@Override
	public boolean deletePayment(String uid) {
		if(paymentRepository.existsById(uid)) {
			paymentRepository.deleteById(uid);
			return true;
		}
		return false;
	}
	
}
