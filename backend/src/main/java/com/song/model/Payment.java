package com.song.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="payments")
public class Payment {
	@Id
	private String uid;
	private String displayName;
	private int amount;
	private String transactionId;
	private String planName;
	private String startDate;
	private String endDate;
		
	public Payment() {
		super();
	}
	public Payment(String uid, String displayName, int amount, String transactionId, String planName, String startDate,
			String enddate) {
		super();
		this.uid = uid;
		this.displayName = displayName;
		this.amount = amount;
		this.transactionId = transactionId;
		this.planName = planName;
		this.startDate = startDate;
		this.endDate = enddate;
	}
	public String getUid() {
		return uid;
	}
	public String getDisplayName() {
		return displayName;
	}
	public int getAmount() {
		return amount;
	}
	public String getTransactionId() {
		return transactionId;
	}
	public String getPlanName() {
		return planName;
	}
	public String getStartDate() {
		return startDate;
	}
	public String getEnddate() {
		return endDate;
	}
	@Override
	public String toString() {
		return "Payments [uid=" + uid + ", displayName=" + displayName + ", amount=" + amount + ", transactionId="
				+ transactionId + ", planName=" + planName + ", startDate=" + startDate + ", enddate=" + endDate + "]";
	}
	
	
}
