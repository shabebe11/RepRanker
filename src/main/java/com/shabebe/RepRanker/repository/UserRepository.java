package com.shabebe.RepRanker.repository;

import com.shabebe.RepRanker.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  // These methods/queries are automatically done by JPA and found in the mySQL database?

  // Seperating the user profiles based on what the user inputs
  List<User> findBySex(String sex);

  List<User> findByWeight(int weightRange);

  List<User> findByAge(int ageRange);

  List<User> findBySexAndWeight(String sex, int weightRange);

  List<User> findBySexAndAge(String sex, int ageRange);

  List<User> findByAgeAndWeight(int ageRange, int weightRange);

  List<User> findBySexAgeAndWeight(String sex, int ageRange, int weightRange);

  // Getting the top 5 or 10 by ordering their stats
  List<User> findAllByOrderByBench();

  List<User> findAllByOrderBySquat();

  List<User> findAllByOrderByDeadlift();

  List<User> findAllByOrderByTotal();
}
