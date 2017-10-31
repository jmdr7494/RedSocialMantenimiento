$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('Cucumber/Features/Cucumber.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Uso de cucumber en el que se va a probar el funcionamiento",
  "description": "de una red social.",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@featureTest"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "Login correcto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;login-correcto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Un usuario y password",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "usuario correcto y password correcta",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "se loguea",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_usuario_y_password()"
});
formatter.result({
  "duration": 409696744,
  "status": "passed"
});
formatter.match({
  "location": "annotation.usuario_correcto_y_password_correcta()"
});
formatter.result({
  "duration": 3708547467,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_loguea()"
});
formatter.result({
  "duration": 4077761,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login incorrecto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;login-incorrecto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Un usuario y password",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Usuario incorrecto y una password incorrecta",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "no se loguea",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_usuario_y_password()"
});
formatter.result({
  "duration": 32893,
  "status": "passed"
});
formatter.match({
  "location": "annotation.Usuario_incorrecto_y_una_password_incorrecta()"
});
formatter.result({
  "duration": 125366405,
  "status": "passed"
});
formatter.match({
  "location": "annotation.no_se_loguea()"
});
formatter.result({
  "duration": 42880,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Registro correcto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;registro-correcto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Un nombre, un email, una pwduno y una pwddos",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "pwduno es igual a pwddos",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "se registra",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_nombre_un_email_una_pwduno_y_una_pwddos()"
});
formatter.result({
  "duration": 40296,
  "status": "passed"
});
formatter.match({
  "location": "annotation.pwduno_es_igual_a_pwddos()"
});
formatter.result({
  "duration": 231715663,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_registra()"
});
formatter.result({
  "duration": 43857,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Registro incorrecto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;registro-incorrecto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Un nombre, un email, una pwduno y una pwddos",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "pwduno es distinto a pwddos",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "no se registra",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_nombre_un_email_una_pwduno_y_una_pwddos()"
});
formatter.result({
  "duration": 37083,
  "status": "passed"
});
formatter.match({
  "location": "annotation.pwduno_es_distinto_a_pwddos()"
});
formatter.result({
  "duration": 43648,
  "status": "passed"
});
formatter.match({
  "location": "annotation.no_se_registra()"
});
formatter.result({
  "duration": 41763,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Registro incorrecto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;registro-incorrecto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Scenario5"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Un nombre, un email, una pwduno y una pwddos",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "email ya esta en la base de datos",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "no se registra",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_nombre_un_email_una_pwduno_y_una_pwddos()"
});
formatter.result({
  "duration": 37781,
  "status": "passed"
});
formatter.match({
  "location": "annotation.email_ya_esta_en_la_base_de_datos()"
});
formatter.result({
  "duration": 125615734,
  "status": "passed"
});
formatter.match({
  "location": "annotation.no_se_registra()"
});
formatter.result({
  "duration": 40226,
  "status": "passed"
});
});