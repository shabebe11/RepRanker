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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

  @GetMapping("/leaderboard")
  public ResponseEntity<?> getUsers(
      @RequestParam(required = false) String lift,
      @RequestParam(required = false) String sex,
      @RequestParam(required = false) String weight) {
    // validate required params
    if (lift == null || lift.trim().isEmpty()) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Lift is required");
    }
    if (sex == null || sex.trim().isEmpty()) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Sex is required");
    }

    if (weight != null && !weight.trim().isEmpty()) {
      int actualWeight = Integer.parseInt(weight.trim());
      List<User> list = userService.getUsersByLiftAndSexAndWeight(lift, sex, actualWeight);
      return ResponseEntity.ok(list);
    } else {
      List<User> list = userService.getUsersByLiftAndSex(lift, sex);
      return ResponseEntity.ok(list);
    }
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<String> deleteUser(@PathVariable String id) {
    try {
      Long userId = Long.parseLong(id);
      if (!userRepository.existsById(userId)) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
      }
      userRepository.deleteById(userId);
      return ResponseEntity.ok("Player successfully deleted");
    } catch (NumberFormatException e) {
      return ResponseEntity.badRequest().body("Invalid ID format");
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
    }
  }
}
