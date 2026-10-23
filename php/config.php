<?php
declare(strict_types=1);

// WadifaInfo SDK configuration

class WadifaInfoConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WadifaInfo",
                "slug" => "wadifa-info",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://www.wadifa-info.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "concour" => [],
                    "dates_limite" => [],
                    "jours_fery" => [],
                    "salary_list" => [],
                    "vacances_scolaire" => [],
                ],
            ],
            "entity" => [
        'concour' => [
          'fields' => [
            [
              'name' => 'deadline',
              'title' => 'Deadline',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'format' => 'date',
            ],
            [
              'name' => 'employer',
              'title' => 'Employer',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'grade',
              'title' => 'Grade',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'official_notice',
              'title' => 'Official Notice',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'format' => 'uri',
            ],
            [
              'name' => 'posts',
              'title' => 'Posts',
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'published',
              'title' => 'Published',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'format' => 'date',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'format' => 'uri',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'concour',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/concours',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'concours',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'v1',
                    'concours',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'fr',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 500,
                      ],
                    ],
                  ],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dates_limite' => [
          'fields' => [],
          'name' => 'dates_limite',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/agenda/dates-limites',
                  'segments' => [
                    [
                      'lit' => 'agenda',
                    ],
                    [
                      'lit' => 'dates-limites',
                    ],
                  ],
                  'parts' => [
                    'agenda',
                    'dates-limites',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [],
                  'response' => [
                    'binary' => true,
                    'kind' => 'raw',
                    'media' => 'text/calendar',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'jours_fery' => [
          'fields' => [
            [
              'name' => 'approximate',
              'title' => 'Approximate',
              'type' => '`$BOOLEAN`',
              'short' => 'true for Islamic holidays until the Ministry of Habous confirms the date',
            ],
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'format' => 'date',
            ],
            [
              'name' => 'name_ar',
              'title' => 'Name Ar',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name_fr',
              'title' => 'Name Fr',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'religious',
              'title' => 'Religious',
              'type' => '`$BOOLEAN`',
            ],
          ],
          'name' => 'jours_fery',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/jours-feries',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'jours-feries',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'v1',
                    'jours-feries',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.holidays`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'salary_list' => [
          'fields' => [
            [
              'name' => 'grade',
              'title' => 'Grade',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'net_monthly_mad',
              'title' => 'Net Monthly Mad',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'format' => 'uri',
            ],
          ],
          'name' => 'salary_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/salaires',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'salaires',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'v1',
                    'salaires',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'fr',
                      ],
                    ],
                  ],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'vacances_scolaire' => [
          'fields' => [
            [
              'name' => 'end',
              'title' => 'End',
              'type' => '`$STRING`',
              'short' => 'inclusive',
              'format' => 'date',
            ],
            [
              'name' => 'name_ar',
              'title' => 'Name Ar',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name_fr',
              'title' => 'Name Fr',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'start',
              'title' => 'Start',
              'type' => '`$STRING`',
              'format' => 'date',
            ],
          ],
          'name' => 'vacances_scolaire',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/vacances-scolaires',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'vacances-scolaires',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'v1',
                    'vacances-scolaires',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.breaks`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WadifaInfoFeatures::make_feature($name);
    }
}
