package com.devsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sale;

// Repository is the part of system responsible for accessing database 
// - search, create, update and delete a sale data
public interface SaleRepository extends JpaRepository<Sale, Long> {
	// Methods
	
}
