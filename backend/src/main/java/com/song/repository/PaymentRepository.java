package com.song.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.song.model.Payment;
@Repository
public interface PaymentRepository extends JpaRepository<Payment, String> {

}
