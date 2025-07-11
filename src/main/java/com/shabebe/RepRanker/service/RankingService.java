package com.shabebe.RepRanker.service;

import com.shabebe.RepRanker.entity.User;
import com.shabebe.RepRanker.repository.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RankingService {

  @Autowired private UserRepository userRepository;

  // Getting a list of the top stats based on everyone
  public List<User> getTopBench() {
    return userRepository.findAllByOrderByBench(); // Spring handles this
  }

  public List<User> getTopSquatter() {
    return userRepository.findAllByOrderBySquat(); // Spring handles this
  }

  public List<User> getTopDeadlift() {
    return userRepository.findAllByOrderByDeadlift(); // Spring handles this
  }

  public List<User> getTopBenchPressers() {
    return userRepository.findAllByOrderByTotal(); // Spring handles this
  }

  // Getting a list of the top stats based on specific demographics ... will do later after testing
  // the above
}
