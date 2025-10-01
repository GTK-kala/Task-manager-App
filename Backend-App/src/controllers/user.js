let users = [
  {
    name: "khalid",
    email: "ahb@jncd",
    password: "123",
  },
  {
    name: "khalid",
    email: "ahb@jncd",
    password: "1234",
  },
  {
    name: "khalid",
    email: "ahb@jncd",
    password: "1234",
  },
];

export const AddUsers = (req, res) => {
  const user = {
    id: users.length,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  if (!req.body) {
    res.status(400).json({
      message: "please full fill the requirements",
    });
  }

  users.push(user);

  res.status(200).json(users);
};

export const upDateUser = (req, res) => {
//   const  name  = req.body.name;
  const id = parseInt(req.params.id);
  let new_user = users.find((user) => user.id === id);
  //   if (!req.body) {ddd
  //     res.status(400).json({
  //       message: "please full fill the requirements"
  //     });
  //   }
  //   new_user.name = name;
  res.status(201).json(new_user);
};
