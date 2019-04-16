$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("trier_mails.feature");
formatter.feature({
  "line": 1,
  "name": "Trier les mails",
  "description": "\nL\u0027utilisateur de mailreader doit pouvoir trier ses mails pour les retrouver plus facilement",
  "id": "trier-les-mails",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "# Régles de Gestion (RG) :"
    },
    {
      "line": 6,
      "value": "# - On tri les mails par importance puis statut puis sujet puis date (plus recente en premier)"
    },
    {
      "line": 7,
      "value": "# Les statuts sont par ordre d\u0027importance croissants : PAS_ENVOYE, ENVOYE, LU"
    },
    {
      "line": 8,
      "value": "# Les dates sont données au format ISO8601 à la seconde et en UTC."
    }
  ],
  "line": 11,
  "name": "Tri de deux mails",
  "description": "",
  "id": "trier-les-mails;tri-de-deux-mails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "un premier mail avec l\u0027importance \"\u003cimportant1\u003e\", le statut \"\u003cstatut1\u003e\", le sujet \"\u003csujet1\u003e\" et la date \"\u003cdate1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "un second mail avec l\u0027importance \"\u003cimportant2\u003e\", le statut \"\u003cstatut2\u003e\", le sujet \"\u003csujet2\u003e\" et la date \"\u003cdate2\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "le tri doit retourner \"\u003cresu\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 17,
      "value": "# Les resulats peuvent être : MAIL1_AVANT, MAIL1_APRES, EGAUX"
    },
    {
      "line": 18,
      "value": "# problème pour le 3e exemple pour le trie avec la date"
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "trier-les-mails;tri-de-deux-mails;",
  "rows": [
    {
      "cells": [
        "important1",
        "important2",
        "statut1",
        "statut2",
        "sujet1",
        "sujet2",
        "date1",
        "date2",
        "resu"
      ],
      "line": 21,
      "id": "trier-les-mails;tri-de-deux-mails;;1"
    },
    {
      "cells": [
        "true",
        "false",
        "PAS_ENVOYE",
        "LU",
        "aaaaa",
        "bbbbbb",
        "2017-01-01T14:03:00Z",
        "2017-01-01T14:03:34Z",
        "MAIL1_AVANT"
      ],
      "line": 22,
      "id": "trier-les-mails;tri-de-deux-mails;;2"
    },
    {
      "cells": [
        "true",
        "true",
        "PAS_ENVOYE",
        "LU",
        "aaaaa",
        "bbbbbb",
        "2017-01-01T14:03:00Z",
        "2017-01-01T14:03:34Z",
        "MAIL1_APRES"
      ],
      "line": 23,
      "id": "trier-les-mails;tri-de-deux-mails;;3"
    },
    {
      "cells": [
        "true",
        "true",
        "LU",
        "LU",
        "aaaaa",
        "aaaaa",
        "2017-01-01T14:03:00Z",
        "2017-01-01T14:03:34Z",
        "MAIL1_APRES"
      ],
      "line": 24,
      "id": "trier-les-mails;tri-de-deux-mails;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Tri de deux mails",
  "description": "",
  "id": "trier-les-mails;tri-de-deux-mails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "un premier mail avec l\u0027importance \"true\", le statut \"PAS_ENVOYE\", le sujet \"aaaaa\" et la date \"2017-01-01T14:03:00Z\"",
  "matchedColumns": [
    0,
    2,
    4,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "un second mail avec l\u0027importance \"false\", le statut \"LU\", le sujet \"bbbbbb\" et la date \"2017-01-01T14:03:34Z\"",
  "matchedColumns": [
    1,
    3,
    5,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "le tri doit retourner \"MAIL1_AVANT\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 35
    },
    {
      "val": "PAS_ENVOYE",
      "offset": 53
    },
    {
      "val": "aaaaa",
      "offset": 76
    },
    {
      "val": "2017-01-01T14:03:00Z",
      "offset": 95
    }
  ],
  "location": "MailComparaisonStep.un_premier_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 136356289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 34
    },
    {
      "val": "LU",
      "offset": 53
    },
    {
      "val": "bbbbbb",
      "offset": 68
    },
    {
      "val": "2017-01-01T14:03:34Z",
      "offset": 88
    }
  ],
  "location": "MailComparaisonStep.un_second_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 184616,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 40615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAIL1_AVANT",
      "offset": 23
    }
  ],
  "location": "MailComparaisonStep.le_tri_doit_retourner(String)"
});
formatter.result({
  "duration": 3197944,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Tri de deux mails",
  "description": "",
  "id": "trier-les-mails;tri-de-deux-mails;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "un premier mail avec l\u0027importance \"true\", le statut \"PAS_ENVOYE\", le sujet \"aaaaa\" et la date \"2017-01-01T14:03:00Z\"",
  "matchedColumns": [
    0,
    2,
    4,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "un second mail avec l\u0027importance \"true\", le statut \"LU\", le sujet \"bbbbbb\" et la date \"2017-01-01T14:03:34Z\"",
  "matchedColumns": [
    1,
    3,
    5,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "le tri doit retourner \"MAIL1_APRES\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 35
    },
    {
      "val": "PAS_ENVOYE",
      "offset": 53
    },
    {
      "val": "aaaaa",
      "offset": 76
    },
    {
      "val": "2017-01-01T14:03:00Z",
      "offset": 95
    }
  ],
  "location": "MailComparaisonStep.un_premier_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 709743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 34
    },
    {
      "val": "LU",
      "offset": 52
    },
    {
      "val": "bbbbbb",
      "offset": 67
    },
    {
      "val": "2017-01-01T14:03:34Z",
      "offset": 87
    }
  ],
  "location": "MailComparaisonStep.un_second_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 199794,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 29949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAIL1_APRES",
      "offset": 23
    }
  ],
  "location": "MailComparaisonStep.le_tri_doit_retourner(String)"
});
formatter.result({
  "duration": 50462,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Tri de deux mails",
  "description": "",
  "id": "trier-les-mails;tri-de-deux-mails;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "un premier mail avec l\u0027importance \"true\", le statut \"LU\", le sujet \"aaaaa\" et la date \"2017-01-01T14:03:00Z\"",
  "matchedColumns": [
    0,
    2,
    4,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "un second mail avec l\u0027importance \"true\", le statut \"LU\", le sujet \"aaaaa\" et la date \"2017-01-01T14:03:34Z\"",
  "matchedColumns": [
    1,
    3,
    5,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "le tri doit retourner \"MAIL1_APRES\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 35
    },
    {
      "val": "LU",
      "offset": 53
    },
    {
      "val": "aaaaa",
      "offset": 68
    },
    {
      "val": "2017-01-01T14:03:00Z",
      "offset": 87
    }
  ],
  "location": "MailComparaisonStep.un_premier_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 198154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 34
    },
    {
      "val": "LU",
      "offset": 52
    },
    {
      "val": "aaaaa",
      "offset": 67
    },
    {
      "val": "2017-01-01T14:03:34Z",
      "offset": 86
    }
  ],
  "location": "MailComparaisonStep.un_second_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 164923,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 39384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAIL1_APRES",
      "offset": 23
    }
  ],
  "location": "MailComparaisonStep.le_tri_doit_retourner(String)"
});
formatter.result({
  "duration": 1340716,
  "error_message": "java.lang.AssertionError: \nExpected: is \"MAIL1_AVANT\"\n     but: was \"MAIL1_APRES\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat com.acme.mailreader.bdd.MailComparaisonStep.le_tri_doit_retourner(MailComparaisonStep.java:64)\r\n\tat ✽.Then le tri doit retourner \"MAIL1_APRES\"(trier_mails.feature:15)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "ordre d\u0027une liste de mails",
  "description": "",
  "id": "trier-les-mails;ordre-d\u0027une-liste-de-mails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "les mails :",
  "rows": [
    {
      "cells": [
        "important",
        "statut",
        "sujet",
        "date"
      ],
      "line": 29
    },
    {
      "cells": [
        "true",
        "PAS_ENVOYE",
        "aaaaa",
        "2017-01-01T14:03:00Z"
      ],
      "line": 30
    },
    {
      "cells": [
        "false",
        "PAS_ENVOYE",
        "aaaaa",
        "2017-01-01T14:03:00Z"
      ],
      "line": 31
    },
    {
      "cells": [
        "false",
        "LU",
        "bbbbb",
        "2016-12-01T14:03:00Z"
      ],
      "line": 32
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la liste ordonnée doit être :",
  "rows": [
    {
      "cells": [
        "important",
        "statut",
        "sujet",
        "date"
      ],
      "line": 36
    },
    {
      "cells": [
        "true",
        "PAS_ENVOYE",
        "aaaaa",
        "2017-01-01T14:03:00Z"
      ],
      "line": 37
    },
    {
      "cells": [
        "false",
        "LU",
        "bbbbb",
        "2016-12-01T14:03:00Z"
      ],
      "line": 38
    },
    {
      "cells": [
        "false",
        "PAS_ENVOYE",
        "aaaaa",
        "2017-01-01T14:03:00Z"
      ],
      "line": 39
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MailOrderStep.les_mails(Mail\u003e)"
});
formatter.result({
  "duration": 13980695,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 31589,
  "status": "passed"
});
formatter.match({
  "location": "MailOrderStep.la_liste_ordonnée_doit_être(Mail\u003e)"
});
formatter.result({
  "duration": 1695997,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "ordre d\u0027une autre liste de mails",
  "description": "",
  "id": "trier-les-mails;ordre-d\u0027une-autre-liste-de-mails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "les mails :",
  "rows": [
    {
      "cells": [
        "important",
        "statut",
        "sujet",
        "date"
      ],
      "line": 43
    },
    {
      "cells": [
        "true",
        "LU",
        "ccccc",
        "2018-01-01T14:03:00Z"
      ],
      "line": 44
    },
    {
      "cells": [
        "false",
        "LU",
        "lllll",
        "2018-01-01T14:03:00Z"
      ],
      "line": 45
    },
    {
      "cells": [
        "true",
        "PAS_ENVOYE",
        "aaaaa",
        "2019-01-01T14:03:00Z"
      ],
      "line": 46
    },
    {
      "cells": [
        "true",
        "LU",
        "bbbbb",
        "2019-01-01T14:03:00Z"
      ],
      "line": 47
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "la liste ordonnée doit être :",
  "rows": [
    {
      "cells": [
        "important",
        "statut",
        "sujet",
        "date"
      ],
      "line": 52
    },
    {
      "cells": [
        "true",
        "LU",
        "bbbbb",
        "2019-01-01T14:03:00Z"
      ],
      "line": 53
    },
    {
      "cells": [
        "true",
        "LU",
        "ccccc",
        "2018-01-01T14:03:00Z"
      ],
      "line": 54
    },
    {
      "cells": [
        "true",
        "PAS_ENVOYE",
        "aaaaa",
        "2019-01-01T14:03:00Z"
      ],
      "line": 55
    },
    {
      "cells": [
        "false",
        "LU",
        "lllll",
        "2018-01-01T14:03:00Z"
      ],
      "line": 56
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MailOrderStep.les_mails(Mail\u003e)"
});
formatter.result({
  "duration": 2282252,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 27487,
  "status": "passed"
});
formatter.match({
  "location": "MailOrderStep.la_liste_ordonnée_doit_être(Mail\u003e)"
});
formatter.result({
  "duration": 1042460,
  "status": "passed"
});
});