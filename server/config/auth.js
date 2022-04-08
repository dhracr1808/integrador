export const auth = {};

auth.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).send({ access: "forbidden", status: 401 });
};

auth.isAdmin = (req, res, next) => {
  if (req.user && req.user.username === "maria") return next();
  res.status(401).send({ access: "forbidden", status: 401 });
};
