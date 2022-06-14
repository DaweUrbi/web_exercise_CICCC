const usersData = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
          lat: '29.4572',
          lng: '-164.2990',
        },
      },
      phone: '493-170-9623 x156',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        geo: {
          lat: '-31.8129',
          lng: '62.5342',
        },
      },
      phone: '(254)954-1289',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        geo: {
          lat: '-71.4197',
          lng: '71.7478',
        },
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      address: {
        street: 'Rex Trail',
        city: 'Howemouth',
        zipcode: '58804-1099',
        geo: {
          lat: '24.8918',
          lng: '21.8984',
        },
      },
      phone: '210.067.6132',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      address: {
        street: 'Ellsworth Summit',
        suite: 'Suite 729',
        city: 'Aliyaview',
        zipcode: '45169',
        geo: {
          lat: '-14.3990',
          lng: '-120.7677',
        },
      },
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      address: {
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        geo: {
          lat: '24.6463',
          lng: '-168.8889',
        },
      },
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
    },
    {
      id: 9,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      address: {
        street: 'Kattie Turnpike',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
          lat: '-38.2386',
          lng: '57.2232',
        },
      },
      phone: '024-648-3804',
      website: 'ambrose.net',
    },
  ];
  
  // Create a function to print user full address
  // suite - street, city, zipcode
  
  const printUserAddress = (user) => {
      if (!user.address.suite) {
          return `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
      }
      return `${user.address.suite} - ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
  };
  
  console.log(printUserAddress(usersData[1]));
  console.log(printUserAddress(usersData[4]));
  console.log(printUserAddress(usersData[6]));
  
  // Create a function to separate first name and last name for all users
  // firstName; "", lastName; ""
  
  const setFirstLastName = (users) => {
    const newUsersData = users.map((user) => {
        const userFirstLastName = user.name.split(" ");
        user.firstName = userFirstLastName[0];
        user.lastName = userFirstLastName[1];
        return user;
    });
    return newUsersData;
  };

  userData = setFirstLastName(userData);
  usersData;
  
  console.log(setFirstLastName(usersData));
  
  // Create a function to get user by id and print object with user first and last name
  const getUserById = (userId, users) => {
    const selectedUser = users.find((user) => {
        return user.id === userID;
    });
    return {
        id: selectedUser.id,
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
    };
  };
  
  console.log(getUserById(5, usersData));
  console.log(getUserById(8, usersData));
  
  // Create a function to delete user by id and print message to inform which user id deleted
  
  const deleteUser = (userId) => {
      return users.filter((user, index) => {
          return used.id !== userId;
      });
  };
  
  console.log(deleteUser(4));
  
  // Create a function to add a new user and print message including new user id.
  const newUser = [
    ['name', 'Glenna Reichert'],
    ['username', 'Delphine'],
    ['email', 'Chaim_McDermott@dana.io'],
    [
      'address',
      {
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        geo: {
          lat: '24.6463',
          lng: '-168.8889',
        },
      },
    ],
    ['phone', '(775)976-6794 x41206'],
    ['website', 'conrad.com'],
  ];
  
  const createUser = (userData) => {
      const newUser = {};
      newUser.id = userDat.length + 1;
      userData.forEach((pair) => {
          newUser[pair[0]] = pair[1];
      });
      usersData.push(newUser);
      return `New user added: id - ${newUser.id}`;
  };
  
  console.log(createUser(newUser));
  
  // Create a function to update user by id and print updated user
  
  const updateUser = (userId, updateInfo) => {
      let selectedUser;
      usersData.forEach((user) => {
          if (user.id === userId) {
              user[updatedInfo[0]] = updateInfo[1];
              selectedUser = user;
          }
      });
      return selectedUser;
  };
  
  console.log(updateUser(1, ['phone', '1-007-637-3180']));
  console.log(updateUser(3, ['email', 'clementine@yesenia.net']));