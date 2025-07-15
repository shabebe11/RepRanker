package com.shabebe.RepRanker.repository;

import com.shabebe.RepRanker.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  boolean existsByName(String name);

  List<User> findTop10BySexOrderByBenchDesc(String sex);

  List<User> findTop10BySexOrderBySquatDesc(String sex);

  List<User> findTop10BySexOrderByDeadliftDesc(String sex);

  List<User> findTop10BySexAndWeightOrderByBenchDesc(String sex, int weight);

  List<User> findTop10BySexAndWeightOrderBySquatDesc(String sex, int weight);

  List<User> findTop10BySexAndWeightOrderByDeadliftDesc(String sex, int weight);
}
