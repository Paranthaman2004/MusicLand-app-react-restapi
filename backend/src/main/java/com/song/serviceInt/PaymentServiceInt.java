package com.song.serviceInt;

import java.util.List;

import com.song.model.Payment;

public interface PaymentServiceInt {
	public List<Payment> getAllDetails();
	public Payment getById(String uid);
	public boolean addPayment(Payment payment);
	public boolean updatePayment(String uid,Payment payment);
	public boolean deletePayment(String uid);
}
