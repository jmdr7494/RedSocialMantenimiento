$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com\webapp\redsocial\BorrarCuenta.feature');
formatter.feature({
  "line": 1,
  "name": "Test del borrado de cuenta del sistema",
  "description": "",
  "id": "test-del-borrado-de-cuenta-del-sistema",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Borrado de cuenta de usuario",
  "description": "",
  "id": "test-del-borrado-de-cuenta-del-sistema;borrado-de-cuenta-de-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un usuario quiere borrar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"meborraran\" \"meborraran@gmail.com\" \"1234\" para borrar correctos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "se borra al usuario",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrarCuentaTest.Un_usuario_quiere_borrar_su_cuenta()"
});
formatter.result({
  "duration": 145947900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meborraran",
      "offset": 1
    },
    {
      "val": "meborraran@gmail.com",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 37
    }
  ],
  "location": "BorrarCuentaTest.para_borrar_correctos(String,String,String)"
});
formatter.result({
  "duration": 403351200,
  "status": "passed"
});
formatter.match({
  "location": "BorrarCuentaTest.se_borra_al_usuario()"
});
formatter.result({
  "duration": 249513200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Borrado de cuenta de usuario",
  "description": "",
  "id": "test-del-borrado-de-cuenta-del-sistema;borrado-de-cuenta-de-usuario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un usuario quiere borrar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"meborraran2\" \"meborraran@hotmail.com\" \"4321\" para borrar correctos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "se borra al usuario",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrarCuentaTest.Un_usuario_quiere_borrar_su_cuenta()"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meborraran2",
      "offset": 1
    },
    {
      "val": "meborraran@hotmail.com",
      "offset": 15
    },
    {
      "val": "4321",
      "offset": 40
    }
  ],
  "location": "BorrarCuentaTest.para_borrar_correctos(String,String,String)"
});
formatter.result({
  "duration": 370405800,
  "status": "passed"
});
formatter.match({
  "location": "BorrarCuentaTest.se_borra_al_usuario()"
});
formatter.result({
  "duration": 244090100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Borrado incorrecto de una cuenta de usuario",
  "description": "",
  "id": "test-del-borrado-de-cuenta-del-sistema;borrado-incorrecto-de-una-cuenta-de-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Un usuario quiere borrar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "\"nomeborraran\" \"nomeborraran@gmail.com\" \"1234\" para borrarincorrectos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "no se borra al usuario",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrarCuentaTest.Un_usuario_quiere_borrar_su_cuenta()"
});
formatter.result({
  "duration": 13300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nomeborraran",
      "offset": 1
    },
    {
      "val": "nomeborraran@gmail.com",
      "offset": 16
    },
    {
      "val": "1234",
      "offset": 41
    }
  ],
  "location": "BorrarCuentaTest.para_borrarincorrectos(String,String,String)"
});
formatter.result({
  "duration": 122546100,
  "status": "passed"
});
formatter.match({
  "location": "BorrarCuentaTest.no_se_borra_al_usuario()"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Borrado incorrecto de una cuenta de usuario",
  "description": "",
  "id": "test-del-borrado-de-cuenta-del-sistema;borrado-incorrecto-de-una-cuenta-de-usuario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Un usuario quiere borrar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "\"nomeborraran2\" \"nomeborraran@hotmail.com\" \"4321\" para borrarincorrectos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "no se borra al usuario",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrarCuentaTest.Un_usuario_quiere_borrar_su_cuenta()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nomeborraran2",
      "offset": 1
    },
    {
      "val": "nomeborraran@hotmail.com",
      "offset": 17
    },
    {
      "val": "4321",
      "offset": 44
    }
  ],
  "location": "BorrarCuentaTest.para_borrarincorrectos(String,String,String)"
});
formatter.result({
  "duration": 148417900,
  "status": "passed"
});
formatter.match({
  "location": "BorrarCuentaTest.no_se_borra_al_usuario()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.uri('com\webapp\redsocial\BorrarPublicacion.feature');
formatter.feature({
  "line": 1,
  "name": "Test de borrado de publicaciones",
  "description": "",
  "id": "test-de-borrado-de-publicaciones",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Borrar una publicacion correctamente",
  "description": "",
  "id": "test-de-borrado-de-publicaciones;borrar-una-publicacion-correctamente;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario en el muro quiere borrar una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"Fernando\" \"fernycozar@hotmail.com\" es autor de \"Test de borrar publicacion\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "borrado de publicacion correcto",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrarPublicacionTest.Usuario_en_el_muro_quiere_borrar_una_publicacion()"
});
formatter.result({
  "duration": 4655700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fernando",
      "offset": 1
    },
    {
      "val": "fernycozar@hotmail.com",
      "offset": 12
    },
    {
      "val": "Test de borrar publicacion",
      "offset": 49
    }
  ],
  "location": "BorrarPublicacionTest.es_autor_de(String,String,String)"
});
formatter.result({
  "duration": 246938800,
  "status": "passed"
});
formatter.match({
  "location": "BorrarPublicacionTest.borrado_de_publicacion_correcto()"
});
formatter.result({
  "duration": 121936900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Borrar una publicacion correctamente",
  "description": "",
  "id": "test-de-borrado-de-publicaciones;borrar-una-publicacion-correctamente;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario en el muro quiere borrar una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"Mariap\" \"asdf@gmail.com\" es autor de \"Test de borrar publicacion\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "borrado de publicacion correcto",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrarPublicacionTest.Usuario_en_el_muro_quiere_borrar_una_publicacion()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariap",
      "offset": 1
    },
    {
      "val": "asdf@gmail.com",
      "offset": 10
    },
    {
      "val": "Test de borrar publicacion",
      "offset": 39
    }
  ],
  "location": "BorrarPublicacionTest.es_autor_de(String,String,String)"
});
formatter.result({
  "duration": 265313300,
  "status": "passed"
});
formatter.match({
  "location": "BorrarPublicacionTest.borrado_de_publicacion_correcto()"
});
formatter.result({
  "duration": 122433700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Fallo al borrar una publicacion",
  "description": "",
  "id": "test-de-borrado-de-publicaciones;fallo-al-borrar-una-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario en el muro quiere borrar una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"nosoyautor\" \"nolosoy@hotmail.com\" no es autor del \"Test de borrar publicacion\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "borrado de publicacion incorrecto",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrarPublicacionTest.Usuario_en_el_muro_quiere_borrar_una_publicacion()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nosoyautor",
      "offset": 1
    },
    {
      "val": "nolosoy@hotmail.com",
      "offset": 14
    },
    {
      "val": "Test de borrar publicacion",
      "offset": 52
    }
  ],
  "location": "BorrarPublicacionTest.no_es_autor_del(String,String,String)"
});
formatter.result({
  "duration": 194305500,
  "status": "passed"
});
formatter.match({
  "location": "BorrarPublicacionTest.borrado_de_publicacion_incorrecto()"
});
formatter.result({
  "duration": 125596100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Fallo al borrar una publicacion",
  "description": "",
  "id": "test-de-borrado-de-publicaciones;fallo-al-borrar-una-publicacion;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario en el muro quiere borrar una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"nosoyautor\" \"nolosoy@hotmail.com\" no es autor del \"Test de borrar publicacion\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "borrado de publicacion incorrecto",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrarPublicacionTest.Usuario_en_el_muro_quiere_borrar_una_publicacion()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nosoyautor",
      "offset": 1
    },
    {
      "val": "nolosoy@hotmail.com",
      "offset": 14
    },
    {
      "val": "Test de borrar publicacion",
      "offset": 52
    }
  ],
  "location": "BorrarPublicacionTest.no_es_autor_del(String,String,String)"
});
formatter.result({
  "duration": 151616200,
  "status": "passed"
});
formatter.match({
  "location": "BorrarPublicacionTest.borrado_de_publicacion_incorrecto()"
});
formatter.result({
  "duration": 122916700,
  "status": "passed"
});
formatter.uri('com\webapp\redsocial\DarLike.feature');
formatter.feature({
  "line": 1,
  "name": "Dar me gusta y quitar me gusta a publicaciones",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Me gusta correctamente una publicacion",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones;me-gusta-correctamente-una-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario conectado quiere dar me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "No le gusta a \"fernycozar@hotmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Le gusta publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "DarLikeTest.Usuario_conectado_quiere_dar_me_gusta()"
});
formatter.result({
  "duration": 3952700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernycozar@hotmail.com",
      "offset": 15
    }
  ],
  "location": "DarLikeTest.No_le_gusta_a(String)"
});
formatter.result({
  "duration": 123504700,
  "status": "passed"
});
formatter.match({
  "location": "DarLikeTest.Le_gusta_publicacion()"
});
formatter.result({
  "duration": 244978900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Me gusta correctamente una publicacion",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones;me-gusta-correctamente-una-publicacion;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario conectado quiere dar me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "No le gusta a \"asdf@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Le gusta publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "DarLikeTest.Usuario_conectado_quiere_dar_me_gusta()"
});
formatter.result({
  "duration": 16800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf@gmail.com",
      "offset": 15
    }
  ],
  "location": "DarLikeTest.No_le_gusta_a(String)"
});
formatter.result({
  "duration": 137862400,
  "status": "passed"
});
formatter.match({
  "location": "DarLikeTest.Le_gusta_publicacion()"
});
formatter.result({
  "duration": 243987200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Me gusta erroneamente una publicacion",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones;me-gusta-erroneamente-una-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado quiere dar me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Le gusta a \"fernycozar@hotmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "No dar me gusta",
  "keyword": "Then "
});
formatter.match({
  "location": "DarLikeTest.Usuario_conectado_quiere_dar_me_gusta()"
});
formatter.result({
  "duration": 15000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernycozar@hotmail.com",
      "offset": 12
    }
  ],
  "location": "DarLikeTest.Le_gusta_a(String)"
});
formatter.result({
  "duration": 133484700,
  "status": "passed"
});
formatter.match({
  "location": "DarLikeTest.No_dar_me_gusta()"
});
formatter.result({
  "duration": 122645400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Me gusta erroneamente una publicacion",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones;me-gusta-erroneamente-una-publicacion;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado quiere dar me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Le gusta a \"asdf@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "No dar me gusta",
  "keyword": "Then "
});
formatter.match({
  "location": "DarLikeTest.Usuario_conectado_quiere_dar_me_gusta()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf@gmail.com",
      "offset": 12
    }
  ],
  "location": "DarLikeTest.Le_gusta_a(String)"
});
formatter.result({
  "duration": 139017700,
  "status": "passed"
});
formatter.match({
  "location": "DarLikeTest.No_dar_me_gusta()"
});
formatter.result({
  "duration": 124169600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Dejar de gustar una publicacion",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones;dejar-de-gustar-una-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Usuario conectado quiere quitar me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Le gusta a \"fernycozar@hotmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Dejar de gustar publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "DarLikeTest.Usuario_conectado_quiere_quitar_me_gusta()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernycozar@hotmail.com",
      "offset": 12
    }
  ],
  "location": "DarLikeTest.Le_gusta_a(String)"
});
formatter.result({
  "duration": 122082100,
  "status": "passed"
});
formatter.match({
  "location": "DarLikeTest.Dejar_de_gustar_publicacion()"
});
formatter.result({
  "duration": 247322400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Dejar de gustar una publicacion",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones;dejar-de-gustar-una-publicacion;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Usuario conectado quiere quitar me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Le gusta a \"asdf@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Dejar de gustar publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "DarLikeTest.Usuario_conectado_quiere_quitar_me_gusta()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf@gmail.com",
      "offset": 12
    }
  ],
  "location": "DarLikeTest.Le_gusta_a(String)"
});
formatter.result({
  "duration": 132010900,
  "status": "passed"
});
formatter.match({
  "location": "DarLikeTest.Dejar_de_gustar_publicacion()"
});
formatter.result({
  "duration": 250511900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Dejar de gustar una publicacion erroneamente",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones;dejar-de-gustar-una-publicacion-erroneamente;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Usuario conectado quiere quitar me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "No le gusta a \"fernycozar@hotmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "No quitar me gusta",
  "keyword": "Then "
});
formatter.match({
  "location": "DarLikeTest.Usuario_conectado_quiere_quitar_me_gusta()"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernycozar@hotmail.com",
      "offset": 15
    }
  ],
  "location": "DarLikeTest.No_le_gusta_a(String)"
});
formatter.result({
  "duration": 132422300,
  "status": "passed"
});
formatter.match({
  "location": "DarLikeTest.No_quitar_me_gusta()"
});
formatter.result({
  "duration": 124601100,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Dejar de gustar una publicacion erroneamente",
  "description": "",
  "id": "dar-me-gusta-y-quitar-me-gusta-a-publicaciones;dejar-de-gustar-una-publicacion-erroneamente;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Usuario conectado quiere quitar me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "No le gusta a \"asdf@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "No quitar me gusta",
  "keyword": "Then "
});
formatter.match({
  "location": "DarLikeTest.Usuario_conectado_quiere_quitar_me_gusta()"
});
formatter.result({
  "duration": 17800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf@gmail.com",
      "offset": 15
    }
  ],
  "location": "DarLikeTest.No_le_gusta_a(String)"
});
formatter.result({
  "duration": 133537700,
  "status": "passed"
});
formatter.match({
  "location": "DarLikeTest.No_quitar_me_gusta()"
});
formatter.result({
  "duration": 122934400,
  "status": "passed"
});
formatter.uri('com\webapp\redsocial\Login.feature');
formatter.feature({
  "line": 1,
  "name": "Test del login en el sistema",
  "description": "",
  "id": "test-del-login-en-el-sistema",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Login suscessful de un usuario",
  "description": "",
  "id": "test-del-login-en-el-sistema;login-suscessful-de-un-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un usuario y password para login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"asdf@gmail.com\"  y \"1234\" se quiere loguear",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "se loguea correctamente",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.Un_usuario_y_password_para_login()"
});
formatter.result({
  "duration": 4949400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf@gmail.com",
      "offset": 1
    },
    {
      "val": "1234",
      "offset": 21
    }
  ],
  "location": "LoginTest.y_se_quiere_loguear(String,String)"
});
formatter.result({
  "duration": 128931200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.se_loguea_correctamente()"
});
formatter.result({
  "duration": 384600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login suscessful de un usuario",
  "description": "",
  "id": "test-del-login-en-el-sistema;login-suscessful-de-un-usuario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un usuario y password para login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"fernycozar@hotmail.com\"  y \"supersecreto\" se quiere loguear",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "se loguea correctamente",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.Un_usuario_y_password_para_login()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernycozar@hotmail.com",
      "offset": 1
    },
    {
      "val": "supersecreto",
      "offset": 29
    }
  ],
  "location": "LoginTest.y_se_quiere_loguear(String,String)"
});
formatter.result({
  "duration": 135011900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.se_loguea_correctamente()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login invalido de un usuario",
  "description": "",
  "id": "test-del-login-en-el-sistema;login-invalido-de-un-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Un usuario y password para login",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"meloinvento\t\t\"  y \"1asdfasdf4\" se quiere loguear",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "no consigue loguearse",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.Un_usuario_y_password_para_login()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meloinvento\t\t",
      "offset": 1
    },
    {
      "val": "1asdfasdf4",
      "offset": 20
    }
  ],
  "location": "LoginTest.y_se_quiere_loguear(String,String)"
});
formatter.result({
  "duration": 122918800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.no_consigue_loguearse()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login invalido de un usuario",
  "description": "",
  "id": "test-del-login-en-el-sistema;login-invalido-de-un-usuario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Un usuario y password para login",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"fasdfasdfasdfasdfasdfa\"  y \"asdfasdfasdfasdf\" se quiere loguear",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "no consigue loguearse",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.Un_usuario_y_password_para_login()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fasdfasdfasdfasdfasdfa",
      "offset": 1
    },
    {
      "val": "asdfasdfasdfasdf",
      "offset": 29
    }
  ],
  "location": "LoginTest.y_se_quiere_loguear(String,String)"
});
formatter.result({
  "duration": 134511700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.no_consigue_loguearse()"
});
formatter.result({
  "duration": 18400,
  "status": "passed"
});
formatter.uri('com\webapp\redsocial\MensajesPrivados.feature');
formatter.feature({
  "line": 1,
  "name": "Test de envio de mensaje privado",
  "description": "",
  "id": "test-de-envio-de-mensaje-privado",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Envio correcto de un mensaje privado",
  "description": "",
  "id": "test-de-envio-de-mensaje-privado;envio-correcto-de-un-mensaje-privado;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un usuario quiere enviar un mensaje privado",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"Fernando\" \"fernycozar@hotmail.com\" son correctos y \"Mariap\" \"asdf@gmail.com\" existe",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Test de mensaje\" enviado",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MensajesPrivadosTest.Un_usuario_quiere_enviar_un_mensaje_privado()"
});
formatter.result({
  "duration": 4308200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fernando",
      "offset": 1
    },
    {
      "val": "fernycozar@hotmail.com",
      "offset": 12
    },
    {
      "val": "Mariap",
      "offset": 53
    },
    {
      "val": "asdf@gmail.com",
      "offset": 62
    }
  ],
  "location": "MensajesPrivadosTest.son_correctos_y_existe(String,String,String,String)"
});
formatter.result({
  "duration": 246855800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test de mensaje",
      "offset": 1
    }
  ],
  "location": "MensajesPrivadosTest.enviado(String)"
});
formatter.result({
  "duration": 244256500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Envio correcto de un mensaje privado",
  "description": "",
  "id": "test-de-envio-de-mensaje-privado;envio-correcto-de-un-mensaje-privado;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un usuario quiere enviar un mensaje privado",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"Mariap\" \"asdf@gmail.com\" son correctos y \"Fernando\" \"fernycozar@hotmail.com\" existe",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Test de mensaje2\" enviado",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MensajesPrivadosTest.Un_usuario_quiere_enviar_un_mensaje_privado()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariap",
      "offset": 1
    },
    {
      "val": "asdf@gmail.com",
      "offset": 10
    },
    {
      "val": "Fernando",
      "offset": 43
    },
    {
      "val": "fernycozar@hotmail.com",
      "offset": 54
    }
  ],
  "location": "MensajesPrivadosTest.son_correctos_y_existe(String,String,String,String)"
});
formatter.result({
  "duration": 243124700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test de mensaje2",
      "offset": 1
    }
  ],
  "location": "MensajesPrivadosTest.enviado(String)"
});
formatter.result({
  "duration": 243120200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Envio incorrecto de un mensaje privado",
  "description": "",
  "id": "test-de-envio-de-mensaje-privado;envio-incorrecto-de-un-mensaje-privado;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Un usuario quiere enviar un mensaje privado",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "\"Fernando\" \"fernycozar@hotmail.com\" son correctos pero \"jghjhhj\" \"ghdfghdfgh@gmail.com\" no existe",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "\"Test de mensaje\" no enviado",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MensajesPrivadosTest.Un_usuario_quiere_enviar_un_mensaje_privado()"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fernando",
      "offset": 1
    },
    {
      "val": "fernycozar@hotmail.com",
      "offset": 12
    },
    {
      "val": "jghjhhj",
      "offset": 56
    },
    {
      "val": "ghdfghdfgh@gmail.com",
      "offset": 66
    }
  ],
  "location": "MensajesPrivadosTest.son_correctos_pero_no_existe(String,String,String,String)"
});
formatter.result({
  "duration": 384057300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test de mensaje",
      "offset": 1
    }
  ],
  "location": "MensajesPrivadosTest.no_enviado(String)"
});
formatter.result({
  "duration": 65500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Envio incorrecto de un mensaje privado",
  "description": "",
  "id": "test-de-envio-de-mensaje-privado;envio-incorrecto-de-un-mensaje-privado;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Un usuario quiere enviar un mensaje privado",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "\"Mariap\" \"asdf@gmail.com\" son correctos pero \"fgjgfhgfhj\" \"dfhgdfhgdfhg@hotmail.com\" no existe",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "\"Test de mensaje2\" no enviado",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MensajesPrivadosTest.Un_usuario_quiere_enviar_un_mensaje_privado()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariap",
      "offset": 1
    },
    {
      "val": "asdf@gmail.com",
      "offset": 10
    },
    {
      "val": "fgjgfhgfhj",
      "offset": 46
    },
    {
      "val": "dfhgdfhgdfhg@hotmail.com",
      "offset": 59
    }
  ],
  "location": "MensajesPrivadosTest.son_correctos_pero_no_existe(String,String,String,String)"
});
formatter.result({
  "duration": 244318200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test de mensaje2",
      "offset": 1
    }
  ],
  "location": "MensajesPrivadosTest.no_enviado(String)"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.uri('com\webapp\redsocial\ModificarCuenta.feature');
formatter.feature({
  "line": 1,
  "name": "Test de modificacion de cuenta de un usuario",
  "description": "",
  "id": "test-de-modificacion-de-cuenta-de-un-usuario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Modificacion de cuenta de usuario",
  "description": "",
  "id": "test-de-modificacion-de-cuenta-de-un-usuario;modificacion-de-cuenta-de-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un Usuario quiere modificar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"meeditaron\" \"meeditaron@gmail.com\" \"1234\" usuario correctos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"meeditaron\" \"meeditaron@gmail.com\" \"1234\" modificado correctamente",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarCuentaTest.Un_Usuario_quiere_modificar_su_cuenta()"
});
formatter.result({
  "duration": 2400400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meeditaron",
      "offset": 1
    },
    {
      "val": "meeditaron@gmail.com",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 37
    }
  ],
  "location": "ModificarCuentaTest.usuario_correctos(String,String,String)"
});
formatter.result({
  "duration": 373825300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meeditaron",
      "offset": 1
    },
    {
      "val": "meeditaron@gmail.com",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 37
    }
  ],
  "location": "ModificarCuentaTest.modificado_correctamente(String,String,String)"
});
formatter.result({
  "duration": 121968600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Modificacion de cuenta de usuario",
  "description": "",
  "id": "test-de-modificacion-de-cuenta-de-un-usuario;modificacion-de-cuenta-de-usuario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un Usuario quiere modificar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"meeditaron2\" \"meeditaron@hotmail.com\" \"4321\" usuario correctos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"meeditaron2\" \"meeditaron@hotmail.com\" \"4321\" modificado correctamente",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarCuentaTest.Un_Usuario_quiere_modificar_su_cuenta()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meeditaron2",
      "offset": 1
    },
    {
      "val": "meeditaron@hotmail.com",
      "offset": 15
    },
    {
      "val": "4321",
      "offset": 40
    }
  ],
  "location": "ModificarCuentaTest.usuario_correctos(String,String,String)"
});
formatter.result({
  "duration": 367065100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meeditaron2",
      "offset": 1
    },
    {
      "val": "meeditaron@hotmail.com",
      "offset": 15
    },
    {
      "val": "4321",
      "offset": 40
    }
  ],
  "location": "ModificarCuentaTest.modificado_correctamente(String,String,String)"
});
formatter.result({
  "duration": 121612100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Modificacion incorrecta de una cuenta de usuario",
  "description": "",
  "id": "test-de-modificacion-de-cuenta-de-un-usuario;modificacion-incorrecta-de-una-cuenta-de-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Un Usuario quiere modificar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "\"nomeeditaron\" \"nomeeditaron@gmail.com\" \"1234\" usuario incorrectos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "usuario no sufre cambios",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarCuentaTest.Un_Usuario_quiere_modificar_su_cuenta()"
});
formatter.result({
  "duration": 27900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nomeeditaron",
      "offset": 1
    },
    {
      "val": "nomeeditaron@gmail.com",
      "offset": 16
    },
    {
      "val": "1234",
      "offset": 41
    }
  ],
  "location": "ModificarCuentaTest.usuario_incorrectos(String,String,String)"
});
formatter.result({
  "duration": 131014200,
  "status": "passed"
});
formatter.match({
  "location": "ModificarCuentaTest.usuario_no_sufre_cambios()"
});
formatter.result({
  "duration": 22100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Modificacion incorrecta de una cuenta de usuario",
  "description": "",
  "id": "test-de-modificacion-de-cuenta-de-un-usuario;modificacion-incorrecta-de-una-cuenta-de-usuario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Un Usuario quiere modificar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "\"nomeeditaron2\" \"nomeeditaron@hotmail.com\" \"4321\" usuario incorrectos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "usuario no sufre cambios",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarCuentaTest.Un_Usuario_quiere_modificar_su_cuenta()"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nomeeditaron2",
      "offset": 1
    },
    {
      "val": "nomeeditaron@hotmail.com",
      "offset": 17
    },
    {
      "val": "4321",
      "offset": 44
    }
  ],
  "location": "ModificarCuentaTest.usuario_incorrectos(String,String,String)"
});
formatter.result({
  "duration": 128722000,
  "status": "passed"
});
formatter.match({
  "location": "ModificarCuentaTest.usuario_no_sufre_cambios()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.uri('com\webapp\redsocial\ModificarPublicacion.feature');
formatter.feature({
  "line": 1,
  "name": "Test de modificacion de publicaciones",
  "description": "",
  "id": "test-de-modificacion-de-publicaciones",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Editar una publicacion correctamente",
  "description": "",
  "id": "test-de-modificacion-de-publicaciones;editar-una-publicacion-correctamente;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario en el muro quiere editar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Cuando coinciden \"Fernando\" \"fernycozar@hotmail.com\" y \"Fernando\" \"fernycozar@hotmail.com\"  para modificar \"Test de publicacion\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "sustituir la publicacion por \"Test editado\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarPublicacionTest.Usuario_en_el_muro_quiere_editar()"
});
formatter.result({
  "duration": 2389600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fernando",
      "offset": 18
    },
    {
      "val": "fernycozar@hotmail.com",
      "offset": 29
    },
    {
      "val": "Fernando",
      "offset": 56
    },
    {
      "val": "fernycozar@hotmail.com",
      "offset": 67
    },
    {
      "val": "Test de publicacion",
      "offset": 108
    }
  ],
  "location": "ModificarPublicacionTest.Cuando_coinciden_y_para_modificar(String,String,String,String,String)"
});
formatter.result({
  "duration": 183887200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test editado",
      "offset": 30
    }
  ],
  "location": "ModificarPublicacionTest.sustituir_la_publicacion_por(String)"
});
formatter.result({
  "duration": 121875200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Editar una publicacion correctamente",
  "description": "",
  "id": "test-de-modificacion-de-publicaciones;editar-una-publicacion-correctamente;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario en el muro quiere editar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Cuando coinciden \"Mariap\" \"asdf@gmail.com\" y \"Mariap\" \"asdf@gmail.com\"  para modificar \"Test de publicacion\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "sustituir la publicacion por \"Test editado\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarPublicacionTest.Usuario_en_el_muro_quiere_editar()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariap",
      "offset": 18
    },
    {
      "val": "asdf@gmail.com",
      "offset": 27
    },
    {
      "val": "Mariap",
      "offset": 46
    },
    {
      "val": "asdf@gmail.com",
      "offset": 55
    },
    {
      "val": "Test de publicacion",
      "offset": 88
    }
  ],
  "location": "ModificarPublicacionTest.Cuando_coinciden_y_para_modificar(String,String,String,String,String)"
});
formatter.result({
  "duration": 131558200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test editado",
      "offset": 30
    }
  ],
  "location": "ModificarPublicacionTest.sustituir_la_publicacion_por(String)"
});
formatter.result({
  "duration": 121680100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Editar una publicacion incorrectamente",
  "description": "",
  "id": "test-de-modificacion-de-publicaciones;editar-una-publicacion-incorrectamente;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario en el muro quiere editar",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Cuando no coinciden \"Fernando\" \"fernycozar@hotmail.com\" y \"Fernando2\" \"fernycozar2@hotmail.com\"  para modificar \"Test de publicacion\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "no sustituir la publicacion por \"Test editado\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarPublicacionTest.Usuario_en_el_muro_quiere_editar()"
});
formatter.result({
  "duration": 16500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fernando",
      "offset": 21
    },
    {
      "val": "fernycozar@hotmail.com",
      "offset": 32
    },
    {
      "val": "Fernando2",
      "offset": 59
    },
    {
      "val": "fernycozar2@hotmail.com",
      "offset": 71
    },
    {
      "val": "Test de publicacion",
      "offset": 113
    }
  ],
  "location": "ModificarPublicacionTest.Cuando_no_coinciden_y_para_modificar(String,String,String,String,String)"
});
formatter.result({
  "duration": 121642400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test editado",
      "offset": 33
    }
  ],
  "location": "ModificarPublicacionTest.no_sustituir_la_publicacion_por(String)"
});
formatter.result({
  "duration": 46600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Editar una publicacion incorrectamente",
  "description": "",
  "id": "test-de-modificacion-de-publicaciones;editar-una-publicacion-incorrectamente;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario en el muro quiere editar",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Cuando no coinciden \"Mariap\" \"asdf@gmail.com\" y \"Mariap2\" \"asdf2@gmail.com\"  para modificar \"Test de publicacion\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "no sustituir la publicacion por \"Test editado\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarPublicacionTest.Usuario_en_el_muro_quiere_editar()"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariap",
      "offset": 21
    },
    {
      "val": "asdf@gmail.com",
      "offset": 30
    },
    {
      "val": "Mariap2",
      "offset": 49
    },
    {
      "val": "asdf2@gmail.com",
      "offset": 59
    },
    {
      "val": "Test de publicacion",
      "offset": 93
    }
  ],
  "location": "ModificarPublicacionTest.Cuando_no_coinciden_y_para_modificar(String,String,String,String,String)"
});
formatter.result({
  "duration": 164118000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test editado",
      "offset": 33
    }
  ],
  "location": "ModificarPublicacionTest.no_sustituir_la_publicacion_por(String)"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.uri('com\webapp\redsocial\Publicar.feature');
formatter.feature({
  "line": 1,
  "name": "Test de publicar en el sistema",
  "description": "",
  "id": "test-de-publicar-en-el-sistema",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Hacer una publicacion correctamente",
  "description": "",
  "id": "test-de-publicar-en-el-sistema;hacer-una-publicacion-correctamente;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario en el muro quiere publicar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"Fernando\" \"fernycozar@hotmail.com\" \"Test de publicacion\" con privacidad publica",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "publicacion publica correcta",
  "keyword": "Then "
});
formatter.match({
  "location": "PublicarTest.Usuario_en_el_muro_quiere_publicar()"
});
formatter.result({
  "duration": 6086300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fernando",
      "offset": 1
    },
    {
      "val": "fernycozar@hotmail.com",
      "offset": 12
    },
    {
      "val": "Test de publicacion",
      "offset": 37
    }
  ],
  "location": "PublicarTest.con_privacidad_publica(String,String,String)"
});
formatter.result({
  "duration": 121909500,
  "status": "passed"
});
formatter.match({
  "location": "PublicarTest.publicacion_publica_correcta()"
});
formatter.result({
  "duration": 242629300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Hacer una publicacion correctamente",
  "description": "",
  "id": "test-de-publicar-en-el-sistema;hacer-una-publicacion-correctamente;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario en el muro quiere publicar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"Mariap\" \"asdf@gmail.com\" \"Test de publicacion\" con privacidad publica",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "publicacion publica correcta",
  "keyword": "Then "
});
formatter.match({
  "location": "PublicarTest.Usuario_en_el_muro_quiere_publicar()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariap",
      "offset": 1
    },
    {
      "val": "asdf@gmail.com",
      "offset": 10
    },
    {
      "val": "Test de publicacion",
      "offset": 27
    }
  ],
  "location": "PublicarTest.con_privacidad_publica(String,String,String)"
});
formatter.result({
  "duration": 131556100,
  "status": "passed"
});
formatter.match({
  "location": "PublicarTest.publicacion_publica_correcta()"
});
formatter.result({
  "duration": 242750600,
  "status": "passed"
});
formatter.uri('com\webapp\redsocial\Registrar.feature');
formatter.feature({
  "line": 1,
  "name": "Test del registro en el sistema",
  "description": "",
  "id": "test-del-registro-en-el-sistema",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Registro suscessful de un usuario",
  "description": "",
  "id": "test-del-registro-en-el-sistema;registro-suscessful-de-un-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un nombre, email, dos pwd para registrar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"soynuevo\" \"soynuevo@gmail.com\"  y \"1234\" \"1234\" se quiere registrar",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "se registra correctamente",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrarTest.Un_nombre_email_dos_pwd_para_registrar()"
});
formatter.result({
  "duration": 7418800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soynuevo",
      "offset": 1
    },
    {
      "val": "soynuevo@gmail.com",
      "offset": 12
    },
    {
      "val": "1234",
      "offset": 36
    },
    {
      "val": "1234",
      "offset": 43
    }
  ],
  "location": "RegistrarTest.y_se_quiere_registrar(String,String,String,String)"
});
formatter.result({
  "duration": 380018300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrarTest.se_registra_correctamente()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Registro suscessful de un usuario",
  "description": "",
  "id": "test-del-registro-en-el-sistema;registro-suscessful-de-un-usuario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Un nombre, email, dos pwd para registrar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"yotambiensoynuevo\" \"yotambiensoynuevo@hotmail.com\"  y \"4321\" \"4321\" se quiere registrar",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "se registra correctamente",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrarTest.Un_nombre_email_dos_pwd_para_registrar()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yotambiensoynuevo",
      "offset": 1
    },
    {
      "val": "yotambiensoynuevo@hotmail.com",
      "offset": 21
    },
    {
      "val": "4321",
      "offset": 56
    },
    {
      "val": "4321",
      "offset": 63
    }
  ],
  "location": "RegistrarTest.y_se_quiere_registrar(String,String,String,String)"
});
formatter.result({
  "duration": 365336200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrarTest.se_registra_correctamente()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Registro invalido de un usuario",
  "description": "",
  "id": "test-del-registro-en-el-sistema;registro-invalido-de-un-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Un nombre, email, dos pwd para registrar",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"noloconsigo\" \"noloconsigo@gmail.com\"  y \"1234\" \"4321\" se quiere registrar",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "no consigue registrarse",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrarTest.Un_nombre_email_dos_pwd_para_registrar()"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noloconsigo",
      "offset": 1
    },
    {
      "val": "noloconsigo@gmail.com",
      "offset": 15
    },
    {
      "val": "1234",
      "offset": 42
    },
    {
      "val": "4321",
      "offset": 49
    }
  ],
  "location": "RegistrarTest.y_se_quiere_registrar(String,String,String,String)"
});
formatter.result({
  "duration": 142675600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrarTest.no_consigue_registrarse()"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Registro invalido de un usuario",
  "description": "",
  "id": "test-del-registro-en-el-sistema;registro-invalido-de-un-usuario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Un nombre, email, dos pwd para registrar",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"suplantoid\" \"soynuevo@gmail.com\"  y \"1234\" \"1234\" se quiere registrar",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "no consigue registrarse",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrarTest.Un_nombre_email_dos_pwd_para_registrar()"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suplantoid",
      "offset": 1
    },
    {
      "val": "soynuevo@gmail.com",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 38
    },
    {
      "val": "1234",
      "offset": 45
    }
  ],
  "location": "RegistrarTest.y_se_quiere_registrar(String,String,String,String)"
});
formatter.result({
  "duration": 139150600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrarTest.no_consigue_registrarse()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
});