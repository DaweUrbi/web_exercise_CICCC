/*
Implement solutions to the following questions/problems by writing functions for each one:
Instruction
Implement a function biggestFollower() which returns the name of the individual who follows the most people.
Instruction
Implement mostPopular() which returns the name of the most popular (most followed) individual.
Instruction
Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.
Instruction
Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.
Instruction
Implement some or all these remaining functions.
Identify who has the most followers over 30
Identify who follows the most people over 30
List everyone and their reach (sum of # of followers and # of followers of followers)
Tips
You are encouraged to create some additional functions in order to avoid having very large functions that try to do everything. That said, be sure to name them well. All this may sound familiar - that's because it was covered recently as part of our Function Best Practices.
 */

const data = {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
  };

  const biggestFollower = (socialData) => {
    let biggestFollowerPerson = Object.keys(socialData)[0];
    biggestFollowerPerson;
    for (let user in socialData) {
      const follows = socialData[user].follows.length;
      if (follows > socialData[biggestFollowerPerson].follows.length) {
        biggestFollowerPerson = user;
      }
    }
    return socialData[biggestFollowerPerson].name;
  };
  
  // console.log(biggestFollower(data));
  
  const mostPopular = (socialData) => {
    //loop through every follows array
  
    const userArray = Object.keys(socialData);
    const followersCounter = {};
    userArray.forEach((id) => {
      socialData[id].follows.forEach((follow) => {
        if (followersCounter[follow]) {
          followersCounter[follow]++;
        } else {
          followersCounter[follow] = 1;
        }
      });
    });
    let mostPopularUser = Object.keys(followersCounter)[0];
    for (let follower in followersCounter) {
      console.log(followersCounter[follower]);
      if (followersCounter[follower] >= followersCounter[mostPopularUser]) {
        mostPopularUser = follower;
      }
    }
    return socialData[mostPopularUser].name;
    /* followersCounter = {
      f01: 0,
      f02: 0....
    }
    */
  };
  
  console.log(mostPopular(data));
  
  const printAll = (socialData) => {};
  
  // console.log(printAll(data));
  
  const unrequitedFollowers = (socialData) => {};
  
  // console.log(unrequitedFollowers(data));