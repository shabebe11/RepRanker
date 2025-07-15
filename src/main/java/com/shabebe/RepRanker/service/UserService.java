package com.shabebe.RepRanker.service;

import com.shabebe.RepRanker.entity.User;
import com.shabebe.RepRanker.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired private UserRepository userRepository;

  public List<User> getUsersByLiftAndSexAndWeight(String lift, String sex, int actualWeight) {
    switch (lift) {
      case "bench":
        return userRepository.findTop10BySexAndWeightOrderByBenchDesc(sex, actualWeight);

      case "squat":
        return userRepository.findTop10BySexAndWeightOrderBySquatDesc(sex, actualWeight);

      case "deadlift":
        return userRepository.findTop10BySexAndWeightOrderByDeadliftDesc(sex, actualWeight);

      default:
        return new ArrayList<>();
    }
  }

  public List<User> getUsersByLiftAndSex(String lift, String sex) {
    switch (lift) {
      case "bench":
        return userRepository.findTop10BySexOrderByBenchDesc(sex);

      case "squat":
        return userRepository.findTop10BySexOrderBySquatDesc(sex);

      case "deadlift":
        return userRepository.findTop10BySexOrderByDeadliftDesc(sex);

      default:
        return new ArrayList<>();
    }
  }
}
