package com.shabebe.RepRanker.controller;

import com.shabebe.RepRanker.dto.UserInputDto;
import com.shabebe.RepRanker.entity.User;
import com.shabebe.RepRanker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  @Autowired private UserRepository userRepository;

  @PostMapping("/submit")
  public ResponseEntity<String> submitUser(@RequestBody UserInputDto userInput) {

    int weight = Math.round(userInput.getBodyweight() / 5f) * 5;

    User user = new User();
    user.setName(userInput.getName());
    user.setSex(userInput.getSex());
    user.setWeight(weight);
    user.setBench(userInput.getBench());
    user.setSquat(userInput.getSquat());
    user.setDeadlift(userInput.getDeadlift());

    float total = userInput.getBench() + userInput.getSquat() + userInput.getDeadlift();
    user.setTotal(total);

    userRepository.save(user);

    return ResponseEntity.ok("User submitted successfully.");
  }
}
