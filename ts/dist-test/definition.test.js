"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "concour",
        "accessor": "Concour",
        "op": "list",
        "method": "GET",
        "path": "/api/v1/concours",
        "args": [],
        "select": {
            "lang": "fr",
            "limit": 500
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "lang",
            "limit"
        ],
        "queryArgs": [
            {
                "name": "lang",
                "wire": "lang"
            },
            {
                "name": "limit",
                "wire": "limit"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "attribution": {
                "license": "x",
                "license_url": "x",
                "required": "x",
                "docs": "x"
            },
            "generated": "2026-01-01T00:00:00Z",
            "count": 1,
            "items": [
                {
                    "id": 1,
                    "grade": "x",
                    "employer": "x",
                    "posts": 1,
                    "published": "2026-01-01",
                    "deadline": "2026-01-01",
                    "url": "x",
                    "official_notice": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "dates_limite",
        "accessor": "DatesLimite",
        "op": "load",
        "method": "GET",
        "path": "/agenda/dates-limites",
        "args": [],
        "select": {
            "lang": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "text/calendar"
        ],
        "query": [
            "lang"
        ],
        "queryArgs": [
            {
                "name": "lang",
                "wire": "lang"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "jours_fery",
        "accessor": "JoursFery",
        "op": "list",
        "method": "GET",
        "path": "/api/v1/jours-feries",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "source": "x",
            "license": "x",
            "note": "x",
            "holidays": [
                {
                    "date": "2026-01-01",
                    "name_fr": "x",
                    "name_ar": "x",
                    "religious": true,
                    "approximate": true
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "salary_list",
        "accessor": "SalaryList",
        "op": "list",
        "method": "GET",
        "path": "/api/v1/salaires",
        "args": [],
        "select": {
            "lang": "fr"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "lang"
        ],
        "queryArgs": [
            {
                "name": "lang",
                "wire": "lang"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "attribution": {
                "license": "x",
                "license_url": "x",
                "required": "x",
                "docs": "x"
            },
            "notice": "x",
            "count": 1,
            "items": [
                {
                    "grade": "x",
                    "net_monthly_mad": 1,
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "vacances_scolaire",
        "accessor": "VacancesScolaire",
        "op": "list",
        "method": "GET",
        "path": "/api/v1/vacances-scolaires",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "source": "x",
            "license": "x",
            "school_year": "x",
            "basis": "x",
            "breaks": [
                {
                    "start": "2026-01-01",
                    "end": "2026-01-01",
                    "name_fr": "x",
                    "name_ar": "x"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map