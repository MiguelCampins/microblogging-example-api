var express = require("express");
var router = express.Router();

/* GET del listado de los usuarios */
router.get("/", function (req, res, next) {
  res.json({
    users: [
      {
        id: 123,
        name: "Miguel",
        phones: {
          home: "333-333-333",
          mobile: "649-211-654",
        },
        email: ["m@gmail.com", "m@hotmail.com"],
        deteOfBirth: "01-02-1983",
        registered: true,
      },
      {
        id: 456,
        name: "Pepe",
        phones: {
          home: "444-444-444",
          mobile: "633-233-354",
        },
        email: ["pepe@gmail.com", "pepe@hotmail.com"],
        deteOfBirth: "05-12-1993",
        registered: true,
      },
    ],
  });
});

/**
 * GET de un usuario por id
 */

router.get("/:id", function (req, res) {
  if (req.params.id === "123") {
    res.json({
      id: 123,
      name: "Miguel",
      phones: {
        home: "333-333-333",
        mobile: "649-211-654",
      },
      email: ["m@gmail.com", "m@hotmail.com"],
      deteOfBirth: "01-02-1983",
      registered: true,
    });
  } else {
    res.status(404).send("¡Lo siento, el item no se ha encontrado!");
  }
});

/**
 * POST de un nuevo usuario
 */
router.post("/", function (req, res) {
  var new_user = req.body;
  //ToDO (hacer algo con el usuario)
  res.status(200).send("Usuario" + req.body.name + "ha sido añadido");
});

/**
 * PUT de un usuario por su id
 */
router.put("/:id", function (req, res) {
  var updatedUser = req.body;
  //ToDO (hacer algo con el usuario)
  res.status(200).send("Usuario" + req.body.name + "ha siso actualizado");
});

/**
 * DELETE de un usuario por su id
 */
router.delete("/:id", function (req, res) {
  //ToDO (hacer algo con el usuario)
  res.status(200).send("Usuario" + req.params.id + "ha siso borrado satisfactoriamente");
});

module.exports = router;
