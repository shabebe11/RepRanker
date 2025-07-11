package com.shabebe.RepRanker.controller;

import com.shabebe.RepRanker.dto.UserInputDto;
import com.shabebe.RepRanker.entity.User;
import com.shabebe.RepRanker.repository.UserRepository;
import com.shabebe.RepRanker.util.RanksMen;
import com.shabebe.RepRanker.util.RanksWomen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  @Autowired private UserRepository userRepository;

  private RanksMen ranksMen;
  private RanksWomen ranksWomen;

  @PostMapping("/submit")
  public ResponseEntity<User> submitUser(@RequestBody UserInputDto userInput) {

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

    if (userInput.getSex().toLowerCase().equals("male")) {
      String benchRank = ranksMen.classifyLift("bench", weight, userInput.getBench());
      String squatRank = ranksMen.classifyLift("squat", weight, userInput.getSquat());
      String deadliftRank = ranksMen.classifyLift("deadlift", weight, userInput.getDeadlift());
    } else {
      String benchRank = ranksWomen.classifyLift("bench", weight, userInput.getBench());
      String squatRank = ranksWomen.classifyLift("squat", weight, userInput.getSquat());
      String deadliftRank = ranksWomen.classifyLift("deadlift", weight, userInput.getDeadlift());
    }

    return new ResponseEntity<>(user, HttpStatus.CREATED);
  }
}
