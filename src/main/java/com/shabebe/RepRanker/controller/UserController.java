package com.shabebe.RepRanker.controller;

import com.shabebe.RepRanker.dto.UserInputDto;
import com.shabebe.RepRanker.entity.User;
import com.shabebe.RepRanker.repository.UserRepository;
import com.shabebe.RepRanker.service.UserService;
import com.shabebe.RepRanker.util.LiftStandardsManager;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  @Autowired private UserRepository userRepository;
  @Autowired private UserService userService;

  @PostMapping("/submit")
  public ResponseEntity<?> submitUser(@RequestBody UserInputDto userInput) {

    // Error inputs
    if (userInput.getNickname() == null || userInput.getNickname().isEmpty()) {
      return new ResponseEntity<>("Name is required", HttpStatus.BAD_REQUEST);
    }

    if (userRepository.existsByName(userInput.getNickname())) {
      return new ResponseEntity<>("Nickname already exists", HttpStatus.CONFLICT);
    }

    if (userInput.getSex() == null || userInput.getSex().trim().isEmpty()) {
      return new ResponseEntity<>("Sex is required", HttpStatus.BAD_REQUEST);
    }

    if (userInput.getWeight() <= 0) {
      return new ResponseEntity<>("Bodyweight must be positive", HttpStatus.BAD_REQUEST);
    }

    if (userInput.getBench() < 0 || userInput.getSquat() < 0 || userInput.getDeadlift() < 0) {
      return new ResponseEntity<>("Lift values cannot be negative", HttpStatus.BAD_REQUEST);
    }

    int weight = Math.round(userInput.getWeight() / 5f) * 5;
    if ("female".equalsIgnoreCase(userInput.getSex())) {
      weight = Math.max(40, Math.min(140, weight));
    } else {
      weight = Math.max(50, Math.min(140, weight));
    }

    User user = new User();
    user.setName(userInput.getNickname());
    user.setSex(userInput.getSex());
    user.setWeight(weight);
    user.setBench(Math.round(userInput.getBench()));
    user.setSquat(Math.round(userInput.getSquat()));
    user.setDeadlift(Math.round(userInput.getDeadlift()));

    user.setBenchRank(
        LiftStandardsManager.classifyLift(
            user.getSex(), "bench", user.getWeight(), user.getBench()));

    user.setSquatRank(
        LiftStandardsManager.classifyLift(
            user.getSex(), "squat", user.getWeight(), user.getSquat()));

    user.setDeadliftRank(
        LiftStandardsManager.classifyLift(
            user.getSex(), "deadlift", user.getWeight(), user.getDeadlift()));

    userRepository.save(user);

    return new ResponseEntity<>(user, HttpStatus.CREATED);
  }

  @GetMapping
  public List<User> getPlayers(
      @RequestParam(required = false) String lift,
      @RequestParam(required = false) String sex,
      @RequestParam(required = false) String weight) {

    if (weight != null) {
      int actualWeight = Integer.parseInt(weight.trim());
      return userService.getUsersByLiftAndSexAndWeight(lift, sex, actualWeight);
    } else {
      return userService.getUsersByLiftAndSex(lift, sex);
    }
  }
}
