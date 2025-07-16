package com.shabebe.RepRanker;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
// OR use @ActiveProfiles("test")
class RepRankerApplicationTests {

  @Test
  void contextLoads() {}
}
