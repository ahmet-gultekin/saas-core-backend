exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  return res.status(201).json({
    message: "User created",
    user: { name, email },
  });
};

