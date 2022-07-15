package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

// Service is related with the business model
// In this case, related with sales - search for sales data at database
@Service
public class SaleService {
	// Attributes
	@Autowired
	private SaleRepository repository;
	
	// Methods
	public List<Sale> findSales() {
		return repository.findAll();
	}

}
